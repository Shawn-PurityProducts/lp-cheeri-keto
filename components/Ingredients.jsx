// Ingredients.jsx — "What's in every scoop" — 4 ingredient category tiles.
// Each tile: image placeholder, category name, count, ingredient list.
// Mobile-first 1-col, 2-col on wider viewports.

const ingredientsStyles = {
  section: {
    background: 'var(--paper-2)',
    padding: '36px 0 36px',
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
    fontSize: 13,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--ink-mid)',
    margin: '0 0 8px',
    textAlign: 'center',
  },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(26px, 6.6vw, 34px)',
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 12px',
    textWrap: 'balance',
    textAlign: 'center',
  },
  intro: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 1.55,
    color: 'var(--ink-soft)',
    margin: '0 0 28px',
    textWrap: 'pretty',
    textAlign: 'center',
    maxWidth: 520,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 16,
  },
  tile: {
    background: 'var(--paper-3)',
    border: '1px solid var(--rule)',
    borderRadius: 16,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  tileImg: {
    width: '100%',
    aspectRatio: '4 / 3',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 12px, var(--ph-2) 12px 24px)',
    border: '1px solid var(--rule)',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'flex-end',
    padding: 10,
    overflow: 'hidden',
  },
  tileImgPhoto: {
    width: '100%',
    aspectRatio: '4 / 3',
    border: '1px solid var(--rule)',
    borderRadius: 12,
    display: 'block',
    objectFit: 'cover',
  },
  tileImgLabel: {
    background: 'var(--paper)',
    border: '1px solid var(--rule)',
    padding: '3px 7px',
    borderRadius: 4,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    fontSize: 9,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    color: 'var(--ink-soft)',
  },
  tileHeader: {
    display: 'flex',
    alignItems: 'baseline',
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
  },
  tileCount: {
    flex: '0 0 auto',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '0.1em',
    color: 'var(--ink-mid)',
    background: 'var(--paper-2)',
    padding: '3px 8px',
    borderRadius: 4,
    whiteSpace: 'nowrap',
  },
  tileBody: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 1.5,
    color: 'var(--ink-soft)',
    margin: 0,
    textWrap: 'pretty',
  },
  ing: {
    color: 'var(--ink)',
    fontWeight: 600,
  },
  footnote: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 1.5,
    color: 'var(--ink-mid)',
    margin: '20px 0 0',
    textAlign: 'center',
  },
  factsLink: {
    appearance: 'none',
    background: 'transparent',
    border: 0,
    padding: 0,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    cursor: 'pointer',
    textDecoration: 'underline',
    textUnderlineOffset: 4,
  },
  // Lightbox
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(20, 8, 4, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    zIndex: 50,
    animation: 'cheeriFadeIn 160ms ease-out',
  },
  overlayInner: {
    position: 'relative',
    background: 'var(--paper)',
    borderRadius: 14,
    maxWidth: 520,
    width: '100%',
    maxHeight: 'calc(100vh - 32px)',
    overflow: 'auto',
    boxShadow: '0 30px 80px rgba(20,8,4,0.4)',
  },
  overlayClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    border: 0,
    background: 'var(--paper)',
    color: 'var(--ink)',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 16,
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 6px 16px rgba(20,8,4,0.18)',
    zIndex: 1,
  },
  overlayImg: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
};

function IngredientTile({ category, count, label, blurb, ingredients, description, imgSrc, imgAlt }) {
  return (
    <div style={ingredientsStyles.tile}>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={imgAlt || ''}
          style={ingredientsStyles.tileImgPhoto}
          loading="lazy"
        />
      ) : (
        <div style={ingredientsStyles.tileImg}>
          <span style={ingredientsStyles.tileImgLabel}>{label}</span>
        </div>
      )}
      <div style={ingredientsStyles.tileHeader}>
        <h3 style={ingredientsStyles.tileTitle}>{category}</h3>
        {count && <span style={ingredientsStyles.tileCount}>{count}</span>}
      </div>
      {description ? (
        <p style={ingredientsStyles.tileBody}>{description}</p>
      ) : (
        <p style={ingredientsStyles.tileBody}>
          {blurb}
          {' '}
          {ingredients.map((ing, i) => (
            <React.Fragment key={i}>
              <span style={ingredientsStyles.ing}>{ing}</span>
              {i < ingredients.length - 1 ? ', ' : '.'}
            </React.Fragment>
          ))}
        </p>
      )}
    </div>
  );
}

function Ingredients() {
  const [showFacts, setShowFacts] = React.useState(false);
  React.useEffect(() => {
    if (!showFacts) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setShowFacts(false);
    };
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
        'A cocoa extract that delivers the feel-good energy, focus-support, and mood support of chocolate \u2014 without jitters or a sugar crash.*',
    },
    {
      category: 'L. gasseri CP2305\u00ae',
      imgSrc: 'assets/ingredients/cp2305.webp',
      imgAlt: 'L. gasseri CP2305 psychobiotic illustration',
      description:
        'A clinically studied psychobiotic (heat-treated probiotic with mind-body benefits) shown to support calm mood, digestive comfort under stress, and balanced energy through the gut\u2013brain connection.*',
    },
    {
      category: 'Organic Greens & Fruits Blend',
      imgSrc: 'assets/ingredients/greens-fruits.webp',
      imgAlt: 'Close-up of fresh greens, tomatoes, apple, and figs',
      description:
        'Organic blend of Chlorella, Apple, Raspberry, Strawberry, Tomato, Kale, Carrot, Spinach, Broccoli, and Beet \u2014 a nutrient-rich superfood mix for daily wellness.',
    },
    {
      category: 'Organic Antioxidant Phytonutrient Blend',
      imgSrc: 'assets/ingredients/antioxidant-blend.webp',
      imgAlt: 'Mixed berries: blueberries, raspberries, blackberries, strawberries',
      description:
        'A nutrient-rich organic fruit and green tea blend featuring Apple, Acerola Cherry, Blueberry, Pomegranate, Acai, and Cranberry for antioxidant support.',
    },
  ];
  return (
    <section style={ingredientsStyles.section} data-screen-label="06 Ingredients">
      <div style={ingredientsStyles.inner} className="rail-wide">
        <p style={ingredientsStyles.eyebrow} className="ingredients-eyebrow">What{'\u2019'}s in every scoop</p>
        <h2 style={ingredientsStyles.h}>
          17 Organic Superfoods. Two Clinically Studied Actives. One Mug Of Chocolate.
        </h2>
        <p style={ingredientsStyles.intro}>
          No fillers. No mystery powders. Here{'\u2019'}s exactly what{'\u2019'}s working for you, every morning.
        </p>

        <div style={ingredientsStyles.grid} className="ingredients-grid">
          {tiles.map((t, i) => (
            <IngredientTile key={i} {...t} />
          ))}
        </div>

        <p style={ingredientsStyles.footnote}>
          <button
            type="button"
            style={ingredientsStyles.factsLink}
            onClick={() => setShowFacts(true)}
          >
            See Supplement Facts
          </button>
        </p>
      </div>

      {showFacts && (
        <div
          style={ingredientsStyles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Supplement Facts"
          onClick={() => setShowFacts(false)}
        >
          <div
            style={ingredientsStyles.overlayInner}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              style={ingredientsStyles.overlayClose}
              aria-label="Close supplement facts"
              onClick={() => setShowFacts(false)}
            >
              {'\u00d7'}
            </button>
            <img
              src="assets/supplement-facts.webp"
              alt="Cheerific supplement facts panel"
              style={ingredientsStyles.overlayImg}
            />
          </div>
        </div>
      )}
    </section>
  );
}
