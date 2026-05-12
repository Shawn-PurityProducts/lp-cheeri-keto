// IngredientsDesktop.jsx — 4-across single row.

const ingDStyles = {
  section: {
    background: 'var(--paper-2)',
    padding: '72px 0 72px',
    borderTop: '1px solid var(--rule)',
  },
  inner: {
    maxWidth: 1320,
    margin: '0 auto',
    padding: '0 48px',
  },
  head: {
    textAlign: 'center',
    margin: '0 auto 56px',
    maxWidth: 760,
  },
  eyebrow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 13,
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
  intro: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 1.55,
    color: 'var(--ink-soft)',
    margin: 0,
    textWrap: 'pretty',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 24,
  },
  tile: {
    background: 'var(--paper-3)',
    border: '1px solid var(--rule)',
    borderRadius: 18,
    padding: 18,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  tileImg: {
    width: '100%',
    aspectRatio: '1 / 1',
    objectFit: 'cover',
    border: '1px solid var(--rule)',
    borderRadius: 14,
    display: 'block',
  },
  tileImgPh: {
    width: '100%',
    aspectRatio: '1 / 1',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 12px, var(--ph-2) 12px 24px)',
    border: '1px solid var(--rule)',
    borderRadius: 14,
  },
  tileHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 10,
  },
  tileTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: 0,
    textWrap: 'balance',
    lineHeight: 1.2,
  },
  tileBody: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 1.55,
    color: 'var(--ink-soft)',
    margin: 0,
    textWrap: 'pretty',
  },
  factsWrap: {
    textAlign: 'center',
    margin: '40px 0 0',
  },
  factsLink: {
    appearance: 'none',
    background: 'transparent',
    border: 0,
    padding: 0,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    cursor: 'pointer',
    textDecoration: 'underline',
    textUnderlineOffset: 5,
  },
  // Lightbox
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(20, 8, 4, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    zIndex: 50,
  },
  overlayInner: {
    position: 'relative',
    background: 'var(--paper)',
    borderRadius: 14,
    maxWidth: 560,
    width: '100%',
    maxHeight: 'calc(100vh - 48px)',
    overflow: 'auto',
    boxShadow: '0 30px 80px rgba(20,8,4,0.4)',
  },
  overlayClose: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    border: 0,
    background: 'var(--paper)',
    color: 'var(--ink)',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 18,
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 6px 16px rgba(20,8,4,0.18)',
    zIndex: 1,
  },
  overlayImg: { display: 'block', width: '100%', height: 'auto' },
};

function IngredientTileD({ category, description, imgSrc, imgAlt }) {
  return (
    <div style={ingDStyles.tile}>
      {imgSrc ? (
        <img src={imgSrc} alt={imgAlt || ''} style={ingDStyles.tileImg} loading="lazy" />
      ) : (
        <div style={ingDStyles.tileImgPh}></div>
      )}
      <div style={ingDStyles.tileHeader}>
        <h3 style={ingDStyles.tileTitle}>{category}</h3>
      </div>
      <p style={ingDStyles.tileBody}>{description}</p>
    </div>
  );
}

function IngredientsD() {
  const [showFacts, setShowFacts] = React.useState(false);
  React.useEffect(() => {
    if (!showFacts) return;
    const onKey = (e) => { if (e.key === 'Escape') setShowFacts(false); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [showFacts]);
  const tiles = [
    {
      category: 'Chocamine\u00ae',
      imgSrc: 'assets/ingredients/chocamine.webp',
      imgAlt: 'Cocoa powder',
      description:
        'A cocoa extract that delivers the feel-good energy, focus-support, and mood support of chocolate — without jitters or a sugar crash.*',
    },
    {
      category: 'L. gasseri CP2305\u00ae',
      imgSrc: 'assets/ingredients/cp2305.webp',
      imgAlt: 'L. gasseri CP2305 psychobiotic',
      description:
        'A clinically studied psychobiotic shown to support calm mood, digestive comfort under stress, and balanced energy through the gut–brain connection.*',
    },
    {
      category: 'Greens & Fruits Blend',
      imgSrc: 'assets/ingredients/greens-fruits.webp',
      imgAlt: 'Greens, tomatoes, apple, figs',
      description:
        'Organic Chlorella, Apple, Raspberry, Strawberry, Tomato, Kale, Carrot, Spinach, Broccoli, Beet — a nutrient-rich superfood mix for daily wellness.',
    },
    {
      category: 'Antioxidant Blend',
      imgSrc: 'assets/ingredients/antioxidant-blend.webp',
      imgAlt: 'Mixed berries',
      description:
        'A nutrient-rich organic fruit and green tea blend featuring Apple, Acerola Cherry, Blueberry, Pomegranate, Acai, and Cranberry for antioxidant support.',
    },
  ];
  return (
    <section style={ingDStyles.section} data-screen-label="06 Ingredients">
      <div style={ingDStyles.inner}>
        <div style={ingDStyles.head}>
          <p style={ingDStyles.eyebrow}>What{'\u2019'}s in every scoop</p>
          <h2 style={ingDStyles.h}>
            17 Organic Superfoods. Two Clinically Studied Actives. One Mug Of Chocolate.
          </h2>
          <p style={ingDStyles.intro}>
            No fillers. No mystery powders. Here{'\u2019'}s exactly what{'\u2019'}s working for you, every morning.
          </p>
        </div>

        <div style={ingDStyles.grid}>
          {tiles.map((t, i) => <IngredientTileD key={i} {...t} />)}
        </div>

        <div style={ingDStyles.factsWrap}>
          <button type="button" style={ingDStyles.factsLink} onClick={() => setShowFacts(true)}>
            See Supplement Facts
          </button>
        </div>
      </div>

      {showFacts && (
        <div
          style={ingDStyles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Supplement Facts"
          onClick={() => setShowFacts(false)}
        >
          <div style={ingDStyles.overlayInner} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              style={ingDStyles.overlayClose}
              aria-label="Close supplement facts"
              onClick={() => setShowFacts(false)}
            >
              {'\u00d7'}
            </button>
            <img
              src="assets/supplement-facts.webp"
              alt="Cheerific supplement facts panel"
              style={ingDStyles.overlayImg}
            />
          </div>
        </div>
      )}
    </section>
  );
}

Object.assign(window, { IngredientsD });
