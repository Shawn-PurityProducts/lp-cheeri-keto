// FinalCta.jsx — dark chocolate band: closing CTA before the footer.
// Big mark · headline · button · trust line.

const finalCtaStyles = {
  section: {
    background: 'var(--ink)',
    color: 'var(--paper)',
    padding: '52px 0 56px',
    textAlign: 'center',
    fontFamily: 'var(--font-sans)',
  },
  inner: {
    padding: '0 22px',
    maxWidth: 640,
    margin: '0 auto',
  },
  eyebrow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'rgba(248,243,231,0.72)',
    margin: '0 0 14px',
  },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(28px, 7vw, 36px)',
    lineHeight: 1.08,
    letterSpacing: '-0.005em',
    textTransform: 'uppercase',
    color: 'var(--paper)',
    margin: '0 0 12px',
    textWrap: 'balance',
  },
  sub: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 1.55,
    color: 'rgba(248,243,231,0.82)',
    margin: '0 0 26px',
    textWrap: 'pretty',
  },
  cta: {
    appearance: 'none',
    border: 0,
    borderRadius: 999,
    padding: '18px 32px',
    background: 'var(--paper)',
    color: 'var(--ink)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 15,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '6px 6px 0 var(--brand-green)',
    minWidth: 240,
  },
  trustLine: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: '0.04em',
    color: 'rgba(248,243,231,0.7)',
    margin: '18px 0 0',
  },
};

function FinalCta() {
  return (
    <section style={finalCtaStyles.section} data-screen-label="08 Final CTA">
      <div style={finalCtaStyles.inner} className="finalcta-inner">
        <p style={finalCtaStyles.eyebrow}>Risk-free for 30 days</p>
        <h2 style={finalCtaStyles.h}>Feel Like Yourself Again {'\u2014'} Or Your Money Back.</h2>
        <p style={finalCtaStyles.sub}>
          One scoop a day. Real chocolate. 17 organic superfoods, two clinically studied actives, and a guarantee you can actually use.
        </p>
        <button type="button" style={finalCtaStyles.cta} onClick={() => {
          const target = document.querySelector('.mobile-only [data-screen-label="04 Buy"]');
          if (target) {
            const rect = target.getBoundingClientRect();
            const y = rect.top + window.scrollY - 12;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}>
          Get Cheerific<sup className="tm">{'\u2122'}</sup> {'\u2014'} 50% Off
        </button>
        <p style={finalCtaStyles.trustLine}>
          30-day money-back guarantee {'\u00b7'} Free shipping on subscriptions {'\u00b7'} Cancel anytime
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { FinalCta });
