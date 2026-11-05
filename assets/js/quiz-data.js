// ===========================================================================
// The Revenue Half-Life™ — Question Bank
// Four pillars, 5 full-diagnostic questions each (20 total). Lite = the 2
// questions per pillar marked lite (8 total). One question per pillar is
// marked founder: true; together they produce the Founder Load score.
// Each option is scored 0–4. Pillar scores and the total display on 0–100.
// ===========================================================================

window.RDG_DATA = {
  pillars: [
    { id: 'fit',        name: 'Fit',        short: 'P1', tagline: 'Sell durable revenue. Filter out leaky revenue before it lands.' },
    { id: 'activation', name: 'Activation', short: 'P2', tagline: 'Get the customer to first value inside 30 days.' },
    { id: 'signal',     name: 'Signal',     short: 'P3', tagline: "See drift before it leaves, and growth before it's asked for." },
    { id: 'motions',    name: 'Motions',    short: 'P4', tagline: 'Four motions. Named plays, named owners, no heroics.' }
  ],

  // Each question: pillar, prompt, sub, options (in DESCENDING score order 4→0)
  questions: [
    // ---------- PILLAR 1: FIT ----------
    { pillar: 'fit', lite: true,
      prompt: "Do sales, CS, and product agree — in writing — on your Deep-Roots Customer?",
      sub: "The definition of who you sell to should be recent and shared across the go-to-market team.",
      options: [
        { text: "Yes — documented, agreed, updated within the last 6 months.", score: 4 },
        { text: "Documented and agreed, but 12+ months old.", score: 3 },
        { text: "Informal agreement, not written down.", score: 2 },
        { text: "Sales, CS, and product would each give a different answer.", score: 1 },
        { text: "No shared Deep-Roots Customer definition exists.", score: 0 }
      ]},
    { pillar: 'fit', lite: true, founder: true,
      prompt: "Who makes the final call on whether a borderline deal is a good fit?",
      sub: "Answer for how it actually works today, not the org chart.",
      options: [
        { text: "A written fit standard that sales and CS apply. The founder rarely weighs in.", score: 4 },
        { text: "Sales and CS leaders decide together; the founder is consulted on the biggest deals.", score: 3 },
        { text: "Usually the founder, but others decide when the founder isn't available.", score: 2 },
        { text: "The founder decides almost every borderline deal.", score: 1 },
        { text: "No one decides. Borderline deals just close.", score: 0 }
      ]},
    { pillar: 'fit', lite: false,
      prompt: "What share of last quarter's closed-won deals would you, today, classify as Deep-Roots?",
      sub: "Not 'good customers who might work out' — actually Deep-Roots as defined.",
      options: [
        { text: "80% or more Deep-Roots.", score: 4 },
        { text: "60–79% Deep-Roots.", score: 3 },
        { text: "40–59% Deep-Roots.", score: 2 },
        { text: "20–39% Deep-Roots.", score: 1 },
        { text: "Under 20% — or I can't tell.", score: 0 }
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
      prompt: "Of customers who churned in the last 12 months, what share were wrong-fit at sale?",
      sub: "If you can't answer this, the answer is probably 'a lot.'",
      options: [
        { text: "Under 20% wrong-fit — we mostly lose Deep-Roots customers to legitimate reasons.", score: 4 },
        { text: "20–40% wrong-fit — some pattern, being worked on.", score: 3 },
        { text: "40–60% wrong-fit — the pattern is loud.", score: 2 },
        { text: "Over 60% wrong-fit — we're churning what we shouldn't have sold.", score: 1 },
        { text: "We haven't tagged churn by Deep-Roots fit.", score: 0 }
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
    { pillar: 'activation', lite: true, founder: true,
      prompt: "If the founder were out for a month, would onboarding timelines change?",
      sub: "Think about the last five onboardings and who unblocked them.",
      options: [
        { text: "No. Onboarding runs on a playbook and named owners.", score: 4 },
        { text: "Slightly. A few escalations would wait.", score: 3 },
        { text: "Some onboardings would slow down.", score: 2 },
        { text: "Most onboardings would stall.", score: 1 },
        { text: "Onboarding would stop. The founder runs it.", score: 0 }
      ]},
    { pillar: 'activation', lite: false,
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

    // ---------- PILLAR 3: SIGNAL ----------
    { pillar: 'signal', lite: true,
      prompt: "How many of the five signal kinds do you actively track: relationship, adoption, value, commercial and sentiment?",
      sub: "A signal is a change in what a customer does, who they are, or what they're getting that requires a defined response.",
      options: [
        { text: "All five, with defined signals in each.", score: 4 },
        { text: "Three or four of them.", score: 3 },
        { text: "One or two, usually just usage.", score: 2 },
        { text: "We react to whatever we happen to notice.", score: 1 },
        { text: "We don't track customer signals.", score: 0 }
      ]},
    { pillar: 'signal', lite: true, founder: true,
      prompt: "Who usually notices a customer drifting first?",
      sub: "Drifting toward churn, or toward a bigger deal.",
      options: [
        { text: "A defined signal fires and the CSM acts on it.", score: 4 },
        { text: "The CSM, usually before anyone else.", score: 3 },
        { text: "It varies. Sometimes the CSM, sometimes the founder.", score: 2 },
        { text: "Usually the founder, through a personal relationship.", score: 1 },
        { text: "Usually the customer, when they tell us they're leaving.", score: 0 }
      ]},
    { pillar: 'signal', lite: false,
      prompt: "What share of accounts that churned or downsized had no risk signal in the 90 days before?",
      sub: "Also known as the churn surprise rate. Lower is better.",
      options: [
        { text: "Under 10%. We see almost all churn coming.", score: 4 },
        { text: "10–25%.", score: 3 },
        { text: "25–50%.", score: 2 },
        { text: "Over 50%. Most churn surprises us.", score: 1 },
        { text: "We don't track signals before churn.", score: 0 }
      ]},
    { pillar: 'signal', lite: false,
      prompt: "When a signal fires, does it trigger a named play with a named owner?",
      sub: "A signal with no play is just a notification.",
      options: [
        { text: "Yes. Every defined signal has a play and an owner, and action starts within 5 business days.", score: 4 },
        { text: "Most signals have plays, but follow-through slips.", score: 3 },
        { text: "Signals get noted; the response is ad hoc.", score: 2 },
        { text: "We see signals but have no defined response.", score: 1 },
        { text: "We don't define signals.", score: 0 }
      ]},
    { pillar: 'signal', lite: false,
      prompt: "Do you track expansion and advocacy signals, not just risk?",
      sub: "A seat limit hit, a new team asking for access, a customer reaching its stated outcome.",
      options: [
        { text: "Yes. Expansion and advocacy signals are defined and route to plays.", score: 4 },
        { text: "Expansion signals are tracked; advocacy signals aren't.", score: 3 },
        { text: "We notice them informally.", score: 2 },
        { text: "We only track risk signals.", score: 1 },
        { text: "We don't track signals at all.", score: 0 }
      ]},

    // ---------- PILLAR 4: MOTIONS ----------
    { pillar: 'motions', lite: true,
      prompt: "When is the renewal decision really made?",
      sub: "The contract has an end date. The relationship shouldn't need one.",
      options: [
        { text: "In the first six to eight months of each contract year, once adoption and value are proven.", score: 4 },
        { text: "Mid-term. We start earning it around month six, then run a structured close.", score: 3 },
        { text: "In the last 90 days, through a documented renewal cadence.", score: 2 },
        { text: "In the last 30 days, when the renewal comes up.", score: 1 },
        { text: "When the customer tells us. We chase renewals as they come.", score: 0 }
      ]},
    { pillar: 'motions', lite: true, founder: true,
      prompt: "When an at-risk account needs a save decision, how often does it wait for, or get reversed by, the founder?",
      sub: "Discounts, roadmap promises, exec outreach: who actually makes the call?",
      options: [
        { text: "Rarely. CS, revenue and product leaders decide in their own lanes.", score: 4 },
        { text: "Occasionally, on the largest accounts.", score: 3 },
        { text: "About half the time.", score: 2 },
        { text: "Most of the time.", score: 1 },
        { text: "Every time. Saves are the founder's job.", score: 0 }
      ]},
    { pillar: 'motions', lite: false,
      prompt: "Do at-risk accounts go to a cross-functional save forum with clear decision rights?",
      sub: "A Heal Desk: CS, revenue and product leaders in one room, each owning their lane.",
      options: [
        { text: "Yes. Clear entry criteria, it meets within days, and decision rights include when to let go.", score: 4 },
        { text: "A forum exists, but entry criteria or decision rights are fuzzy.", score: 3 },
        { text: "Saves happen through escalation emails and ad hoc calls.", score: 2 },
        { text: "The CSM handles saves alone.", score: 1 },
        { text: "We find out when the customer cancels.", score: 0 }
      ]},
    { pillar: 'motions', lite: false,
      prompt: "How does expansion get flagged and handed off?",
      sub: "The CSM owns the flag and the relationship; the AE owns the paper.",
      options: [
        { text: "CSMs raise CSQLs from expansion signals, AEs handle commercials, and conversion is tracked.", score: 4 },
        { text: "CSMs flag expansion, but the handoff and tracking are informal.", score: 3 },
        { text: "Expansion happens when the customer asks for it.", score: 2 },
        { text: "Sales hunts expansion without CS input.", score: 1 },
        { text: "We don't pursue expansion.", score: 0 }
      ]},
    { pillar: 'motions', lite: false,
      prompt: "How do you ask customers for reviews, references, case studies and referrals?",
      sub: "Advocacy is earned, triggered by a verified outcome rather than a calendar date.",
      options: [
        { text: "CS triggers asks off verified outcomes, works up a ladder of asks, and tracks who was asked and when.", score: 4 },
        { text: "CS asks satisfied customers, but without a trigger or tracking.", score: 3 },
        { text: "Marketing or sales asks when they need something.", score: 2 },
        { text: "The same few customers get every ask.", score: 1 },
        { text: "We rarely ask.", score: 0 }
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
      diagnosis: "You've built enough duct tape to keep the numbers from imploding, but the function is you. Before you scale GTM further, build the foundation — the leverage from Signal and Motions compounds fast at this stage.",
      priorityPillars: ['signal', 'motions']
    },
    { min: 61, max: 80,  key: 'durable',     label: 'Durable',
      summary: "The core is in place. Sharpen Signal and Motions and you compound.",
      diagnosis: "You have a functioning CS operating system. This is the band where you turn Series B into a defensible story: tighten signal-to-action loops, formalize the expansion and advocacy motions, and get founder time out of the day-to-day.",
      priorityPillars: ['motions', 'signal']
    },
    { min: 81, max: 100, key: 'compounding', label: 'Compounding',
      summary: "Rare at seed/A. Protect what you have and prepare to scale it into the next stage.",
      diagnosis: "You are in the top decile for your stage. The risk now is complacency: durability decays as you scale unless the operating system scales with you. Focus on hiring quality and playbook discipline, not chasing new methodologies.",
      priorityPillars: ['motions']
    }
  ],

  // Founder Load: built from the one founder-dependency question in each pillar.
  // Load = 100 minus the average founder-question score. Lower is better.
  founderLoad: [
    { min: 0,  max: 25,  key: 'low',      label: 'Low', tagClass: 'compounding',
      summary: "The function runs without the founder. Protect it as you hire.",
      recs: [
        "Codify the operating system into hiring criteria for your next CS leader. Protect what you built.",
        "Formalize CS onboarding with 60-day time-to-productivity as a KPI."
      ]},
    { min: 26, max: 50,  key: 'moderate', label: 'Moderate', tagClass: 'durable',
      summary: "The founder is still a pillar in places. Name those places and hand them off this quarter.",
      recs: [
        "Define the founder exit plan from CS execution: specific responsibilities, specific transition dates.",
        "Publish CS metrics alongside sales metrics in every leadership review."
      ]},
    { min: 51, max: 75,  key: 'high',     label: 'High', tagClass: 'surviving',
      summary: "Much of CS runs through the founder. Build the foundation before you scale GTM further.",
      recs: [
        "Put a named CS owner in the weekly leadership cadence within 30 days, even if it's you wearing the hat officially.",
        "Document the four pillar playbooks in a single living doc. This is a two-week project, not a two-quarter one."
      ]},
    { min: 76, max: 100, key: 'wall',     label: 'Load-bearing wall', tagClass: 'leaky',
      summary: "If the founder steps away, CS stops. The function is your second job.",
      recs: [
        "Add NRR and GRR to page one of the monthly board report starting next month.",
        "Pick the one pillar where you're most load-bearing and hand its decisions to a named owner within 30 days."
      ]}
  ],

  // Per-pillar recommendations by band, used in the unlocked report
  recommendations: {
    fit: {
      leaky: [
        "Run a 60-minute Deep-Roots working session this month with founder, head of sales, and senior CSM. Ship a written, one-page Deep-Roots Customer definition with 3–5 qualifying and 3 disqualifying criteria.",
        "Stand up a weekly pre-close pipeline review where CS can flag at-risk deals before they land.",
        "Tag every churned logo of the last 12 months Deep-Roots / borderline / wrong-fit. Share the number with the sales team."
      ],
      surviving: [
        "Refresh the Deep-Roots Customer definition — most seed/A companies' definition drifts within 12 months of Series A.",
        "Add Deep-Roots fit as a required field on closed-won and report it in the weekly GTM standup.",
        "Feed wrong-fit churn back into sales comp design at next comp cycle."
      ],
      durable: [
        "Move from flagged pipeline to a formal CS veto on deals above a threshold ACV.",
        "Instrument Deep-Roots fit tracking in your CRM so it's a queryable field, not a note."
      ],
      compounding: [
        "Institutionalize the Deep-Roots review as a quarterly discipline; don't let drift catch you."
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
        "Write your first signal library this month: at least one signal for each kind (relationship, adoption, value, commercial, sentiment), each with a named owner and play.",
        "Make champion change your first tracked signal. Check every account's champion and exec sponsor this week.",
        "Start a weekly 30-minute signal review: every signal that fired, who owns it, and what play ran."
      ],
      surviving: [
        "Measure your churn surprise rate. Bring it under 10%.",
        "Set a signal-to-action standard: an owned action within 5 business days of any signal firing.",
        "Add expansion and advocacy signals to the library, so Signal feeds every motion, not just Save."
      ],
      durable: [
        "Test each signal against your own churn and expansion history. Retire the ones that cry wolf.",
        "Track signal lead time and push it past 90 days before renewal."
      ],
      compounding: [
        "Feed signal patterns back into Fit and product, so the same risk stops being sold."
      ]
    },
    motions: {
      leaky: [
        "Build a renewal calendar this week: every account, renewal date, owner, health and last touch.",
        "Stand up a Heal Desk: an entry rule (two or more risk signals, or one critical signal), CS, revenue and product leaders at the table, and a meeting within 3 business days.",
        "Decide each renewal in the first six to eight months of the contract year, not the final 30 days."
      ],
      surviving: [
        "Split Renew into earn it (adoption and value, led by the CSM) and close it (commercials, with the AE).",
        "Route expansion signals into CSQLs and track how many convert.",
        "Give the Heal Desk authority to let go of customers who are wrong-fit or cost more to serve than they pay."
      ],
      durable: [
        "Launch the Advocate motion: trigger asks off verified outcomes and track who was asked and when.",
        "Measure renewal forecast accuracy. Aim for within 10% at 60 days out."
      ],
      compounding: [
        "Protect your advocates from ask fatigue, and carry the renewal motion into multi-year accounts."
      ]
    }
  }
};
