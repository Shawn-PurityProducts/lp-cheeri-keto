// Hero.jsx — promo bar, nav, hero with CTA + social proof
// Three layout variations exposed via tweaks: stacked / split / overlay

const heroStyles = {
  // Promo bar
  promoBar: {
    background: 'var(--ink)',
    color: 'var(--paper)',
    fontSize: 12,
    lineHeight: 1.3,
    textAlign: 'center',
    padding: '8px 16px',
    fontFamily: 'var(--font-sans)',
    letterSpacing: '0.01em',
  },
  promoStrong: { fontWeight: 600 },
  promoLink: {
    color: 'var(--paper)',
    textDecoration: 'underline',
    textUnderlineOffset: 2,
    marginLeft: 6,
  },
  // Nav
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 18px',
    background: 'var(--paper)',
    borderBottom: '1px solid var(--rule)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  navLeft: { display: 'flex', alignItems: 'center', gap: 14 },
  burger: {
    width: 22,
    height: 22,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '5px 0',
    background: 'none',
    border: 0,
    cursor: 'pointer',
  },
  burgerLine: { height: 1.5, background: 'var(--ink)', borderRadius: 1 },
  logoBox: {
    height: 28,
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    height: '100%',
    width: 'auto',
    display: 'block',
  },
  navRight: { display: 'flex', alignItems: 'center', gap: 16 },
  navIcon: {
    width: 22,
    height: 22,
    border: '1px solid var(--ink)',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    color: 'var(--ink)',
  },
  // Sticky CTA strip under nav
  saleStrip: {
    background: 'var(--accent-soft)',
    color: 'var(--ink)',
    padding: '10px 16px',
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 1.35,
    fontFamily: 'var(--font-sans)',
    borderBottom: '1px solid var(--rule)',
  },
  saleLabel: {
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    fontWeight: 600,
    opacity: 0.7,
    display: 'block',
    marginBottom: 2,
  },
  saleCopy: { fontWeight: 500 },
  // Hero shell
  hero: {
    background: 'var(--paper)',
    paddingBottom: 32,
  },
  heroInner: {
    padding: '12px 18px 0',
    maxWidth: 720,
    margin: '0 auto',
  },
  // Hero brand mark / wordmark
  brandMark: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '6px 0 16px',
  },
  brandMarkImg: {
    height: 56,
    width: 'auto',
    display: 'block',
  },
  // (legacy text wordmark, unused)
  brandMarkText: {
    fontFamily: 'var(--font-display)',
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: '0.04em',
    color: 'var(--ink)',
    textAlign: 'center',
    margin: '4px 0 14px',
    textTransform: 'uppercase',
  },
  // Headline
  h1: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(22px, 6vw, 32px)',
    lineHeight: 1.12,
    letterSpacing: '-0.01em',
    fontWeight: 700,
    color: 'var(--ink)',
    margin: '0 0 12px',
    textWrap: 'balance',
  },
  h1Accent: {
    color: 'var(--ink-mid)',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
  heroDeck: {
    fontFamily: 'var(--font-serif, Georgia, serif)',
    fontStyle: 'italic',
    fontWeight: 600,
    fontSize: 'clamp(17px, 4.6vw, 21px)',
    lineHeight: 1.3,
    color: 'var(--ink-mid)',
    margin: '14px 0 20px',
    padding: '12px 0 14px',
    borderTop: '2px solid var(--ink)',
    borderBottom: '2px solid var(--ink)',
    textWrap: 'balance',
    textAlign: 'center',
    letterSpacing: '-0.005em',
  },
  socialProofRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
    fontSize: 12,
    fontFamily: 'var(--font-sans)',
    color: 'var(--ink-soft)',
    margin: '0 0 12px',
  },
  socialDot: {
    width: 3,
    height: 3,
    borderRadius: '50%',
    background: 'var(--ink-soft)',
  },
  socialNum: { fontWeight: 700, color: 'var(--ink)' },
  // Image placeholder
  imgPh: {
    width: '100%',
    aspectRatio: '8 / 5',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 12px, var(--ph-2) 12px 24px)',
    border: '1px solid var(--rule)',
    borderRadius: 14,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: 14,
    fontFamily: 'var(--font-sans)',
    fontSize: 11,
    color: 'var(--ink-soft)',
    margin: '0 0 18px',
    overflow: 'hidden',
    position: 'relative',
  },
  imgPhWide: { aspectRatio: '16 / 11' },
  imgPhPhoto: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  imgPhLabel: {
    background: 'var(--paper)',
    border: '1px solid var(--rule)',
    padding: '4px 8px',
    borderRadius: 4,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
  },
  // Sub copy
  sub: {
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    lineHeight: 1.5,
    color: 'var(--ink-soft)',
    margin: '0 0 22px',
    textWrap: 'pretty',
  },
  // CTA
  ctaWrap: { display: 'flex', flexDirection: 'column', gap: 10, margin: '0 0 18px' },
  cta: {
    appearance: 'none',
    border: 0,
    borderRadius: 999,
    padding: '17px 22px',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: '100%',
    boxShadow: '0 1px 0 rgba(0,0,0,0.06), 0 4px 14px rgba(48, 8, 4, 0.18)',
    transition: 'transform .15s ease, box-shadow .15s ease',
  },
  ctaArrow: { marginLeft: 8 },
  // Trust row under CTA
  trustRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 8,
    fontFamily: 'var(--font-sans)',
    fontSize: 11.5,
    lineHeight: 1.35,
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 7,
    color: 'var(--ink-soft)',
  },
  trustCheck: {
    width: 14,
    height: 14,
    flex: '0 0 14px',
    borderRadius: '50%',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 9,
    fontWeight: 700,
  },
};

function PromoBar() {
  return (
    <div style={heroStyles.promoBar}>
      <span style={heroStyles.promoStrong}>Limited Time Sale:</span>
      <span style={{ opacity: 0.85 }}> Get 50% off + free shipping on your first order</span>
    </div>
  );
}

function Nav() {
  return (
    <nav style={heroStyles.nav}>
      <div style={heroStyles.navLeft}>
        <button style={heroStyles.burger} aria-label="Menu">
          <span style={heroStyles.burgerLine}></span>
          <span style={heroStyles.burgerLine}></span>
          <span style={heroStyles.burgerLine}></span>
        </button>
      </div>
      <div style={heroStyles.logoBox}>
        <img src="cheerific-logo.avif" alt="Cheerific" style={heroStyles.logoImg} />
      </div>
      <div style={heroStyles.navRight}>
        <span style={heroStyles.navIcon}>♡</span>
        <span style={heroStyles.navIcon}>0</span>
      </div>
    </nav>
  );
}

function SaleStrip({ variant }) {
  if (variant === 'none') return null;
  if (variant === 'minimal') {
    return (
      <div style={{ ...heroStyles.saleStrip, padding: '8px 16px' }}>
        <span style={heroStyles.saleCopy}>
          <strong>Lorem ipsum 52%</strong> · dolor sit amet, free shipping
        </span>
      </div>
    );
  }
  return (
    <div style={heroStyles.saleStrip}>
      <span style={heroStyles.saleLabel}>Lorem Ipsum Sale</span>
      <span style={heroStyles.saleCopy}>
        Dolor sit amet 52% off + consectetur adipiscing elit on your first ipsum
      </span>
    </div>
  );
}

function ImagePlaceholder({ label, wide, src, alt }) {
  return (
    <div style={{ ...heroStyles.imgPh, ...(wide ? heroStyles.imgPhWide : {}) }}>
      {src ? (
        <img src={src} alt={alt || label} style={heroStyles.imgPhPhoto} />
      ) : (
        <span style={heroStyles.imgPhLabel}>{label}</span>
      )}
    </div>
  );
}

function SocialProof() {
  return (
    <div style={heroStyles.socialProofRow}>
      <span><span style={heroStyles.socialNum}>126</span> reviews</span>
      <span style={heroStyles.socialDot}></span>
      <span><span style={heroStyles.socialNum}>4.8★</span> rating</span>
      <span style={heroStyles.socialDot}></span>
      <span><span style={heroStyles.socialNum}>10k+</span> members</span>
    </div>
  );
}

function CTAButton({ label = 'Lorem ipsum dolor', onClick }) {
  return (
    <button
      style={heroStyles.cta}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {label}<span style={heroStyles.ctaArrow}>→</span>
    </button>
  );
}

function TrustRow() {
  return (
    <div style={heroStyles.trustRow}>
      <div style={heroStyles.trustItem}>
        <span style={heroStyles.trustCheck}>✓</span>
        30-day lorem ipsum
      </div>
      <div style={heroStyles.trustItem}>
        <span style={heroStyles.trustCheck}>✓</span>
        Free shipping dolor
      </div>
      <div style={heroStyles.trustItem}>
        <span style={heroStyles.trustCheck}>✓</span>
        Clinically tested sit
      </div>
      <div style={heroStyles.trustItem}>
        <span style={heroStyles.trustCheck}>✓</span>
        Made in amet consectetur
      </div>
    </div>
  );
}

// Hero variants
function HeroStacked() {
  // Mobile: stacked. Desktop (>=1024px): headline+social on the left, image on the right.
  return (
    <section style={heroStyles.hero} data-screen-label="01 Hero · stacked">
      <div style={heroStyles.heroInner} className="rail">
        <div style={heroStyles.brandMark}>
          <img src="cheerific-logo.avif" alt="Cheerific" style={heroStyles.brandMarkImg} />
        </div>
        <div className="hero-stacked-row">
          <div>
            <h1 style={heroStyles.h1}>
              <span style={{ color: 'var(--ink-mid)' }}>"I've Been Starting Again On Monday For Six Mondays In A Row"</span> — 7 Reasons Keto Keeps Breaking Women Over 40
            </h1>
            <p style={heroStyles.heroDeck}>(And The 60-Second Chocolate Ritual That's Quietly Ending The Cycle)</p>
          </div>
          <div className="hero-image-wrap">
            <ImagePlaceholder
              src="product/hero-m-new.webp"
              alt="Cheerific"
            />
          </div>
        </div>
        <div className="hero-intro-rail">
          <Intro />
        </div>
      </div>
    </section>
  );
}

function HeroEditorial() {
  // Headline first, image as feature card below
  return (
    <section style={heroStyles.hero} data-screen-label="01 Hero · editorial">
      <div style={heroStyles.heroInner}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--ink-soft)',
            textAlign: 'center',
            margin: '4px 0 10px',
          }}
        >
          — Issue No. 01 —
        </div>
        <h1 style={{ ...heroStyles.h1, textAlign: 'center', fontSize: 'clamp(26px, 7vw, 36px)' }}>
          "I've Been Starting Again On Monday For Six Mondays In A Row" — 7 Reasons Keto Keeps Breaking Women Over 40
        </h1>
        <p style={{ ...heroStyles.sub, textAlign: 'center', maxWidth: 560, margin: '0 auto 18px' }}>
          (And The 60-Second Chocolate Ritual That's Quietly Ending The Cycle)
        </p>
        <ImagePlaceholder label="HERO PRODUCT · LIFESTYLE" wide />
        <SocialProof />
        <div style={heroStyles.ctaWrap}>
          <CTAButton label="Lorem ipsum dolor sit" />
        </div>
        <TrustRow />
      </div>
    </section>
  );
}

function HeroOverlay() {
  // Full-bleed image with headline overlaid
  return (
    <section style={heroStyles.hero} data-screen-label="01 Hero · overlay">
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 5',
          background:
            'repeating-linear-gradient(135deg, var(--ph-1) 0 12px, var(--ph-2) 12px 24px)',
          overflow: 'hidden',
          marginBottom: 18,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.0) 38%, rgba(20,14,8,0.55) 100%)',
          }}
        />
        <div style={{
          position: 'absolute', top: 14, left: 14,
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 10, letterSpacing: '0.1em',
          textTransform: 'uppercase', background: 'var(--paper)',
          border: '1px solid var(--rule)', padding: '4px 8px', borderRadius: 4,
        }}>
          HERO PRODUCT · FULL BLEED
        </div>
        <div style={{
          position: 'absolute', left: 18, right: 18, bottom: 22, color: 'var(--paper)',
        }}>
          <h1 style={{
            ...heroStyles.h1, color: 'var(--paper)', margin: '0 0 8px',
            fontSize: 'clamp(22px, 5.8vw, 30px)',
          }}>
            "I've Been Starting Again On Monday For Six Mondays In A Row" — 7 Reasons Keto Keeps Breaking Women Over 40
          </h1>
          <p style={{ ...heroStyles.sub, color: 'rgba(255,255,255,0.86)', margin: 0 }}>
            (And The 60-Second Chocolate Ritual That's Quietly Ending The Cycle)
          </p>
        </div>
      </div>
      <div style={heroStyles.heroInner}>
        <SocialProof />
        <div style={heroStyles.ctaWrap}>
          <CTAButton label="Lorem ipsum 52% off" />
        </div>
        <TrustRow />
      </div>
    </section>
  );
}

function Hero({ variant = 'stacked' }) {
  if (variant === 'editorial') return <HeroEditorial />;
  if (variant === 'overlay') return <HeroOverlay />;
  return <HeroStacked />;
}

Object.assign(window, {
  PromoBar, Nav, SaleStrip, Hero,
});
