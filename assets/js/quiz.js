// ===========================================================================
// Revenue Durability Score™ — Quiz Engine
// Powers both the lite (10-question) and full (25-question) quizzes.
// Reads window.RDG_MODE ("lite" or "full") set in the host HTML.
// ===========================================================================

(function () {
  var MODE = window.RDG_MODE || 'lite';
  var DATA = window.RDG_DATA;
  var qs = DATA.questions.filter(function (q) { return MODE === 'full' ? true : q.lite; });

  var state = {
    idx: 0,
    answers: new Array(qs.length).fill(null) // stores raw scores 0–4
  };

  var el = {
    intro:    document.getElementById('quiz-intro'),
    stage:    document.getElementById('quiz-stage'),
    result:   document.getElementById('quiz-result'),
    progFill: document.getElementById('quiz-progress-fill'),
    stepMeta: document.getElementById('quiz-step-meta'),
    card:     document.getElementById('quiz-card'),
    prev:     document.getElementById('quiz-prev'),
    next:     document.getElementById('quiz-next'),
    start:    document.getElementById('quiz-start')
  };

  // ---------- start ----------
  if (el.start) {
    el.start.addEventListener('click', function () {
      el.intro.classList.add('hidden');
      el.stage.classList.remove('hidden');
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- rendering ----------
  function render() {
    var q = qs[state.idx];
    var pillar = DATA.pillars.find(function (p) { return p.id === q.pillar; });
    var pct = ((state.idx + 1) / qs.length) * 100;

    el.progFill.style.width = pct + '%';
    el.stepMeta.innerHTML =
      '<span><span class="pillar-chip">' + pillar.short + ' · ' + escapeHtml(pillar.name) + '</span></span>' +
      '<span>Question ' + (state.idx + 1) + ' of ' + qs.length + '</span>';

    var optsHtml = q.options.map(function (o, i) {
      var selected = state.answers[state.idx] === o.score ? ' selected' : '';
      return '' +
        '<button class="quiz-option' + selected + '" data-score="' + o.score + '" type="button">' +
          '<span class="dot"></span>' +
          '<span class="quiz-option-text">' + escapeHtml(o.text) + '</span>' +
        '</button>';
    }).join('');

    el.card.innerHTML =
      '<div class="quiz-question">' + escapeHtml(q.prompt) + '</div>' +
      (q.sub ? '<div class="quiz-question-sub">' + escapeHtml(q.sub) + '</div>' : '') +
      '<div class="quiz-options">' + optsHtml + '</div>';

    // wire up options
    el.card.querySelectorAll('.quiz-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.answers[state.idx] = parseInt(btn.getAttribute('data-score'), 10);
        // Visually update
        el.card.querySelectorAll('.quiz-option').forEach(function (b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
        // Auto-advance after a short pause, unless it's the final question
        setTimeout(function () {
          if (state.idx < qs.length - 1) {
            state.idx += 1;
            render();
            window.scrollTo({ top: el.stage.offsetTop - 40, behavior: 'smooth' });
          } else {
            updateNavState();
          }
        }, 220);
      });
    });

    updateNavState();
  }

  function updateNavState() {
    el.prev.disabled = state.idx === 0;
    var answered = state.answers[state.idx] !== null;
    var isLast = state.idx === qs.length - 1;
    var allAnswered = state.answers.every(function (a) { return a !== null; });

    if (isLast) {
      el.next.textContent = 'See my score →';
      el.next.disabled = !allAnswered;
    } else {
      el.next.textContent = 'Next →';
      el.next.disabled = !answered;
    }
  }

  el.prev && el.prev.addEventListener('click', function () {
    if (state.idx > 0) { state.idx -= 1; render(); }
  });
  el.next && el.next.addEventListener('click', function () {
    if (state.idx < qs.length - 1) {
      if (state.answers[state.idx] !== null) { state.idx += 1; render(); }
    } else {
      if (state.answers.every(function (a) { return a !== null; })) showResult();
    }
  });

  // ---------- scoring ----------
  function computeScores() {
    // Per-pillar aggregation: raw score sum / (num answered * 4) * 100
    var pillarScores = {};
    DATA.pillars.forEach(function (p) { pillarScores[p.id] = { raw: 0, count: 0 }; });

    qs.forEach(function (q, i) {
      var s = state.answers[i];
      if (s !== null) {
        pillarScores[q.pillar].raw += s;
        pillarScores[q.pillar].count += 1;
      }
    });

    var pillarPct = {};
    DATA.pillars.forEach(function (p) {
      var ps = pillarScores[p.id];
      pillarPct[p.id] = ps.count > 0 ? Math.round((ps.raw / (ps.count * 4)) * 100) : 0;
    });

    // Total: average of pillar percentages so all pillars weigh equally regardless of mode
    var vals = DATA.pillars.map(function (p) { return pillarPct[p.id]; });
    var total = Math.round(vals.reduce(function (a, b) { return a + b; }, 0) / vals.length);
    var band = DATA.bands.find(function (b) { return total >= b.min && total <= b.max; });

    return { total: total, pillarPct: pillarPct, band: band };
  }

  // ---------- results ----------
  function showResult() {
    var r = computeScores();
    el.stage.classList.add('hidden');
    el.result.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Hero: total score
    document.getElementById('score-total').textContent = r.total;
    var bandEl = document.getElementById('score-band');
    bandEl.textContent = r.band.label;
    bandEl.className = 'result-band-large band-' + r.band.key;

    document.getElementById('score-band-summary').textContent = r.band.summary;

    // Per-pillar cards
    var pillarHtml = DATA.pillars.map(function (p) {
      var pct = r.pillarPct[p.id];
      return '' +
        '<div class="pillar-score-card">' +
          '<div class="pname">' + escapeHtml(p.name) + '</div>' +
          '<div class="pscore">' + pct + '<span style="font-size:0.9rem;opacity:0.6;">/100</span></div>' +
          '<div class="pbar"><div class="pbar-fill" style="width:' + pct + '%;"></div></div>' +
        '</div>';
    }).join('');
    document.getElementById('pillar-scores').innerHTML = pillarHtml;

    // Detailed report (initially locked)
    renderReport(r);

    // Priority focus text
    var priorityNames = r.band.priorityPillars.map(function (pid) {
      return DATA.pillars.find(function (p) { return p.id === pid; }).name;
    }).join(' and ');
    var priorityEl = document.getElementById('priority-focus');
    if (priorityEl) priorityEl.textContent = priorityNames;
  }

  function renderReport(r) {
    var host = document.getElementById('report-body');
    if (!host) return;

    var html = '';
    html += '<h3>Your durability read</h3>';
    html += '<p>' + escapeHtml(r.band.diagnosis) + '</p>';

    html += '<h3 class="mt-3">Pillar-by-pillar diagnosis</h3>';
    DATA.pillars.forEach(function (p) {
      var pct = r.pillarPct[p.id];
      var bandKey = pct <= 40 ? 'leaky' : pct <= 60 ? 'surviving' : pct <= 80 ? 'durable' : 'compounding';
      var recs = (DATA.recommendations[p.id] && DATA.recommendations[p.id][bandKey]) || [];

      html += '' +
        '<div style="border-top: 1px solid var(--line); padding-top: 20px; margin-top: 20px;">' +
          '<div style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">' +
            '<div><h4 style="margin-bottom: 4px;">Pillar · ' + escapeHtml(p.name) + '</h4>' +
              '<div class="text-slate" style="font-size:0.9rem;">' + escapeHtml(p.tagline) + '</div></div>' +
            '<div style="text-align:right;">' +
              '<div style="font-size:2rem; font-weight:800; color:var(--navy-ink); line-height:1;">' + pct + '<span style="font-size:0.9rem; color:var(--slate);">/100</span></div>' +
              '<span class="band-tag band-' + bandKey + '">' + capitalize(bandKey) + '</span>' +
            '</div>' +
          '</div>' +
          '<h4 class="mt-2" style="color:var(--amber);">What to do first</h4>' +
          '<ul>' + recs.map(function (r2) { return '<li>' + escapeHtml(r2) + '</li>'; }).join('') + '</ul>' +
        '</div>';
    });

    // Comparative benchmark note (kept honest — sample sizes matter)
    html += '' +
      '<div class="callout" style="margin-top: 32px;">' +
        '<span class="label">A note on benchmarks</span>' +
        'These bands are RDG\'s working bands for seed and Series A SaaS. They tighten with every engagement we run. If your pillar scores are unevenly distributed (e.g. very strong on Motion but weak on Fit), that pattern is more diagnostic than the headline number.' +
      '</div>';

    host.innerHTML = html;

    // Show the report as unlocked immediately in dev; production keeps it gated by email
    // — see the .report-locked wrapper in the HTML and the form handler below.
  }

  // ---------- email gate ----------
  var gateForm = document.getElementById('unlock-form');
  if (gateForm) {
    gateForm.addEventListener('submit', function (e) {
      // If a form provider (Formspree/Netlify) is configured, let the browser submit it.
      // We optimistically unlock the report so the user sees value immediately.
      // Replace action="..." in the HTML to wire up your actual endpoint.
      var action = gateForm.getAttribute('action') || '';
      if (action.indexOf('YOUR-') !== -1 || action === '' || action === '#') {
        e.preventDefault();
        unlockReport();
      } else {
        // Let the form submit, but also unlock on this page.
        // Some providers (Formspree) will redirect; if yours doesn't, this remains visible.
        unlockReport();
      }
    });
  }

  function unlockReport() {
    var locked = document.querySelector('.report-locked');
    if (locked) locked.classList.remove('report-locked');
    var overlay = document.querySelector('.lock-overlay');
    if (overlay) overlay.remove();
    var thanks = document.getElementById('unlock-thanks');
    if (thanks) thanks.classList.remove('hidden');
    // Scroll the report into view
    var body = document.getElementById('report-body');
    if (body) window.scrollTo({ top: body.offsetTop - 40, behavior: 'smooth' });
  }

  // ---------- utils ----------
  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
})();
