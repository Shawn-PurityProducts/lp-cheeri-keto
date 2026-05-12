// CloseOfferDesktop.jsx — closing handoff into buy block.

const closeDStyles = {
  section: {
    background: 'url(assets/bg-cocoa.webp) center/cover no-repeat var(--paper-4)',
    padding: '80px 32px 120px',
    borderTop: '1px solid var(--rule)',
  },
  inner: {
    maxWidth: 980,
    margin: '0 auto',
    padding: 0,
    textAlign: 'center',
  },
  card: {
    background: 'var(--paper-3)',
    border: '2px solid var(--ink)',
    borderRadius: 22,
    boxShadow: '10px 10px 0 var(--ink)',
    overflow: 'hidden',
  },
  headerBand: {
    background: 'var(--brand-green)',
    borderBottom: '2px solid var(--ink)',
    padding: '28px 40px',
    textAlign: 'center',
  },
  body: {
    padding: '40px 48px 44px',
    textAlign: 'center',
  },
  lede: {
    fontWeight: 700,
    color: 'var(--accent)',
  },
  eyebrow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.32em',
    textTransform: 'uppercase',
    color: 'var(--ink-mid)',
    margin: '0 0 40px',
  },
  eyebrowRule: {
    display: 'inline-block',
    width: 36,
    height: 1,
    background: 'var(--ink-mid)',
    verticalAlign: 'middle',
    margin: '0 14px',
    opacity: 0.5,
  },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(40px, 4.4vw, 64px)',
    lineHeight: 1.05,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 auto 40px',
    textWrap: 'balance',
    maxWidth: 880,
  },
  p: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 19,
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: '0 auto 18px',
    textWrap: 'pretty',
    maxWidth: 640,
  },
  pLast: {
    marginBottom: 56,
  },
  cta: {
    appearance: 'none',
    border: 0,
    borderRadius: 999,
    padding: '22px 44px',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 15,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 14px 30px rgba(48,8,4,0.18)',
    textAlign: 'center',
    display: 'inline-block',
  },
  ctaMeta: {
    display: 'block',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--ink-mid)',
    marginTop: 22,
  },
};

function CloseOfferD() {
  return (
    <section style={closeDStyles.section} data-screen-label="03 Close + Offer">
      <div style={closeDStyles.inner}>
        <div style={closeDStyles.card}>
          <div style={closeDStyles.headerBand}>
            <h2 style={{ ...closeDStyles.h, margin: 0, fontSize: 'clamp(32px, 3.6vw, 48px)', color: 'var(--paper)' }}>
              Get Your First Jar Of Cheerific<sup className="tm">{'™'}</sup> For 50% Off (Plus A Free Gift)
            </h2>
          </div>
          <div style={closeDStyles.body}>
        <p style={closeDStyles.p}>
          You{'\u2019'}ve tried harder things. You{'\u2019'}ve tried more complicated things. You{'\u2019'}ve tried <span style={closeDStyles.lede}>the things that promised ketosis in an hour and delivered a stomach ache in forty-five minutes.</span> <span style={closeDStyles.lede}>This is the opposite of all of that.</span>
        </p>
        <p style={closeDStyles.p}>
          <span style={closeDStyles.lede}>Sixty seconds.</span> A creamy mug of dark chocolate. And somewhere around week 8, the moment most women describe the same way{'\u2026'} It{'\u2019'}s 9:47pm. <span style={closeDStyles.lede}>You walk past the pantry. You don{'\u2019'}t open it.</span> You don{'\u2019'}t do the math on the chocolate chips. <span style={closeDStyles.lede}>You don{'\u2019'}t think about Monday.</span>
        </p>
        <p style={{...closeDStyles.p, ...closeDStyles.pLast}}>
          <span style={closeDStyles.lede}>You didn{'\u2019'}t start over. You just came back.</span> That{'\u2019'}s what Cheerific<sup className="tm">{'\u2122'}</sup> is built for. <span style={closeDStyles.lede}>Not a fix. Not a hack.</span> A daily 60-second ritual that quietly, steadily, ends the cycle that{'\u2019'}s been breaking you for six Mondays in a row.
        </p>
        <button
          type="button"
          style={closeDStyles.cta}
          onClick={() => {
            const target = document.querySelector('.desktop-only [data-screen-label="04 Buy Intro"]') || document.querySelector('.desktop-only [data-screen-label="04 Buy"]');
            if (target) {
              const rect = target.getBoundingClientRect();
              const y = rect.top + window.scrollY - 24;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
        >
          I Want To Stop Starting Over Every Monday
        </button>
        <span style={closeDStyles.ctaMeta}>
          50% off your first jar · free gift included
        </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Guarantee — slim band
const guaranteeDStyles = {
  section: {
    background: 'var(--paper)',
    padding: '0 0 48px',
  },
  inner: {
    maxWidth: 880,
    margin: '0 auto',
    padding: '0 48px',
  },
  card: {
    background: 'var(--paper-2)',
    border: '1px solid var(--rule)',
    borderRadius: 18,
    padding: '24px 28px',
    display: 'flex',
    gap: 20,
    alignItems: 'center',
  },
  seal: {
    flex: '0 0 auto',
    width: 64,
    height: 64,
    borderRadius: 32,
    background: 'var(--green)',
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
  },
  body: { flex: 1, minWidth: 0 },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 6px',
  },
  body2: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 1.5,
    color: 'var(--ink)',
    margin: 0,
  },
};

function GuaranteeD() {
  return (
    <section style={guaranteeDStyles.section} data-screen-label="05 Guarantee">
      <div style={guaranteeDStyles.inner}>
        <div style={guaranteeDStyles.card}>
          <span style={guaranteeDStyles.seal}>30<br />DAY</span>
          <div style={guaranteeDStyles.body}>
            <p style={guaranteeDStyles.title}>{'\u201C'}Feel Like Yourself Again{'\u201D'} Guarantee</p>
            <p style={guaranteeDStyles.body2}>
              Don{'\u2019'}t love it? We{'\u2019'}ll refund you. No argument. No forms. No {'\u201C'}we{'\u2019'}re so sorry to see you go{'\u201D'} hoops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CloseOfferD, GuaranteeD });
