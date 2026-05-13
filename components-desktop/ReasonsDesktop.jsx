// ReasonsDesktop.jsx — alternating zig-zag image/text rows.

const reasonsDStyles = {
  section: {
    background: 'var(--paper-2)',
    padding: '80px 0 32px',
    position: 'relative',
  },
  chevronDivider: {
    position: 'absolute',
    top: -1,
    left: 0,
    width: '100%',
    height: 80,
    display: 'block',
    pointerEvents: 'none',
  },
  inner: {
    maxWidth: 1320,
    margin: '0 auto',
    padding: '0 48px',
  },
  sectionHead: {
    textAlign: 'center',
    margin: '0 auto 56px',
    maxWidth: 1080,
  },
  sectionEyebrow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--ink-mid)',
    margin: '0 0 14px',
  },
  sectionH: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(36px, 4vw, 52px)',
    lineHeight: 1.04,
    letterSpacing: '-0.015em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: 0,
    textWrap: 'balance',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 56,
    alignItems: 'center',
    padding: 32,
    background: 'var(--paper-3)',
    borderRadius: 24,
    marginBottom: 40,
    border: '2px solid var(--ink)',
    boxShadow: '10px 10px 0 var(--ink)',
  },
  rowFirst: {},
  rule: {
    height: 2,
    background: 'var(--green)',
    border: 0,
    borderRadius: 1,
    margin: '0 0 22px',
  },
  lede: {
    fontWeight: 700,
    color: 'var(--accent)',
  },
  imgCol: {
    width: '100%',
  },
  imgPhPhoto: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  imgPh: {
    width: '100%',
    aspectRatio: '4 / 5',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 14px, var(--ph-2) 14px 28px)',    border: '1px solid var(--rule)',
    borderRadius: 18,
    display: 'flex',
    alignItems: 'flex-end',
    padding: 16,
    overflow: 'hidden',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 24px 60px rgba(48,8,4,0.08)',
  },
  imgPhLabel: {
    background: 'var(--paper)',
    border: '1px solid var(--rule)',
    padding: '5px 9px',
    borderRadius: 4,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    color: 'var(--ink-soft)',
  },
  textCol: {
    maxWidth: 540,
  },
  headRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    margin: '0 0 20px',
  },
  badge: {
    flex: '0 0 auto',
    width: 72,
    height: 72,
    borderRadius: '50%',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 34,
    letterSpacing: '-0.02em',
    lineHeight: 1,
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 10px 24px rgba(48,8,4,0.20)',
  },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(28px, 2.6vw, 36px)',
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: 0,
    textWrap: 'balance',
    flex: 1,
    minWidth: 0,
  },
  p: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: '0 0 14px',
    textWrap: 'pretty',
  },
  pLast: { margin: 0 },
};

function ReasonRow({ index, total, eyebrow, headline, body, imageLabel, imageSrc }) {
  const imgLeft = index % 2 === 1; // 1,3,5,7 → image LEFT; 2,4,6 → image RIGHT
  const isFirst = index === 1;
  const ImgEl = (
    <div style={reasonsDStyles.imgCol}>
      <div style={{...reasonsDStyles.imgPh, position: 'relative'}}>
        {imageSrc ? (
          <img src={imageSrc} alt={imageLabel} style={reasonsDStyles.imgPhPhoto} />
        ) : (
          <span style={reasonsDStyles.imgPhLabel}>{imageLabel}</span>
        )}
      </div>
    </div>
  );
  const TextEl = (
    <div style={reasonsDStyles.textCol}>
      <div style={reasonsDStyles.headRow}>
        <span style={reasonsDStyles.badge} aria-label={eyebrow}>{index}</span>
        <h3 style={reasonsDStyles.h}>{window.tmify(headline)}</h3>
      </div>
      <hr style={reasonsDStyles.rule} />
      {body.map((para, i) => {
        const last = i === body.length - 1;
        const baseStyle = { ...reasonsDStyles.p, ...(last ? reasonsDStyles.pLast : {}) };
        if (typeof para === 'string') {
          return <p key={i} style={baseStyle}>{window.tmify(para)}</p>;
        }
        return (
          <p key={i} style={baseStyle}>
            <span style={reasonsDStyles.lede}>{window.tmify(para.lede)}</span>
            {para.tail ? <> {window.tmify(para.tail)}</> : null}
          </p>
        );
      })}
    </div>
  );
  return (
    <div
      style={{ ...reasonsDStyles.row, ...(isFirst ? reasonsDStyles.rowFirst : {}) }}
      data-screen-label={`02 Reason ${String(index).padStart(2, '0')}`}
    >
      {imgLeft ? <>{ImgEl}{TextEl}</> : <>{TextEl}{ImgEl}</>}
    </div>
  );
}

function ReasonsD() {
  const reasons = [
    {
      n: 1,
      headline: 'The \u201cKeto-Friendly\u201d Chocolate In Your Pantry Is The Thing Breaking Your Keto',
      body: [
        'The bars with **the green leaf on the wrapper.** The chips with **the \u201cketo-friendly\u201d label.** The sugar-free chocolate squares at the checkout aisle of your health food store.',
        'You bought them because **you were doing the right thing.** You were swapping real chocolate for \u201cketo chocolate.\u201d **You were being good.**',
        { lede: 'And then somewhere around 45 minutes later, you were sprinting to the bathroom.' },
        'Sugar alcohols \u2014 erythritol, maltitol, the whole family \u2014 are in almost every keto chocolate on the shelf. **They\u2019re not the clean swap they\u2019re marketed as.** And **sugar alcohols can still spike insulin in a lot of people** \u2014 which means the \u201cketo\u201d chocolate you bought to stay in ketosis is **the exact thing quietly knocking you out of it.**',
        'Cheerific has **zero sugar alcohols. Zero erythritol. Zero maltitol.** Less than 1g of sugar per serving. Real cocoa. **No sprint to the bathroom.**',
      ],
    },
    {
      n: 2,
      headline: 'The 10pm Pantry Raid Isn\u2019t A Willpower Problem. It\u2019s A Wiring Problem.',
      body: [
        'It\u2019s 10pm. The kids are down. The kitchen is clean. **You\u2019ve done everything right all day.** And then, like clockwork, **your brain sends you to the pantry.**',
        { lede: 'Here\u2019s the truth nobody on keto Instagram will tell you:', tail: 'the 10pm craving **isn\u2019t a character flaw. It\u2019s a chemistry loop.** Decades of eating chocolate in the evening **trains your brain to release dopamine at that exact time of night** \u2014 whether chocolate shows up or not.' },
        '**You can\u2019t out-discipline a 30-year habit loop. But you can satisfy it.**',
        'Cheerific is built around **Chocamine\u00ae** \u2014 a patented, clinically studied cocoa extract that hits the same dopamine circuit your brain is asking for at 10pm \u2014 with **zero sugar crash, zero insulin spike, and zero \u201cI just blew 47 days\u201d regret at 10:04.**',
        '***You\u2019re not weak. You\u2019re wired. There\u2019s a difference.***',
      ],
    },
    {
      n: 3,
      headline: 'Why Keto Flu Hits Women Over 40 Harder Than Anyone Warned You',
      body: [
        'You read the blogs. You knew to expect the **\u201cketo flu.\u201d** What the blogs didn\u2019t tell you is that in your 40s, **it doesn\u2019t land like a flu. It lands like a personality change.**',
        'The 2am wake-up where you\u2019re suddenly **hot, then freezing, then furious.** The anxiety on your chest. The mood that swings hard at your husband over **a non-event five years ago.** The afternoon energy crash that **takes you out at the knees.**',
        '**Most keto content blames electrolytes.** But sodium doesn\u2019t fix sleep. Sodium doesn\u2019t fix mood. Sodium doesn\u2019t fix the gut-brain static that hits harder after 40.',
        'Cheerific includes **CP2305** \u2014 a clinically studied postbiotic shown to support **calm mood, digestive comfort under stress, and better sleep quality during stressful periods.** *',
        'A few weeks in, most women describe the same thing: ***the static isn\u2019t as loud anymore.***',
      ],
    },
    {
      n: 4,
      headline: 'The Keto Stall Nobody Explains (And The Gut-Brain Reset Nobody Talks About)',
      body: [
        'Three weeks in. **Scale won\u2019t move.** Macros are dialed. You\u2019re in ketosis \u2014 the strips say so \u2014 and nothing.',
        { lede: 'Here\u2019s what almost nobody in the keto world is telling you:', tail: 'a lot of stalls aren\u2019t a macro problem. **They\u2019re a gut-brain communication problem.** And when that conversation gets staticky, weight loss stalls regardless of how perfect your carbs are.' },
        '**17 organic superfoods** \u2014 chlorella, kale, spinach, broccoli, beet, acai, blueberry, pomegranate, acerola cherry, and nine more \u2014 delivering **the plant-based nutrient diversity most keto diets are catastrophically missing.** Plus **CP2305** for the gut-brain conversation underneath it all.',
        '***You\u2019re not choking down kale. You\u2019re sipping dessert.***',
      ],
    },
    {
      n: 5,
      headline: 'Real Fiber. The Unsexy Keto Truth No One Wants To Say Out Loud.',
      body: [
        'Let\u2019s talk about **the thing nobody will talk about on a keto podcast.**',
        { lede: 'I haven\u2019t pooped in six days.' },
        'It\u2019s **the single most-reported side effect on every keto forum on the internet.** And the \u201csolution\u201d most keto influencers offer is psyllium husk, magnesium citrate, or **a three-day cleanse week that feels like the stomach flu on purpose.**',
        'Each scoop of Cheerific delivers **approximately 4g of real fiber from actual food sources** \u2014 gently woven into the cocoa, greens, and fruit blends. **Not a harsh cleanse. Not a laxative. Not a regret cycle.**',
        'As one customer put it: *\u201cSo delicious and it def makes you go!!\u201d*',
      ],
    },
    {
      n: 6,
      headline: 'Somewhere In The Last Two Years, Your Life Got Smaller. That Wasn\u2019t The Deal.',
      body: [
        'Keto was supposed to give you your body back. **Nobody mentioned it might quietly take your life with it.**',
        'You turn down the dinner invitation because **you can\u2019t deal with the menu.** You skip your kid\u2019s pizza night because **one slice feels like a cliff.** You sit at the work party with **a plain chicken breast on a napkin** while everyone else has cake. Date night is now **a 40-minute audit of every appetizer.**',
        'Somewhere along the way, **\u201cdoing keto\u201d became your whole personality.**',
        'Cheerific **isn\u2019t asking you to be more disciplined.** It\u2019s **a 60-second mug of creamy dark chocolate that tastes like dessert** \u2014 because it basically is \u2014 and quietly does the work underneath **while you get on with your actual life.**',
        '***One ritual. Sixty seconds. And the rest of the day, you get to be a person again.***',
      ],
    },
    {
      n: 7,
      headline: 'You Feel It Build. Day 1, Week 2, Week 8. The Way Real Things Do.',
      body: [
        '**Almost nothing in the keto world is built for you.** Not the bars. Not the chips. Not the electrolyte packets that taste like ocean water. Not the MCT oil that **sends you running to the bathroom at 7am.**',
        '**Day 1:** That\u2019s **Chocamine\u00ae** doing its work. The 10pm craving hits \u2014 and this time, instead of a pantry raid, **there\u2019s a mug of creamy dark chocolate. Calm. Satisfied.**',
        '**Week 2:** The **CP2305** postbiotic starts doing its quiet work. **Mood, a little more even. Sleep, a little more restful.** The 2am wake-ups soften. *',
        '**Week 8:** The sentence we hear over and over: ***\u201cI feel like myself again.\u201d*** Not reinvented. **Just recovered. The Monday restart cycle, finally over.**',
      ],
    },
  ];
  return (
    <section style={reasonsDStyles.section}>
      <svg
        style={reasonsDStyles.chevronDivider}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,0 720,80 1440,0 1440,0 0,0" fill="var(--paper)" />
      </svg>
      <div style={reasonsDStyles.inner}>
        {reasons.map((r) => (
          <ReasonRow
            key={r.n}
            index={r.n}
            total={7}
            eyebrow={`Reason 0${r.n}`}
            headline={r.headline}
            body={r.body}
            imageLabel={`REASON 0${r.n} · IMAGE`}
            imageSrc={(r.n === 3 || r.n === 4 || r.n === 6) ? `reasons/r${r.n}.webp` : `reasons/r${r.n}.png`}
          />
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { ReasonsD });
