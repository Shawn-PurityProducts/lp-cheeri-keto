// CloseOffer.jsx — Closing handoff section that leads into the buy block.
// Section header → narrative lead-in → offer card with checklist → guarantee + price line.

const closeOfferStyles = {
  section: {
    background: 'url(bg-cocoa.webp) center/cover no-repeat var(--paper-4)',
    padding: '32px 14px 40px',
  },
  inner: {
    padding: 0,
    maxWidth: 720,
    margin: '0 auto',
  },
  card: {
    background: 'var(--paper-3)',
    border: '1.5px solid var(--ink)',
    borderRadius: 18,
    boxShadow: '6px 6px 0 var(--ink)',
    overflow: 'hidden',
  },
  headerBand: {
    background: 'var(--brand-green)',
    borderBottom: '1.5px solid var(--ink)',
    padding: '20px 18px',
    textAlign: 'center',
  },
  headerH: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(22px, 5.6vw, 30px)',
    lineHeight: 1.1,
    letterSpacing: '-0.005em',
    textTransform: 'uppercase',
    color: 'var(--paper)',
    margin: 0,
    textWrap: 'balance',
  },
  body: {
    padding: '20px 18px 22px',
  },
  lede: {
    fontWeight: 700,
    color: 'var(--accent)',
  },
  imgPh: {
    width: '100%',
    aspectRatio: '5 / 4',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 12px, var(--ph-2) 12px 24px)',
    border: '1px solid var(--rule)',
    borderRadius: 14,
    display: 'flex',
    alignItems: 'flex-end',
    padding: 14,
    margin: '0 0 18px',
    overflow: 'hidden',
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
    color: 'var(--ink-soft)',
  },
  eyebrow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--ink-mid)',
    margin: '0 0 8px',
  },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(24px, 6.2vw, 32px)',
    lineHeight: 1.12,
    letterSpacing: '-0.005em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 18px',
    textWrap: 'balance',
  },
  p: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: '0 0 14px',
    textWrap: 'pretty',
  },
  ctaWrap: {
    margin: '28px 0 4px',
  },
  cta: {
    width: '100%',
    appearance: 'none',
    border: 0,
    borderRadius: 999,
    padding: '16px 20px',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 15,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 14px 30px rgba(48,8,4,0.18)',
    textAlign: 'center',
    display: 'block',
  },
  ctaSub: {
    display: 'block',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 11,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(248,243,231,0.75)',
    marginTop: 4,
  },
  offerCard: {
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    borderRadius: 18,
    padding: '22px 20px 24px',
    margin: '24px 0 18px',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 18px 40px rgba(48,8,4,0.16)',
  },
  offerKicker: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(248,243,231,0.7)',
    margin: '0 0 10px',
  },
  offerTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 1.2,
    color: 'var(--accent-on)',
    margin: '0 0 16px',
    textTransform: 'uppercase',
    letterSpacing: '-0.005em',
  },
  bulletList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  bullet: {
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 1.45,
    color: 'var(--accent-on)',
    minWidth: 0,
  },
  check: {
    flex: '0 0 auto',
    width: 18,
    height: 18,
    borderRadius: 9,
    background: 'var(--green)',
    color: 'var(--ink)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    fontWeight: 800,
    fontFamily: 'var(--font-sans)',
    marginTop: 2,
  },
  bulletStrong: {
    fontWeight: 700,
  },
  priceLine: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: '0.04em',
    color: 'rgba(248,243,231,0.85)',
    borderTop: '1px solid rgba(248,243,231,0.18)',
    paddingTop: 14,
    margin: 0,
    textWrap: 'pretty',
  },
  guarantee: {
    background: 'var(--brand-green)',
    border: 0,
    borderRadius: 0,
    padding: 22,
    margin: '0 0 18px',
    boxShadow: 'none',
  },
  guaranteeRow: {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    marginBottom: 14,
  },
  seal: {
    flex: '0 0 auto',
    width: 60,
    height: 60,
    borderRadius: '50%',
    background: 'var(--paper)',
    color: 'var(--ink)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 13,
    letterSpacing: '0.04em',
    textAlign: 'center',
    lineHeight: 1.05,
    border: '2px solid var(--ink)',
  },
  guaranteeTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: 0,
    textTransform: 'uppercase',
    color: 'var(--paper)',
    margin: 0,
    textWrap: 'balance',
    lineHeight: 1.15,
    flex: 1,
    minWidth: 0,
  },
  guaranteeRule: {
    height: 2,
    background: 'var(--paper)',
    border: 0,
    borderRadius: 1,
    margin: '0 0 14px',
    opacity: 0.55,
  },
  guaranteeBody: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 1.5,
    color: 'var(--paper)',
    margin: 0,
    opacity: 0.94,
    textAlign: 'center',
    textWrap: 'pretty',
  },
};

function CloseOfferImage({ label }) {
  return (
    <div style={closeOfferStyles.imgPh}>
      <span style={closeOfferStyles.imgPhLabel}>{label}</span>
    </div>
  );
}

function CloseOffer() {
  return (
    <section
      style={closeOfferStyles.section}
      data-screen-label="03 Close + Offer"
    >
      <div style={closeOfferStyles.inner} className="rail rail-narrow">
       <div style={closeOfferStyles.card}>
        <div style={closeOfferStyles.headerBand}>
          <h2 style={closeOfferStyles.headerH}>
            Get Your First Jar Of Cheerific<sup className="tm">{'™'}</sup> For 50% Off (Plus A Free Gift)
          </h2>
        </div>
        <div style={closeOfferStyles.body}>
        <p style={closeOfferStyles.p}>
          You’ve tried harder things. You’ve tried more complicated things. You’ve tried <strong>the things that promised ketosis in an hour and delivered a stomach ache in forty-five minutes.</strong>
        </p>
        <p style={closeOfferStyles.p}>
          <strong>This is the opposite of all of that.</strong>
        </p>
        <p style={closeOfferStyles.p}>
          <strong>Sixty seconds.</strong> A creamy mug of dark chocolate. And somewhere around week 8, the moment most women describe the same way{'\u2026'}
        </p>
        <p style={closeOfferStyles.p}>
          It’s 9:47pm. <strong>You walk past the pantry. You don’t open it.</strong> You don’t do the math on the chocolate chips. <strong>You don’t think about Monday.</strong>
        </p>
        <p style={closeOfferStyles.p}>
          <strong>You didn’t start over. You just came back.</strong>
        </p>
        <p style={closeOfferStyles.p}>
          That’s what Cheerific<sup className="tm">{'\u2122'}</sup> is built for. <strong>Not a fix. Not a hack.</strong> A daily 60-second ritual that quietly, steadily, <strong>ends the cycle that’s been breaking you for six Mondays in a row.</strong>
        </p>

        <div style={closeOfferStyles.ctaWrap}>
          <button
            type="button"
            style={closeOfferStyles.cta}
            onClick={() => {
              const target = document.querySelector('.mobile-only [data-screen-label="04 Buy"]');
              if (target) {
                const rect = target.getBoundingClientRect();
                const y = rect.top + window.scrollY - 12;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            I Want To Stop Starting Over Every Monday
            <span style={closeOfferStyles.ctaSub}>
              50% off your first jar · free gift included
            </span>
          </button>
        </div>
        </div>
       </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section
      style={{ ...closeOfferStyles.section, padding: 0, background: 'var(--brand-green)' }}
      data-screen-label="05 Guarantee"
    >
      <div style={closeOfferStyles.inner} className="rail rail-narrow">
        <div style={{ ...closeOfferStyles.guarantee, margin: 0 }}>
          <div style={closeOfferStyles.guaranteeRow}>
            <span style={closeOfferStyles.seal} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
                <path d="M12 2L4 5v6c0 5.4 3.4 9.5 8 11 4.6-1.5 8-5.6 8-11V5l-8-3z" fill="var(--ink)" />
                <path d="M8.5 12l2.5 2.5 5-5" stroke="var(--paper)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p style={closeOfferStyles.guaranteeTitle}>
              30 Day {'\u201C'}Feel Like Yourself Again{'\u201D'} Guarantee
            </p>
          </div>
          <hr style={closeOfferStyles.guaranteeRule} />
          <p style={closeOfferStyles.guaranteeBody}>
            Don{'\u2019'}t love it? We{'\u2019'}ll refund you. No argument. No forms. No {'\u201C'}we{'\u2019'}re so sorry to see you go{'\u201D'} hoops.
          </p>
        </div>
      </div>
    </section>
  );
}
