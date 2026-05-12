// Intro.jsx — long-form editorial intro, sits beneath the hero image.
// No CTA, no bullets — just typography. Last two paragraphs get visual emphasis
// to land the "Welcome to perimenopause" pivot and the Cheerific reveal.

const introStyles = {
  wrap: {
    padding: '8px 2px 8px',
    fontFamily: 'var(--font-sans)',
    color: 'var(--ink)',
    maxWidth: 560,
    margin: '0 auto',
  },
  p: {
    fontFamily: 'var(--font-sans)',
    fontSize: 16,
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: '0 0 1em',
    textWrap: 'pretty',
    fontWeight: 500,
  },
  pSoft: {
    color: 'var(--ink-soft)',
  },
  // The "You're not lazy..." beat — just three statements, each on its own line.
  beats: {
    margin: '4px 0 18px',
  },
  beatsLine: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 17,
    lineHeight: 1.45,
    color: 'var(--ink)',
    margin: '0 0 2px',
  },
  beatsLineLast: {
    margin: 0,
  },
  // "Welcome to perimenopause" — single-line emphasis.
  welcome: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(18px, 4.6vw, 24px)',
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    margin: '24px 0 18px',
    whiteSpace: 'nowrap',
    textWrap: 'nowrap',
  },
  // The Cheerific paragraph — inline, just typographic emphasis on the brand.
  reveal: {
    margin: '0 0 18px',
  },
  revealBody: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: 0,
    textWrap: 'pretty',
  },
  brandName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
  },
  // Closing line that hands off to the 7 reasons — same treatment as the
  // "Welcome to perimenopause" beat, but not uppercase.
  handoff: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(22px, 5.6vw, 28px)',
    lineHeight: 1.15,
    letterSpacing: '-0.005em',
    color: 'var(--accent)',
    margin: '24px 0 20px',
    textAlign: 'center',
    textWrap: 'balance',
  },
};

function Intro() {
  return (
    <div style={introStyles.wrap}>
      <p style={introStyles.p}>
        It's 9:47pm on Day 47.
      </p>
      <p style={introStyles.p}>
        You're standing in the pantry with the door half-open, phone in one hand, a bag of
        "keto-friendly" chocolate chips in the other. <strong>You're doing the math.</strong> If you eat
        four of these, does it count. If you eat eight and skip breakfast tomorrow, does
        it count. If you just smell them and put the bag back, does that count.
      </p>
      <p style={introStyles.p}>
        Your husband is asleep. The kitchen is quiet. And somewhere between the third and
        fourth chip, you hear yourself think the sentence you've thought <strong>six Mondays in a
        row now:</strong>
      </p>
      <p style={{ ...introStyles.p, fontStyle: 'italic', textAlign: 'center' }}>
        I'll just start again Monday.
      </p>

      <div style={introStyles.beats}>
        <p style={introStyles.beatsLine}>You're not weak.</p>
        <p style={introStyles.beatsLine}>You're not undisciplined.</p>
        <p style={{ ...introStyles.beatsLine, ...introStyles.beatsLineLast }}>
          You're not "bad at keto."
        </p>
      </div>

      <p style={introStyles.p}>
        You're a woman over 40 trying to do a diet that was mostly built for <strong>32-year-old
        men</strong> with a different gut, a different hormone profile, a different sleep pattern,
        and <strong>a different relationship with chocolate</strong> than you have.
      </p>
      <p style={introStyles.p}>
        Keto isn't breaking because you are. Keto is breaking because the version of it
        being sold to you — the bars, the "keto-friendly" chocolate, the exogenous
        ketones, the MCT oil, the $45 electrolyte packets — was <strong>never designed around the
        one thing that actually derails women in this stretch of life.</strong>
      </p>

      <h2 style={{ ...introStyles.welcome, whiteSpace: 'normal', textWrap: 'balance' }}>
        The 10pm Chocolate Moment.
      </h2>

      <p style={introStyles.p}>
        Which is why thousands of women are quietly retiring the "keto-friendly" chocolate
        chips, the fat bombs, and the Monday restart — and replacing all of it with{' '}
        <strong>one creamy 60-second mug of dark chocolate</strong> called{' '}
        <strong><span style={introStyles.brandName}>Cheerific<sup className="tm">{'™'}</sup></span></strong>.
      </p>

      <div style={introStyles.reveal}>
        <p style={introStyles.p}>
          It's built around a patented, clinically studied cocoa extract called{' '}
          <em>Chocamine®</em>, a gut-brain postbiotic called <em>CP2305</em>, and{' '}
          <strong>17 organic superfoods.</strong> Zero sugar alcohols. Zero erythritol. Less than 1g
          of sugar. Caffeine free. No cooling aftertaste. <strong>No 45-minute sprint to the
          bathroom.</strong>
        </p>
      </div>

      <p style={introStyles.handoff}>
        Here Are 7 Reasons It's Quietly Become The Favorite 60 Seconds Of Their Day.
      </p>
    </div>
  );
}

Object.assign(window, { Intro });
