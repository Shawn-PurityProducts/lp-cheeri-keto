// HeroDesktop.jsx — Desktop hero w/ 3 variants: split / editorial / overlay
// Plus the long-form Intro block beneath the hero (full editorial column).

const heroDStyles = {
  // Promo bar
  promoBar: {
    background: 'var(--ink)',
    color: 'var(--paper)',
    fontSize: 13,
    lineHeight: 1.3,
    textAlign: 'center',
    padding: '10px 24px',
    fontFamily: 'var(--font-sans)',
    letterSpacing: '0.02em',
  },
  // Nav (logo only)
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 24px',
    background: 'var(--paper)',
    borderBottom: '1px solid var(--rule)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backdropFilter: 'blur(8px)',
  },
  navLogo: {
    height: 36,
    width: 'auto',
    display: 'block',
  },

  // SECTION shells
  section: {
    background: 'var(--paper)',
  },
  inner: {
    maxWidth: 1320,
    margin: '0 auto',
    padding: '48px 48px 24px',
  },

  // ── Variant A: Editorial Split ──────────────────────────────────────────
  splitGrid: {
    display: 'grid',
    gridTemplateColumns: '1.05fr 0.95fr',
    gap: 64,
    alignItems: 'center',
    minHeight: '78vh',
  },
  splitLeft: { maxWidth: 620 },
  splitEyebrow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--ink-mid)',
    margin: '0 0 24px',
  },
  splitH1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(44px, 4.4vw, 64px)',
    lineHeight: 1.02,
    letterSpacing: '-0.015em',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 22px',
    textWrap: 'balance',
  },
  splitH1Accent: { color: 'var(--ink-mid)' },
  splitSub: {
    fontFamily: 'var(--font-serif, Georgia, serif)',
    fontStyle: 'italic',
    fontSize: 'clamp(26px, 2.4vw, 36px)',
    lineHeight: 1.3,
    color: 'var(--ink-mid)',
    margin: '0 auto 36px',
    maxWidth: 880,
    padding: '20px 0 22px',
    borderTop: '2px solid var(--ink)',
    borderBottom: '2px solid var(--ink)',
    textWrap: 'balance',
    fontWeight: 600,
    textAlign: 'center',
    letterSpacing: '-0.005em',
  },
  splitImg: {
    width: '100%',
    aspectRatio: '4 / 5',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 14px, var(--ph-2) 14px 28px)',
    border: '1px solid var(--rule)',
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 24px 60px rgba(48,8,4,0.10)',
  },
  splitImgInner: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  splitImgLabel: {
    position: 'absolute',
    top: 16,
    left: 16,
    background: 'var(--paper)',
    border: '1px solid var(--rule)',
    padding: '5px 10px',
    borderRadius: 4,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    color: 'var(--ink-soft)',
  },

  // ── Variant B: Editorial Centered ───────────────────────────────────────
  editorialWrap: {
    maxWidth: 980,
    margin: '0 auto',
    textAlign: 'center',
    padding: '24px 0 8px',
  },
  editorialIssue: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.24em',
    textTransform: 'uppercase',
    color: 'var(--ink-soft)',
    margin: '0 0 20px',
  },
  editorialH1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(48px, 5.2vw, 76px)',
    lineHeight: 0.98,
    letterSpacing: '-0.02em',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 24px',
    textWrap: 'balance',
  },
  editorialRule: {
    width: 64,
    height: 2,
    background: 'var(--ink-mid)',
    margin: '0 auto 24px',
  },
  editorialSub: {
    fontFamily: 'var(--font-sans)',
    fontSize: 19,
    lineHeight: 1.55,
    color: 'var(--ink-soft)',
    margin: '0 auto 36px',
    maxWidth: 640,
    textWrap: 'pretty',
    fontWeight: 500,
  },
  editorialImg: {
    width: '100%',
    aspectRatio: '16 / 9',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 14px, var(--ph-2) 14px 28px)',
    border: '1px solid var(--rule)',
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 24px 60px rgba(48,8,4,0.08)',
    margin: '0 0 40px',
  },

  // ── Variant C: Magazine Cover (full-bleed image, headline overlay) ──────
  coverWrap: {
    width: '100%',
    minHeight: 'min(86vh, 820px)',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 14px, var(--ph-2) 14px 28px)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end',
  },
  coverScrim: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, rgba(20,8,4,0.10) 0%, rgba(20,8,4,0.0) 30%, rgba(20,8,4,0.55) 100%)',
  },
  coverIssueChip: {
    position: 'absolute',
    top: 28,
    left: 48,
    background: 'var(--paper)',
    color: 'var(--ink)',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    padding: '7px 12px',
    borderRadius: 4,
    border: '1px solid var(--rule)',
  },
  coverImgLabel: {
    position: 'absolute',
    top: 28,
    right: 48,
    background: 'var(--paper)',
    color: 'var(--ink-soft)',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 10,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: '6px 10px',
    borderRadius: 4,
    border: '1px solid var(--rule)',
  },
  coverInner: {
    position: 'relative',
    maxWidth: 1320,
    margin: '0 auto',
    padding: '48px',
    width: '100%',
    color: 'var(--paper)',
  },
  coverH1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(48px, 5.4vw, 80px)',
    lineHeight: 0.98,
    letterSpacing: '-0.02em',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'var(--paper)',
    margin: '0 0 18px',
    maxWidth: 1100,
    textWrap: 'balance',
  },
  coverH1Accent: { color: 'var(--green)' },
  coverSub: {
    fontFamily: 'var(--font-sans)',
    fontSize: 19,
    lineHeight: 1.5,
    color: 'rgba(248,243,231,0.86)',
    margin: '0 0 28px',
    maxWidth: 720,
    textWrap: 'pretty',
    fontWeight: 500,
  },

  // Social proof + CTA — shared
  socialRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    fontSize: 13,
    fontFamily: 'var(--font-sans)',
    color: 'var(--ink-soft)',
    margin: '0 0 24px',
    fontWeight: 500,
  },
  socialDot: {
    width: 3,
    height: 3,
    borderRadius: '50%',
    background: 'var(--ink-soft)',
  },
  socialNum: { fontWeight: 800, color: 'var(--ink)' },

  ctaWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    flexWrap: 'wrap',
  },
  cta: {
    appearance: 'none',
    border: 0,
    borderRadius: 999,
    padding: '18px 32px',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 14,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '0 1px 0 rgba(0,0,0,0.06), 0 14px 30px rgba(48, 8, 4, 0.20)',
    transition: 'transform .15s ease, box-shadow .15s ease',
  },
  ctaArrow: { marginLeft: 10 },
  ctaSecondary: {
    appearance: 'none',
    border: '1.5px solid var(--ink)',
    borderRadius: 999,
    padding: '16px 28px',
    background: 'transparent',
    color: 'var(--ink)',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  trustRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gap: 22,
    fontFamily: 'var(--font-sans)',
    fontSize: 12.5,
    lineHeight: 1.35,
    margin: '24px 0 0',
    justifyContent: 'start',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: 'var(--ink-soft)',
    fontWeight: 500,
  },
  trustCheck: {
    width: 16,
    height: 16,
    flex: '0 0 16px',
    borderRadius: '50%',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
    fontWeight: 700,
  },
};

function PromoBarD() {
  return (
    <div style={heroDStyles.promoBar}>
      <span style={{ fontWeight: 700 }}>Limited Time Sale:</span>
      <span style={{ opacity: 0.85, marginLeft: 6 }}>
        Get 50% off + free shipping on your first order
      </span>
    </div>
  );
}

function NavD() {
  return (
    <nav style={heroDStyles.nav}>
      <img src="cheerific-logo.avif" alt="Cheerific" style={heroDStyles.navLogo} />
    </nav>
  );
}

function SocialProofD({ light }) {
  const c = light ? 'rgba(248,243,231,0.85)' : 'var(--ink-soft)';
  const num = light ? 'var(--paper)' : 'var(--ink)';
  return (
    <div style={{ ...heroDStyles.socialRow, color: c }}>
      <span><span style={{ ...heroDStyles.socialNum, color: num }}>126</span> reviews</span>
      <span style={{ ...heroDStyles.socialDot, background: c }}></span>
      <span><span style={{ ...heroDStyles.socialNum, color: num }}>4.8★</span> rating</span>
      <span style={{ ...heroDStyles.socialDot, background: c }}></span>
      <span><span style={{ ...heroDStyles.socialNum, color: num }}>10,000+</span> members</span>
    </div>
  );
}

function CTAButtonD({ label = 'Shop Cheerific — 50% Off' }) {
  return (
    <button
      style={heroDStyles.cta}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {window.tmify(label)}<span style={heroDStyles.ctaArrow}>→</span>
    </button>
  );
}

function TrustRowD() {
  return (
    <div style={heroDStyles.trustRow}>
      <div style={heroDStyles.trustItem}>
        <span style={heroDStyles.trustCheck}>✓</span>
        Zero caffeine
      </div>
      <div style={heroDStyles.trustItem}>
        <span style={heroDStyles.trustCheck}>✓</span>
        Free shipping
      </div>
      <div style={heroDStyles.trustItem}>
        <span style={heroDStyles.trustCheck}>✓</span>
        30-day guarantee
      </div>
      <div style={heroDStyles.trustItem}>
        <span style={heroDStyles.trustCheck}>✓</span>
        Made in the USA
      </div>
    </div>
  );
}

// ── Variant: Editorial Split (text-only, full width) ─────────────────────
function HeroSplit() {
  return (
    <section style={heroDStyles.section} data-screen-label="01 Hero · split">
      <div style={{ ...heroDStyles.inner, padding: '72px 48px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
          <h1
            style={{
              ...heroDStyles.splitH1,
              fontSize: 'clamp(56px, 6vw, 88px)',
              lineHeight: 0.98,
              maxWidth: 1080,
              margin: '0 auto 28px',
              textAlign: 'center',
            }}
          >
            <span style={{ color: 'var(--ink-mid)' }}>"I've Been Starting Again On Monday For Six Mondays In A Row"</span> — 7 Reasons Keto Keeps Breaking Women Over 40
          </h1>
          <p style={heroDStyles.splitSub}>
            (And The 60-Second Chocolate Ritual That's Quietly Ending The Cycle)
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Variant: Editorial Centered ──────────────────────────────────────────
function HeroEditorialD() {
  return (
    <section style={heroDStyles.section} data-screen-label="01 Hero · editorial">
      <div style={{ ...heroDStyles.inner, padding: '56px 48px 32px' }}>
        <div style={heroDStyles.editorialWrap}>
          <p style={heroDStyles.editorialIssue}>— Issue No. 01 · For The Woman In Between —</p>
          <h1 style={heroDStyles.editorialH1}>
            "I've Been Starting Again On Monday For Six Mondays In A Row" — 7 Reasons Keto Keeps Breaking Women Over 40
          </h1>
          <p style={heroDStyles.editorialSub}>(And The 60-Second Chocolate Ritual That's Quietly Ending The Cycle)</p>
          <div style={heroDStyles.editorialRule}></div>
          <div style={heroDStyles.editorialImg}>
            <img
              src="product/p2.webp"
              alt="Cheerific lifestyle"
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', display: 'block',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SocialProofD />
          </div>
          <div style={{ ...heroDStyles.ctaWrap, justifyContent: 'center', marginTop: 8 }}>
            <CTAButtonD />
            <button type="button" style={heroDStyles.ctaSecondary}>Read The Story</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Variant: Magazine Cover ──────────────────────────────────────────────
function HeroCoverD() {
  return (
    <section data-screen-label="01 Hero · cover" style={heroDStyles.section}>
      <div style={heroDStyles.coverWrap}>
        <img
          src="product/p1-hero-new.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
          }}
        />
        <div style={heroDStyles.coverScrim}></div>
        <span style={heroDStyles.coverIssueChip}>Issue No. 01</span>
        <span style={heroDStyles.coverImgLabel}>HERO · FULL BLEED</span>
        <div style={heroDStyles.coverInner}>
          <h1 style={heroDStyles.coverH1}>
            "I've Been Starting Again On Monday For Six Mondays In A Row" — 7 Reasons Keto Keeps Breaking Women Over 40
          </h1>
          <p style={heroDStyles.coverSub}>(And The 60-Second Chocolate Ritual That's Quietly Ending The Cycle)</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <button
              style={{
                ...heroDStyles.cta,
                background: 'var(--paper)',
                color: 'var(--ink)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Shop Cheerific<sup className="tm">{'™'}</sup> — 50% Off<span style={heroDStyles.ctaArrow}>→</span>
            </button>
            <SocialProofD light />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroD({ variant = 'split' }) {
  if (variant === 'editorial') return <HeroEditorialD />;
  if (variant === 'cover') return <HeroCoverD />;
  return <HeroSplit />;
}

// ── Long-form Intro block ────────────────────────────────────────────────
const introDStyles = {
  section: { background: 'var(--paper)', padding: '8px 0 0' },
  inner: {
    maxWidth: 1080,
    margin: '0 auto',
    padding: '0 48px',
    fontFamily: 'var(--font-sans)',
    color: 'var(--ink)',
  },
  p: {
    fontFamily: 'var(--font-sans)',
    fontSize: 20,
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: '0 0 1em',
    textWrap: 'pretty',
    fontWeight: 500,
  },
  beats: { margin: '14px 0 28px' },
  beatsLine: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 26,
    lineHeight: 1.4,
    color: 'var(--ink)',
    margin: '0 0 4px',
  },
  welcome: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(36px, 4vw, 52px)',
    lineHeight: 1.05,
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    margin: '40px 0 28px',
  },
  brandName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
  },
  handoff: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(32px, 3.6vw, 44px)',
    lineHeight: 1.15,
    letterSpacing: '-0.005em',
    color: 'var(--accent)',
    margin: '24px 0 0',
    textAlign: 'center',
    textWrap: 'balance',
  },
};

function IntroD() {
  return (
    <section style={introDStyles.section} data-screen-label="01b Intro">
      <div style={introDStyles.inner}>
        <p style={introDStyles.p}>
          It's 9:47pm on Day 47.
        </p>
        <p style={introDStyles.p}>
          You're standing in the pantry with the door half-open, phone in one hand, a bag of "keto-friendly" chocolate chips in the other. <strong>You're doing the math.</strong> If you eat four of these, does it count. If you eat eight and skip breakfast tomorrow, does it count. If you just smell them and put the bag back, does that count.
        </p>
        <p style={introDStyles.p}>
          Your husband is asleep. The kitchen is quiet. And somewhere between the third and fourth chip, you hear yourself think the sentence you've thought <strong>six Mondays in a row now:</strong>
        </p>
        <p style={{ ...introDStyles.p, fontStyle: 'italic', textAlign: 'center' }}>
          I'll just start again Monday.
        </p>

        <div style={introDStyles.beats}>
          <p style={introDStyles.beatsLine}>You're not weak.</p>
          <p style={introDStyles.beatsLine}>You're not undisciplined.</p>
          <p style={{ ...introDStyles.beatsLine, margin: 0 }}>You're not "bad at keto."</p>
        </div>

        <p style={introDStyles.p}>
          You're a woman over 40 trying to do a diet that was mostly built for <strong>32-year-old men</strong> with a different gut, a different hormone profile, a different sleep pattern, and <strong>a different relationship with chocolate</strong> than you have.
        </p>
        <p style={introDStyles.p}>
          Keto isn't breaking because you are. Keto is breaking because the version of it being sold to you — the bars, the "keto-friendly" chocolate, the exogenous ketones, the MCT oil, the $45 electrolyte packets — was <strong>never designed around the one thing that actually derails women in this stretch of life.</strong>
        </p>

        <h2 style={{ ...introDStyles.welcome, whiteSpace: 'normal', textWrap: 'balance' }}>The 10pm Chocolate Moment.</h2>

        <p style={introDStyles.p}>
          Which is why thousands of women are quietly retiring the "keto-friendly" chocolate chips, the fat bombs, and the Monday restart — and replacing all of it with <strong>one creamy 60-second mug of dark chocolate</strong> called <span style={introDStyles.brandName}>Cheerific<sup className="tm">{'™'}</sup></span>.
        </p>
        <p style={introDStyles.p}>
          It's built around a patented, clinically studied cocoa extract called <em>Chocamine®</em>, a gut-brain postbiotic called <em>CP2305</em>, and <strong>17 organic superfoods.</strong> Zero sugar alcohols. Zero erythritol. Less than 1g of sugar. Caffeine free. No cooling aftertaste. <strong>No 45-minute sprint to the bathroom.</strong>
        </p>

        <p style={introDStyles.handoff}>
          Here Are 7 Reasons It{'\u2019'}s Quietly Become The Favorite 60 Seconds Of Their Day.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { PromoBarD, NavD, HeroD, IntroD });
