// Faq.jsx — mobile FAQ accordion. Sits between Testimonials and FinalCta.

const faqStyles = {
  section: {
    background: 'var(--paper)',
    padding: '40px 14px 40px',
  },
  inner: {
    maxWidth: 720,
    margin: '0 auto',
  },
  eyebrow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--ink-mid)',
    margin: '0 0 8px',
    textAlign: 'center',
  },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(24px, 6vw, 30px)',
    lineHeight: 1.1,
    letterSpacing: '-0.005em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 24px',
    textWrap: 'balance',
    textAlign: 'center',
  },
  list: {
    border: '1.5px solid var(--ink)',
    borderRadius: 14,
    overflow: 'hidden',
    background: 'var(--paper-3)',
    boxShadow: '6px 6px 0 var(--ink)',
  },
  item: {
    borderBottom: '1px solid var(--rule)',
  },
  itemLast: {
    borderBottom: 0,
  },
  btn: {
    width: '100%',
    appearance: 'none',
    background: 'transparent',
    border: 0,
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    cursor: 'pointer',
    textAlign: 'left',
    fontFamily: 'var(--font-sans)',
  },
  q: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 1.4,
    color: 'var(--ink)',
    margin: 0,
    flex: 1,
    minWidth: 0,
  },
  icon: {
    flex: '0 0 auto',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1,
    color: 'var(--ink-mid)',
    transition: 'transform .15s ease',
    display: 'inline-block',
  },
  body: {
    padding: '0 16px 16px',
  },
  bodyP: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 14.5,
    lineHeight: 1.55,
    color: 'var(--ink-soft)',
    margin: '0 0 10px',
    textWrap: 'pretty',
  },
  bodyPLast: {
    margin: 0,
  },
};

function Faq() {
  const [open, setOpen] = React.useState(null);

  const items = [
    {
      q: 'When will I start to feel a difference?',
      a: [
        'Most women feel something shift on Day 1 — usually around the next time a craving hits. Instead of the pantry raid, there’s the mug. That’s Chocamine® doing its work.',
        'By Week 2, the CP2305 postbiotic starts changing the gut-brain conversation underneath everything. Mood gets a little more even. Sleep gets a little more restful. The 2am wake-ups soften.',
        'By Week 8, the sentence we hear over and over is: “I feel like myself again.” Not reinvented. Just recovered.',
        'Everyone’s timeline is a little different — your body’s been on keto for a while and the gut takes time to repopulate. Eight weeks is the window we tell people to commit to before they decide.*',
      ],
    },
    {
      q: 'Will Cheerific knock me out of ketosis?',
      a: [
        'For most people, no — Cheerific should fit well within a keto lifestyle, with just 2g net carbs and <1g sugar per serving.',
        'That said, ketosis depends on your overall daily carb intake and what you pair it with. To keep it as keto-friendly as possible, we recommend preparing Cheerific with low-carb, higher-fat options like water, unsweetened high-fat milk alternatives, nut or seed butter, or high-fat yogurt.',
        'Try to avoid pairing it with higher-carb mixers (like sweetened milk) or carb-heavy add-ins, since those are more likely to impact ketosis than Cheerific itself. Adding healthy fats can also help support steadier blood sugar response and make it an even better fit for a keto routine.',
      ],
    },
    {
      q: 'Will Cheerific stall my weight loss?',
      a: [
        'The opposite, actually — and this is the part of keto almost nobody talks about.',
        'A lot of stalls aren’t a macro problem. They’re a gut-brain communication problem. When your gut microbiome thins out from months of restricted eating (which happens to most women on keto), the signals between your gut and your brain get staticky. Hunger hormones misfire. Satiety signals get weak. Cortisol creeps up. And the scale stops moving even though your macros are dialed.',
        'Cheerific is built to address that exact problem. The 17 organic superfoods restore the plant-diversity most keto diets are missing. The CP2305 postbiotic supports the gut-brain conversation directly. So instead of stalling weight loss, it’s designed to remove one of the most common reasons keto stalls happen in the first place.',
        'What it won’t do: replace a calorie deficit. If your macros are off, no supplement fixes that. But if you’re doing everything right and the scale won’t move, this is the conversation almost no one in the keto world is having with you.*',
      ],
    },
    {
      q: "I've been constipated on keto for weeks. Will this help?",
      a: [
        'Yes — and you’re not alone. This is the single most-reported side effect on every keto forum on the internet, and most of the “solutions” out there are awful. Psyllium husk grit. Magnesium citrate floods. Three-day cleanse weeks that feel like the stomach flu on purpose.',
        'Each scoop of Cheerific delivers approximately 4g of real fiber from actual food sources — gently woven into the cocoa, greens, and fruit blends. The CP2305 postbiotic supports gut motility from the inside instead of forcing it from the outside.',
        'It’s not a cleanse. It’s not a laxative. It’s not a regret cycle. It’s just real fiber from real food, doing what fiber is supposed to do — quietly, daily, without drama.',
        'As one customer put it: “So delicious and it def makes you go!!”*',
      ],
    },
    {
      q: 'Where did all the sugar and carbs go?',
      a: [
        'We figured out how to deliver the rich, indulgent taste of real dark chocolate without the sugar — using Chocamine®, a patented cocoa-based ingredient that captures the chocolate experience without the blood-sugar fallout.',
        'The result: less than 1g of sugar and only 30 calories per cup. All the chocolate. None of the regret.',
      ],
    },
    {
      q: 'Does this have caffeine?',
      a: [
        'Almost none. Cheerific contains 5-10mg of naturally occurring caffeine per serving — roughly 1/15th of a cup of coffee — from the organic cocoa and a small amount of green tea.',
        "The lift you feel from Cheerific doesn't come from caffeine. It comes from theobromine, a gentle, naturally occurring compound in cocoa that supports steady mood and focus without the jitter or crash of coffee.",
        'Most women drink Cheerific in the morning or afternoon without affecting their sleep.',
      ],
    },
    {
      q: "How do I take it? When's the best time?",
      a: [
        "One scoop in 6-8oz of hot or cold water, milk, or your favorite milk alternative. Stir or shake and you're done — the whole ritual takes about 60 seconds.",
        "Most women drink Cheerific as a morning ritual — the way they used to drink coffee — or as a late-afternoon pick-me-up to head off the 3pm crash and the evening chocolate craving. There's no wrong time.",
        "Some customers also blend it into smoothies, oatmeal, or yogurt. It's flexible.",
      ],
    },
    {
      q: 'Can I take more than one scoop a day?',
      a: [
        'Yes. One scoop is the standard daily serving, but many of our customers enjoy a second cup in the afternoon — especially during the 3pm window when energy and cravings tend to dip.',
        'Cheerific is food-based and gentle enough for daily, multi-serving use.',
      ],
    },
    {
      q: 'Is Cheerific gluten-free, dairy-free, organic, and non-GMO?',
      a: [
        'Yes to all four. Cheerific is certified organic, certified gluten-free, certified dairy-free, and certified non-GMO. No soy, no artificial sweeteners, no sugar alcohols, no added sugar.',
        'If you have a specific allergy or sensitivity, the full ingredient list is available on every label and on our product page.',
      ],
    },
    {
      q: 'Is this third-party tested?',
      a: [
        "Yes. Every ingredient is tested for identity, purity, and safety. If it's on the label, it's in the canister — in the amount we say it is.",
        'Cheerific is manufactured in FDA-inspected, Certified U.S. Good Manufacturing facilities. Every finished lot is tested for purity and potency before it gets our final Quality Assurance approval.',
      ],
    },
    {
      q: "What if I don't like it? What's the guarantee?",
      a: [
        'Try Cheerific for a full 30 days, completely on us.',
        "If you don't feel more like yourself again — calmer, steadier, the afternoon chocolate craving handled, your mornings feeling like yours again — just send back what you haven't used and we'll refund every dollar.",
        'No restocking fee. No "unopened only" fine print. No phone tree. No hoops.',
        "This is our 30-Day Feel Like Yourself Again Guarantee, and it's the entire reason we feel comfortable asking you to try Cheerific in the first place.",
      ],
    },
    {
      q: 'How many scoops are in one canister?',
      a: ['There are 30 scoops in one canister — a full month of daily rituals.'],
    },
    {
      q: 'How does subscribe and save work?',
      a: [
        "When you subscribe, you lock in 17% off every order, forever — plus you'll never have to worry about running out. Cheerific shows up at your door on your schedule, and you stay in control the whole time.",
      ],
    },
    {
      q: 'How do I manage or cancel my subscription?',
      a: [
        ['Easily. Update, modify, or cancel your subscription anytime from your account portal at ', { link: 'https://getcheeri.com/account?utm_source=vercel&utm_medium=landing_page&utm_campaign=keto', text: 'getcheeri.com/account' }, '. No phone calls, no hoops.'],
        ["If you'd rather have a human help, just email ", { link: 'mailto:care@getcheeri.com', text: 'care@getcheeri.com' }, " and we'll take care of it for you."],
      ],
    },
    {
      q: 'I have another question. Where can I ask it?',
      a: [
        ['Drop us a line at ', { link: 'mailto:care@getcheeri.com', text: 'care@getcheeri.com' }, " — we read every message and we're happy to help."],
      ],
    },
  ];

  // Render a single paragraph: string | array of (string | { link, text })
  function renderPara(p, key, lastStyle) {
    const style = lastStyle ? { ...faqStyles.bodyP, ...faqStyles.bodyPLast } : faqStyles.bodyP;
    if (typeof p === 'string') {
      return (
        <p key={key} style={style}>{window.tmify(p)}</p>
      );
    }
    return (
      <p key={key} style={style}>
        {p.map((seg, i) => {
          if (typeof seg === 'string') return <React.Fragment key={i}>{window.tmify(seg)}</React.Fragment>;
          return (
            <a key={i} href={seg.link} style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
              {seg.text}
            </a>
          );
        })}
      </p>
    );
  }

  return (
    <section style={faqStyles.section} data-screen-label="08a FAQ">
      <div style={faqStyles.inner}>
        <p style={faqStyles.eyebrow}>FAQ</p>
        <h2 style={faqStyles.h}>Frequently Asked Questions</h2>
        <div style={faqStyles.list}>
          {items.map((it, i) => {
            const isOpen = open === i;
            const isLast = i === items.length - 1;
            return (
              <div key={i} style={{ ...faqStyles.item, ...(isLast ? faqStyles.itemLast : {}) }}>
                <button
                  type="button"
                  style={faqStyles.btn}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span style={faqStyles.q}>{window.tmify(it.q)}</span>
                  <span style={{
                    ...faqStyles.icon,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div style={faqStyles.body}>
                    {it.a.map((p, j) => renderPara(p, j, j === it.a.length - 1))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Faq });
