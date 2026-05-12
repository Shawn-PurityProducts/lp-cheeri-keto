// Testimonials.jsx — bottom-of-page social proof.
// Star rating header · stacked review cards · sign-off CTA.
// Mobile-first single column. Cards have a quoted review, name, age, optional verified tag.

const testimonialsStyles = {
  section: {
    background: 'var(--paper-3)',
    padding: '36px 0 48px',
    borderTop: '1px solid var(--rule)',
  },
  inner: {
    padding: '0 18px',
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
    margin: '0 0 14px',
    textAlign: 'center',
    textWrap: 'balance',
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    margin: '0 0 28px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 13,
    color: 'var(--ink-soft)',
  },
  stars: {
    fontSize: 16,
    letterSpacing: 1,
    color: '#e8a83b',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  card: {
    background: 'var(--paper-3)',
    border: '1px solid var(--rule)',
    borderRadius: 14,
    padding: '18px 18px 16px',
    fontFamily: 'var(--font-sans)',
  },
  cardStars: {
    color: '#e8a83b',
    fontSize: 14,
    letterSpacing: 1,
    marginBottom: 8,
    display: 'block',
  },
  cardQuote: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 1.55,
    color: 'var(--ink)',
    margin: '0 0 12px',
  },
  cardMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
    fontSize: 12,
    fontFamily: 'var(--font-sans)',
  },
  cardName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
  },
  cardSep: {
    color: 'var(--rule)',
  },
  cardAge: {
    color: 'var(--ink-soft)',
    fontWeight: 500,
  },
  verifiedTag: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 10,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--green-deep)',
    background: 'rgba(166, 197, 97, 0.18)',
    padding: '3px 7px',
    borderRadius: 4,
    marginLeft: 'auto',
  },
  signoffWrap: {
    display: 'flex',
    justifyContent: 'center',
    margin: '32px 0 0',
  },
  signoffCta: {
    appearance: 'none',
    border: 0,
    borderRadius: 999,
    padding: '18px 28px',
    background: 'var(--brand-green)',
    color: 'var(--paper)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 14,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    boxShadow: '6px 6px 0 var(--ink)',
    textAlign: 'center',
    lineHeight: 1.2,
    maxWidth: 320,
  },
  signoffSub: {
    margin: '6px 0 0',
    textAlign: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 13,
    color: 'var(--ink-soft)',
  },
};

function TestimonialCard({ quote, name, age, verified }) {
  return (
    <li style={testimonialsStyles.card}>
      <span style={testimonialsStyles.cardStars}>{'\u2605\u2605\u2605\u2605\u2605'}</span>
      <p style={testimonialsStyles.cardQuote}>{window.tmify(quote)}</p>
      <div style={testimonialsStyles.cardMeta}>
        <span style={testimonialsStyles.cardName}>{name}</span>
        {age && (
          <>
            <span style={testimonialsStyles.cardSep}>{'\u00b7'}</span>
            <span style={testimonialsStyles.cardAge}>{age}</span>
          </>
        )}
        {verified && <span style={testimonialsStyles.verifiedTag}>Verified buyer</span>}
      </div>
    </li>
  );
}

function Testimonials() {
  // Placeholder testimonials — replace with real ones.
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
    <section style={testimonialsStyles.section} data-screen-label="07 Testimonials">
      <div style={testimonialsStyles.inner} className="rail-wide">
        <p style={testimonialsStyles.eyebrow}>Real women. Real reviews.</p>
        <h2 style={testimonialsStyles.h}>What Cheerific<sup className="tm">{'™'}</sup> Is Doing For Women Like You</h2>
        <div style={testimonialsStyles.ratingRow}>
          <span style={testimonialsStyles.stars}>{'\u2605\u2605\u2605\u2605\u2605'}</span>
          <span>4.9 average from 126+ reviews</span>
        </div>

        <ul style={testimonialsStyles.list} className="testimonials-list">
          {reviews.map((r, i) => (
            <TestimonialCard key={i} {...r} />
          ))}
        </ul>

        <div style={testimonialsStyles.signoffWrap}>
          <button
            type="button"
            style={testimonialsStyles.signoffCta}
            onClick={() => {
              const target = document.querySelector('.mobile-only [data-screen-label="04 Buy"]');
              if (target) {
                const rect = target.getBoundingClientRect();
                const y = rect.top + window.scrollY - 12;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Join Thousands of Women Feeling Like Themselves Again
          </button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials, TestimonialCard });
