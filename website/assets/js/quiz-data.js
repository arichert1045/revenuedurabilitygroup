// ===========================================================================
// Revenue Durability Score™ — Question Bank
// Each pillar has 5 full-diagnostic questions. Lite = first 2 per pillar.
// Each option is scored 0–4. Question max = 4; pillar max = 20 (full) / 8 (lite).
// Total max: 100 (full) / 40 (lite) — displayed rescaled to 0–100.
// ===========================================================================

window.RDG_DATA = {
  pillars: [
    { id: 'fit',        name: 'Fit',              short: 'P1', tagline: 'Sell durable revenue. Filter out leaky revenue before it lands.' },
    { id: 'activation', name: 'Activation',       short: 'P2', tagline: 'Get the customer to first value inside 30 days.' },
    { id: 'signal',     name: 'Signal',           short: 'P3', tagline: 'See drift before it leaves.' },
    { id: 'motion',     name: 'Motion',           short: 'P4', tagline: 'Renewals and expansion as a system, not heroics.' },
    { id: 'os',         name: 'Operating System', short: 'P5', tagline: 'A CS function that runs without you.' }
  ],

  // Each question: pillar, prompt, sub, options (in DESCENDING score order 4→0)
  questions: [
    // ---------- PILLAR 1: FIT ----------
    { pillar: 'fit', lite: true,
      prompt: "Do sales, CS, and product agree — in writing — on your ICP?",
      sub: "The definition of who you sell to should be recent and shared across the go-to-market team.",
      options: [
        { text: "Yes — documented, agreed, updated within the last 6 months.", score: 4 },
        { text: "Documented and agreed, but 12+ months old.", score: 3 },
        { text: "Informal agreement, not written down.", score: 2 },
        { text: "Sales, CS, and product would each give a different answer.", score: 1 },
        { text: "No shared ICP definition exists.", score: 0 }
      ]},
    { pillar: 'fit', lite: true,
      prompt: "What share of last quarter's closed-won deals would you, today, classify as on-ICP?",
      sub: "Not 'good customers who might work out' — actually on-ICP as defined.",
      options: [
        { text: "80% or more on-ICP.", score: 4 },
        { text: "60–79% on-ICP.", score: 3 },
        { text: "40–59% on-ICP.", score: 2 },
        { text: "20–39% on-ICP.", score: 1 },
        { text: "Under 20% — or I can't tell.", score: 0 }
      ]},
    { pillar: 'fit', lite: false,
      prompt: "Is there a documented disqualification protocol in the sales process — and is it actually used?",
      sub: "Reps should be able to walk away from bad-fit deals with authority and clarity.",
      options: [
        { text: "Yes — documented, used, and reps are rewarded (not penalized) for disqualifying early.", score: 4 },
        { text: "Documented but inconsistently used.", score: 3 },
        { text: "Some reps disqualify; comp plan still rewards volume.", score: 2 },
        { text: "No formal process; reps chase everything.", score: 1 },
        { text: "Disqualification would be treated as losing.", score: 0 }
      ]},
    { pillar: 'fit', lite: false,
      prompt: "Does CS have a voice — flag or veto — on deals that look at risk pre-close?",
      sub: "CS should see mid-market+ deals before ink, not after.",
      options: [
        { text: "CS reviews all mid-market+ pipeline weekly with a flag mechanism that's respected.", score: 4 },
        { text: "CS reviews on request; flags are noted but not always acted on.", score: 3 },
        { text: "CS is looped in occasionally; no formal review.", score: 2 },
        { text: "CS learns about new deals at kickoff.", score: 1 },
        { text: "CS meets the customer during onboarding, not before.", score: 0 }
      ]},
    { pillar: 'fit', lite: false,
      prompt: "Of customers who churned in the last 12 months, what share were off-ICP at sale?",
      sub: "If you can't answer this, the answer is probably 'a lot.'",
      options: [
        { text: "Under 20% off-ICP — we mostly lose good-fit customers to legitimate reasons.", score: 4 },
        { text: "20–40% off-ICP — some pattern, being worked on.", score: 3 },
        { text: "40–60% off-ICP — the pattern is loud.", score: 2 },
        { text: "Over 60% off-ICP — we're churning what we shouldn't have sold.", score: 1 },
        { text: "We haven't tagged churn by ICP fit.", score: 0 }
      ]},

    // ---------- PILLAR 2: ACTIVATION ----------
    { pillar: 'activation', lite: true,
      prompt: "Is 'first value' defined as a measurable event in the product?",
      sub: "Not a milestone in a project plan — an event you can see in the data.",
      options: [
        { text: "Yes — defined, instrumented, and reviewed weekly.", score: 4 },
        { text: "Defined and instrumented, but not reviewed regularly.", score: 3 },
        { text: "Defined but not instrumented.", score: 2 },
        { text: "Loosely defined; we know it when we see it.", score: 1 },
        { text: "No shared definition of first value.", score: 0 }
      ]},
    { pillar: 'activation', lite: true,
      prompt: "What % of new customers reach first value within 30 days?",
      sub: "Measured from contract signature, not from kickoff.",
      options: [
        { text: "75% or more.", score: 4 },
        { text: "50–74%.", score: 3 },
        { text: "25–49%.", score: 2 },
        { text: "Under 25%.", score: 1 },
        { text: "I don't know.", score: 0 }
      ]},
    { pillar: 'activation', lite: false,
      prompt: "Do you use one repeatable onboarding playbook, or does every implementation start from a blank page?",
      sub: "Different lanes for different customer sizes is fine — but there should be lanes.",
      options: [
        { text: "One playbook with 2–3 clear lanes tied to ACV/complexity.", score: 4 },
        { text: "A playbook exists but is often improvised in practice.", score: 3 },
        { text: "Loose template — mostly reinvented per customer.", score: 2 },
        { text: "Each onboarding is a from-scratch project plan.", score: 1 },
        { text: "There is no repeatable onboarding.", score: 0 }
      ]},
    { pillar: 'activation', lite: false,
      prompt: "Who owns activation for a new customer?",
      sub: "A named role, not 'whoever grabs it.'",
      options: [
        { text: "A named role, with a written sales-to-CS handoff document that's mandatory.", score: 4 },
        { text: "A named role, but the handoff is informal.", score: 3 },
        { text: "Owner is assigned per customer, ad hoc.", score: 2 },
        { text: "Sales stays on until the customer complains.", score: 1 },
        { text: "It's genuinely unclear.", score: 0 }
      ]},
    { pillar: 'activation', lite: false,
      prompt: "Do you compare 90-day retention of activated vs. unactivated cohorts?",
      sub: "The gap between the two is your prize.",
      options: [
        { text: "Yes — measured and used to prioritize product and CS investment.", score: 4 },
        { text: "Measured occasionally; not systematically used.", score: 3 },
        { text: "Aware of the concept, not measuring yet.", score: 2 },
        { text: "Never looked at it.", score: 1 },
        { text: "We don't distinguish activated from unactivated customers.", score: 0 }
      ]},

    // ---------- PILLAR 3: SIGNAL ----------
    { pillar: 'signal', lite: true,
      prompt: "Is there a customer health model with at least three inputs (usage, sentiment, commercial), reviewed weekly?",
      sub: "A dashboard nobody looks at doesn't count.",
      options: [
        { text: "Yes — three or more inputs, reviewed weekly, tied to action.", score: 4 },
        { text: "Model exists, reviewed weekly, but action is inconsistent.", score: 3 },
        { text: "Health scores exist but aren't reviewed.", score: 2 },
        { text: "Informal / gut-feel health only.", score: 1 },
        { text: "No customer health model.", score: 0 }
      ]},
    { pillar: 'signal', lite: true,
      prompt: "What share of your churns were marked 'green' (or unclassified) within 90 days of cancel?",
      sub: "Also known as the churn surprise rate. Lower is better.",
      options: [
        { text: "Under 10% — we see almost all churn coming.", score: 4 },
        { text: "10–25%.", score: 3 },
        { text: "25–50%.", score: 2 },
        { text: "Over 50% — most churn surprises us.", score: 1 },
        { text: "We don't tag pre-churn health.", score: 0 }
      ]},
    { pillar: 'signal', lite: false,
      prompt: "Does a 'red' account trigger a specific, owned playbook within 48 hours?",
      sub: "Red should be a trigger, not a status.",
      options: [
        { text: "Yes — a named playbook with a named owner, executed within 48 hours.", score: 4 },
        { text: "There's a playbook, but SLAs slip.", score: 3 },
        { text: "Red gets a comment in the tool; action is ad hoc.", score: 2 },
        { text: "Red is noted but no defined response.", score: 1 },
        { text: "We don't formally mark accounts red.", score: 0 }
      ]},
    { pillar: 'signal', lite: false,
      prompt: "Could your CSM name your top-five highest-risk accounts in under 30 seconds?",
      sub: "Not from a dashboard — from memory.",
      options: [
        { text: "Yes — every CSM knows their top-five risks and the plan for each.", score: 4 },
        { text: "Most could, if given a minute.", score: 3 },
        { text: "Some could; depends on the CSM.", score: 2 },
        { text: "They'd have to check the system.", score: 1 },
        { text: "We don't rank risk this way.", score: 0 }
      ]},
    { pillar: 'signal', lite: false,
      prompt: "Have you run a churn post-mortem on every lost logo in the last 12 months — and changed something as a result?",
      sub: "Post-mortem without action is just theater.",
      options: [
        { text: "Yes — every churn gets a post-mortem, lessons feed ICP/activation playbooks.", score: 4 },
        { text: "Most churns get a post-mortem; changes are inconsistent.", score: 3 },
        { text: "We post-mortem big-logo churns only.", score: 2 },
        { text: "Rare and informal.", score: 1 },
        { text: "We don't do churn post-mortems.", score: 0 }
      ]},

    // ---------- PILLAR 4: MOTION ----------
    { pillar: 'motion', lite: true,
      prompt: "Do you have a documented renewal motion that begins more than 90 days before renewal date?",
      sub: "A named cadence with named plays and named owners — not a Wednesday-night call.",
      options: [
        { text: "Yes — a 120/90/60/30/14-day motion with named plays and owners.", score: 4 },
        { text: "Documented cadence, less strictly followed.", score: 3 },
        { text: "Loose sequence — often triggered ~60 days out.", score: 2 },
        { text: "Reactive — we chase renewals as they come.", score: 1 },
        { text: "No documented renewal motion.", score: 0 }
      ]},
    { pillar: 'motion', lite: true,
      prompt: "Does the founder personally close any renewal under $250K ACV?",
      sub: "A yes here means the motion isn't one yet.",
      options: [
        { text: "No — founder is off all sub-strategic renewals.", score: 4 },
        { text: "Founder in occasionally; declining.", score: 3 },
        { text: "Founder co-runs about half of renewals.", score: 2 },
        { text: "Founder runs most renewals under $250K.", score: 1 },
        { text: "Founder runs every renewal, period.", score: 0 }
      ]},
    { pillar: 'motion', lite: false,
      prompt: "Are expansion plays separated from renewal plays — and owned by a named role?",
      sub: "Renewal negotiations aren't the time to raise expansion.",
      options: [
        { text: "Yes — separated, distinct owners, teed up in EBRs not at renewal.", score: 4 },
        { text: "Separated in theory, blurred in practice.", score: 3 },
        { text: "Same person; same conversation.", score: 2 },
        { text: "Expansion is opportunistic — no plays.", score: 1 },
        { text: "We don't formally pursue expansion.", score: 0 }
      ]},
    { pillar: 'motion', lite: false,
      prompt: "What share of expansion is proactive (you teed it up) versus reactive (customer asked)?",
      sub: "Reactive expansion is a coincidence, not a motion.",
      options: [
        { text: "60%+ proactive.", score: 4 },
        { text: "30–60% proactive.", score: 3 },
        { text: "10–30% proactive.", score: 2 },
        { text: "Under 10% — mostly reactive.", score: 1 },
        { text: "We don't distinguish.", score: 0 }
      ]},
    { pillar: 'motion', lite: false,
      prompt: "Is renewal forecast accuracy measured — and is it within 10% of actual at 60 days out?",
      sub: "If the forecast is a guess, the plan is a guess.",
      options: [
        { text: "Yes — within 10% consistently.", score: 4 },
        { text: "Within 15–20%.", score: 3 },
        { text: "Over 20% off, or highly variable.", score: 2 },
        { text: "We forecast renewals but don't measure accuracy.", score: 1 },
        { text: "We don't forecast renewals.", score: 0 }
      ]},

    // ---------- PILLAR 5: OPERATING SYSTEM ----------
    { pillar: 'os', lite: true,
      prompt: "Is there a named CS owner in the leadership cadence, with CS metrics on the front page of the board report?",
      sub: "Not an appendix. Front page, next to sales.",
      options: [
        { text: "Yes — named owner in the cadence, CS metrics on page one of the board report.", score: 4 },
        { text: "Named owner in the cadence, but CS is in the appendix.", score: 3 },
        { text: "CS reports up, but no seat in leadership rhythm.", score: 2 },
        { text: "Founder covers CS in the leadership meeting.", score: 1 },
        { text: "CS isn't in the leadership cadence at all.", score: 0 }
      ]},
    { pillar: 'os', lite: true,
      prompt: "If you, the founder, stepped away for two weeks, would renewals and onboardings still close on time?",
      sub: "This is the truest test.",
      options: [
        { text: "Yes — the function runs without me.", score: 4 },
        { text: "Mostly — a few would slip but nothing critical.", score: 3 },
        { text: "Some things would stall; others would land.", score: 2 },
        { text: "Most things would stall.", score: 1 },
        { text: "Everything would stall.", score: 0 }
      ]},
    { pillar: 'os', lite: false,
      prompt: "Is CS comp tied to outcomes (NRR, GRR, activation), not just activity or seat count?",
      sub: "Comp is the loudest strategy signal you can send.",
      options: [
        { text: "Yes — variable comp tied to NRR/GRR/activation deltas.", score: 4 },
        { text: "Partial — activity + one outcome metric.", score: 3 },
        { text: "Mostly activity or salary only.", score: 2 },
        { text: "No variable comp for CS.", score: 1 },
        { text: "No formal CS comp plan.", score: 0 }
      ]},
    { pillar: 'os', lite: false,
      prompt: "Are the four pillar playbooks (Fit, Activation, Signal, Motion) documented where a new hire could read them on day one?",
      sub: "Not tribal knowledge. Written down.",
      options: [
        { text: "Yes — a living doc, updated as we learn.", score: 4 },
        { text: "Documented but outdated.", score: 3 },
        { text: "Partial — some playbooks written, others tribal.", score: 2 },
        { text: "Almost nothing written.", score: 1 },
        { text: "No playbooks exist.", score: 0 }
      ]},
    { pillar: 'os', lite: false,
      prompt: "What percentage of your time (as founder) goes to running CS execution today?",
      sub: "Lower is better. This should be trending toward zero.",
      options: [
        { text: "Under 5% and declining.", score: 4 },
        { text: "5–15%.", score: 3 },
        { text: "15–30%.", score: 2 },
        { text: "30–50%.", score: 1 },
        { text: "Over 50% — I'm the de facto Head of CS.", score: 0 }
      ]}
  ],

  bands: [
    { min: 0,  max: 40,  key: 'leaky',       label: 'Leaky bucket',
      summary: "Revenue is bleeding. Every quarter of delay raises the cost of the fix.",
      diagnosis: "You're paying a hidden churn tax on every dollar of new bookings. The board will find out — the question is whether you find out first. The fix here is not incremental; it is structural. A diagnostic and a 90-day fix plan is the only sane move.",
      priorityPillars: ['fit', 'activation']
    },
    { min: 41, max: 60,  key: 'surviving',   label: 'Surviving',
      summary: "You're holding the line, mostly through founder effort. One bad quarter from a real problem.",
      diagnosis: "You've built enough duct tape to keep the numbers from imploding, but the function is you. Before you scale GTM further, build the operating system — the leverage from Pillars 3–5 compounds fast at this stage.",
      priorityPillars: ['signal', 'motion']
    },
    { min: 61, max: 80,  key: 'durable',     label: 'Durable',
      summary: "The core is in place. Sharpen the motion and you compound.",
      diagnosis: "You have a functioning CS operating system. This is the band where you turn Series B into a defensible story: tighten signal-to-action loops, formalize expansion motion, and get founder time out of the day-to-day.",
      priorityPillars: ['motion', 'os']
    },
    { min: 81, max: 100, key: 'compounding', label: 'Compounding',
      summary: "Rare at seed/A. Protect what you have and prepare to scale it into the next stage.",
      diagnosis: "You are in the top decile for your stage. The risk now is complacency: durability decays as you scale unless the operating system scales with you. Focus on hiring quality and playbook discipline, not new frameworks.",
      priorityPillars: ['os']
    }
  ],

  // Per-pillar recommendations by band, used in the unlocked report
  recommendations: {
    fit: {
      leaky: [
        "Run a 60-minute ICP working session this month with founder, head of sales, and senior CSM. Ship a written, one-page ICP with 3–5 qualifying and 3 disqualifying criteria.",
        "Stand up a weekly pre-close pipeline review where CS can flag at-risk deals before they land.",
        "Tag every churned logo of the last 12 months on-ICP / borderline / off-ICP. Share the number with the sales team."
      ],
      surviving: [
        "Refresh the ICP definition — most seed/A companies' ICP drifts within 12 months of Series A.",
        "Add ICP-fit as a required field on closed-won and report it in the weekly GTM standup.",
        "Feed off-ICP churn back into sales comp design at next comp cycle."
      ],
      durable: [
        "Move from flagged pipeline to a formal CS veto on deals above a threshold ACV.",
        "Instrument ICP-fit tracking in your CRM so it's a queryable field, not a note."
      ],
      compounding: [
        "Institutionalize the ICP review as a quarterly discipline; don't let drift catch you."
      ]
    },
    activation: {
      leaky: [
        "Define 'first value' as a specific in-product event this week. Get engineering to instrument it.",
        "Kill your 17-step kickoff. Replace with a 45-minute kickoff focused on the first three activation events.",
        "Assign a named owner for every new customer with a mandatory sales-CS handoff doc."
      ],
      surviving: [
        "Instrument 30-day activation cohorts. Compare retention of activated vs. unactivated at 90 days.",
        "Build a three-lane onboarding playbook (light / mid / high touch) tied to ACV.",
        "Institute a weekly activation review: every customer in flight, days-in, blocker, action."
      ],
      durable: [
        "Move activation from a CS process to a shared product+CS metric on the product roadmap.",
        "Report activation rate in the monthly board deck alongside NRR."
      ],
      compounding: [
        "Watch for activation-rate decay as you scale — new segments often break the playbook."
      ]
    },
    signal: {
      leaky: [
        "Stand up a basic health model this month: three inputs (usage trend, last-touch recency, CSM sentiment).",
        "Tie each health color to a named playbook. Red is a trigger, not a status.",
        "Start a weekly 30-minute health review — every account that changed color gets a name, reason, action."
      ],
      surviving: [
        "Measure your churn surprise rate. Bring it under 10%.",
        "Formalize SLAs on red-account response: named owner, 48-hour first action.",
        "Roll churn post-mortems into a quarterly review with the exec team."
      ],
      durable: [
        "Feed health-model outputs into product for signal-driven feature work.",
        "Distinguish leading-indicator health (usage) from lagging (sentiment) and act earlier on the former."
      ],
      compounding: [
        "Automate red-account escalations to the founder and product lead; keep signal-to-action under 24 hours."
      ]
    },
    motion: {
      leaky: [
        "Build a renewal calendar this week: every account, renewal date, owner, health, forecast, last touch.",
        "Adopt a 120/90/60/30/14-day renewal cadence. Named play at each step.",
        "Remove founder from all renewals under $250K ACV within the next 90 days."
      ],
      surviving: [
        "Separate expansion motion from renewal motion. Tee up expansion in EBRs, not at renewal.",
        "Start measuring renewal forecast accuracy. Aim to be within 10% at 60 days.",
        "Publish a monthly renewal forecast to the leadership team; hold the number accountable."
      ],
      durable: [
        "Introduce structured EBRs (quarterly for strategic, semi-annual for others) with expansion narrative built in.",
        "Move to a shared renewal+expansion pipeline reviewed weekly with sales."
      ],
      compounding: [
        "Introduce multi-year renewal motion for durable accounts to lock compounding revenue."
      ]
    },
    os: {
      leaky: [
        "Put a named CS owner in the weekly leadership cadence within 30 days — even if it's you, wearing the hat officially.",
        "Add NRR and GRR to page one of the monthly board report starting next month.",
        "Document the four pillar playbooks in a single living doc. This is a two-week project, not a two-quarter one."
      ],
      surviving: [
        "Rebuild CS comp around outcomes: variable tied to NRR/GRR/activation deltas.",
        "Publish CS metrics alongside sales metrics in every leadership review.",
        "Define the founder exit plan from CS execution — specific responsibilities, specific transition dates."
      ],
      durable: [
        "Begin the search for the full-time CS leader who inherits a working function.",
        "Formalize new-hire onboarding for CS: 60-day time-to-productivity as a KPI."
      ],
      compounding: [
        "Codify the operating system into hiring criteria for the next VP CS. Protect what you built."
      ]
    }
  }
};
