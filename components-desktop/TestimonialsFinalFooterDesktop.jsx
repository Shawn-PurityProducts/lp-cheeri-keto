// TestimonialsFinalFooterDesktop.jsx — three desktop sections.

// ──────────────────────────────────────────────────────────────────────
// Testimonials
const tDStyles = {
  section: {
    background: 'var(--paper-3)',
    padding: '72px 0 80px',
    borderTop: '1px solid var(--rule)',
  },
  inner: {
    maxWidth: 1320,
    margin: '0 auto',
    padding: '0 48px',
  },
  head: {
    textAlign: 'center',
    margin: '0 auto 48px',
    maxWidth: 720,
  },
  eyebrow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--ink-mid)',
    margin: '0 0 14px',
  },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(34px, 3.6vw, 50px)',
    lineHeight: 1.06,
    letterSpacing: '-0.015em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 16px',
    textWrap: 'balance',
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 14,
    color: 'var(--ink-soft)',
  },
  stars: { fontSize: 18, letterSpacing: 1, color: '#e8a83b' },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 20,
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  card: {
    background: 'var(--paper-3)',
    border: '1px solid var(--rule)',
    borderRadius: 16,
    padding: '22px 22px 18px',
    fontFamily: 'var(--font-sans)',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  cardStars: {
    color: '#e8a83b',
    fontSize: 15,
    letterSpacing: 1,
    margin: 0,
  },
  cardQuote: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 1.55,
    color: 'var(--ink)',
    margin: 0,
    flex: 1,
  },
  cardMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    flexWrap: 'wrap',
    fontSize: 12,
    fontFamily: 'var(--font-sans)',
    paddingTop: 10,
    borderTop: '1px solid var(--rule)',
  },
  cardMetaLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    flexWrap: 'nowrap',
    minWidth: 0,
    flex: 1,
  },
  cardName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
  },
  cardSep: { color: 'var(--rule)' },
  cardAge: { color: 'var(--ink-soft)', fontWeight: 500 },
  verifiedTag: {
    flex: '0 0 auto',
    width: 18,
    height: 18,
    borderRadius: 9,
    background: 'rgba(166, 197, 97, 0.22)',
    color: 'var(--green-deep)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    fontWeight: 800,
    fontFamily: 'var(--font-sans)',
    marginLeft: 'auto',
  },
  signoff: {
    margin: '40px 0 0',
    textAlign: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: '0.04em',
    color: 'var(--ink)',
  },
};

function TestimonialCardD({ quote, name, age, verified }) {
  return (
    <li style={tDStyles.card}>
      <span style={tDStyles.cardStars}>{'\u2605\u2605\u2605\u2605\u2605'}</span>
      <p style={tDStyles.cardQuote}>{window.tmify(quote)}</p>
      <div style={tDStyles.cardMeta}>
        <div style={tDStyles.cardMetaLeft}>
          <span style={tDStyles.cardName}>{name}</span>
          {age && (
            <>
              <span style={tDStyles.cardSep}>{'\u00b7'}</span>
              <span style={tDStyles.cardAge}>{age}</span>
            </>
          )}
        </div>
        {verified && <span style={tDStyles.verifiedTag} title="Verified buyer" aria-label="Verified buyer">{'\u2713'}</span>}
      </div>
    </li>
  );
}

function TestimonialsD() {
  const reviews = [
    {
      quote:
        '\u201cThis is amazingly delicious. Hard to believe it is so healthy, plus low in carbs and calories. Best thing of all, it really satisfies my chocolate obsession.\u201d',
      name: 'Patti N.',
      verified: true,
    },
    {
      quote:
        '\u201cThe product is so delicious. When I crave chocolate in the afternoon, I drink this and boom, my sugar cravings are gone. I can\u2019t believe it\u2019s less than a gram of sugar.\u201d',
      name: 'Lynn',
      verified: true,
    },
    {
      quote:
        '\u201cIt works!!! I\u2019m a single mom, 40+ and I am always tired, never sleeping enough and this actually gives me energy!\u201d',
      name: 'Valerie',
      verified: true,
    },
    {
      quote:
        '\u201cMy new favorite ritual. Feels like a treat, makes my tummy happy.\u201d',
      name: 'Sarah T.',
      verified: true,
    },
  ];
  return (
    <section style={tDStyles.section} data-screen-label="07 Testimonials">
      <div style={tDStyles.inner}>
        <div style={tDStyles.head}>
          <p style={tDStyles.eyebrow}>Real women. Real reviews.</p>
          <h2 style={tDStyles.h}>What Cheerific<sup className="tm">{'™'}</sup> Is Doing For Women Like You</h2>
          <div style={tDStyles.ratingRow}>
            <span style={tDStyles.stars}>{'\u2605\u2605\u2605\u2605\u2605'}</span>
            <span>4.9 average from 126+ reviews</span>
          </div>
        </div>
        <ul style={tDStyles.list}>
          {reviews.map((r, i) => <TestimonialCardD key={i} {...r} />)}
        </ul>
        <p style={tDStyles.signoff}>Join thousands of women feeling like themselves again.</p>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Final CTA — dark band
const fcDStyles = {
  section: {
    background: 'var(--ink)',
    color: 'var(--paper)',
    padding: '88px 0 96px',
    textAlign: 'center',
    fontFamily: 'var(--font-sans)',
  },
  inner: {
    padding: '0 48px',
    maxWidth: 880,
    margin: '0 auto',
  },
  eyebrow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.26em',
    textTransform: 'uppercase',
    color: 'rgba(248,243,231,0.72)',
    margin: '0 0 18px',
  },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(40px, 4.4vw, 64px)',
    lineHeight: 1.02,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
    color: 'var(--paper)',
    margin: '0 0 18px',
    textWrap: 'balance',
  },
  sub: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 1.55,
    color: 'rgba(248,243,231,0.82)',
    margin: '0 auto 36px',
    textWrap: 'pretty',
    maxWidth: 640,
  },
  cta: {
    appearance: 'none',
    border: 0,
    borderRadius: 999,
    padding: '20px 40px',
    background: 'var(--paper)',
    color: 'var(--ink)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 16,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '8px 8px 0 var(--brand-green)',
    minWidth: 360,
    whiteSpace: 'nowrap',
  },
  trustLine: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '0.04em',
    color: 'rgba(248,243,231,0.7)',
    margin: '24px 0 0',
  },
};

function FinalCtaD() {
  return (
    <section style={fcDStyles.section} data-screen-label="08 Final CTA">
      <div style={fcDStyles.inner}>
        <p style={fcDStyles.eyebrow}>Risk-free for 30 days</p>
        <h2 style={fcDStyles.h}>Feel Like Yourself Again — Or Your Money Back.</h2>
        <p style={fcDStyles.sub}>
          One scoop a day. Real chocolate. 17 organic superfoods, two clinically studied actives, and a guarantee you can actually use.
        </p>
        <button type="button" style={fcDStyles.cta} onClick={() => {
          const target = document.querySelector('.desktop-only [data-screen-label="04 Buy Intro"]') || document.querySelector('.desktop-only [data-screen-label="04 Buy"]');
          if (target) {
            const rect = target.getBoundingClientRect();
            const y = rect.top + window.scrollY - 24;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}>
          Get Cheerific<sup className="tm">{'™'}</sup> — 50% Off
        </button>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Footer
const ftDStyles = {
  footer: {
    background: 'var(--paper)',
    color: 'var(--ink)',
    padding: '56px 0 36px',
    fontFamily: 'var(--font-sans)',
    borderTop: '1px solid var(--rule)',
  },
  inner: {
    padding: '0 48px',
    maxWidth: 1320,
    margin: '0 auto',
  },
  topRow: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
    gap: 48,
    margin: '0 0 40px',
    paddingBottom: 36,
    borderBottom: '1px solid var(--rule)',
  },
  brandCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 320,
  },
  brandImg: {
    height: 40,
    width: 'auto',
    display: 'block',
  },
  brandTag: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 14,
    color: 'var(--ink-soft)',
    letterSpacing: '0.02em',
    lineHeight: 1.45,
  },
  socialRow: {
    display: 'flex',
    gap: 8,
    marginTop: 8,
    flexWrap: 'wrap',
  },
  socialChip: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    border: '1px solid var(--rule)',
    background: 'var(--paper-3)',
    borderRadius: 999,
    padding: '7px 14px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  colHead: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 4px',
  },
  link: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 13.5,
    color: 'var(--ink-soft)',
    textDecoration: 'none',
  },
  finePrint: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 1.55,
    color: 'var(--ink-soft)',
    margin: '0 0 18px',
    textWrap: 'pretty',
    maxWidth: 880,
  },
  bottomRow: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px 24px',
  },
  legalRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px 18px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 12,
    color: 'var(--ink-soft)',
  },
  legalLink: {
    color: 'var(--ink-soft)',
    textDecoration: 'underline',
    textUnderlineOffset: 2,
  },
  copyright: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 12,
    color: 'var(--ink-soft)',
    margin: 0,
  },
};

function FooterD() {
  return (
    <footer style={ftDStyles.footer} data-screen-label="09 Footer">
      <div style={ftDStyles.inner}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '8px 0 28px' }}>
          <img src="cheerific-logo.avif" alt="Cheerific" style={ftDStyles.brandImg} />
          <div style={{ ...ftDStyles.legalRow, justifyContent: 'center' }}>
            <a href="https://www.cheerific.com/policies/privacy-policy?utm_source=vercel&utm_medium=landing_page&utm_campaign=pm" target="_blank" rel="noopener noreferrer" style={ftDStyles.legalLink}>Privacy Policy</a>
            <a href="https://www.cheerific.com/policies/terms-of-service?utm_source=vercel&utm_medium=landing_page&utm_campaign=pm" target="_blank" rel="noopener noreferrer" style={ftDStyles.legalLink}>Terms of Service</a>
            <a href="https://www.cheerific.com/pages/contact?utm_source=vercel&utm_medium=landing_page&utm_campaign=pm" target="_blank" rel="noopener noreferrer" style={ftDStyles.legalLink}>Contact Us</a>
          </div>
        </div>

        <p style={ftDStyles.finePrint}>
          *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>

        <p style={{ ...ftDStyles.copyright, textAlign: 'center', marginTop: 16 }}>
          {'\u00a9'} {new Date().getFullYear()} Cheerific<sup className="tm">{'\u2122'}</sup>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

Object.assign(window, { TestimonialsD, FinalCtaD, FooterD });
