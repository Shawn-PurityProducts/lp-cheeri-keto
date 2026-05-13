// Buy.jsx — Product detail + pricing/buy block.
// Image · product name · price · subscription/one-time toggle · Add to Cart · trust strip.

const buyStyles = {
  section: {
    background: 'var(--paper)',
    padding: '40px 14px 40px',
    borderTop: 0,
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
    padding: '36px 18px 26px',
  },
  imgPh: {
    width: '100%',
    aspectRatio: '1 / 1',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 12px, var(--ph-2) 12px 24px)',
    border: '1px solid var(--rule)',
    borderRadius: 18,
    display: 'flex',
    alignItems: 'flex-end',
    padding: 14,
    margin: '0 0 20px',
    overflow: 'hidden',
    position: 'relative',
  },
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
    color: 'var(--ink-soft)',
  },
  thumbRow: {
    display: 'flex',
    gap: 8,
    marginBottom: 22,
  },
  thumb: {
    flex: '1 1 0',
    aspectRatio: '1 / 1',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 8px, var(--ph-2) 8px 16px)',
    border: '1px solid var(--rule)',
    borderRadius: 10,
    overflow: 'hidden',
  },
  thumbImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  thumbActive: {
    borderColor: 'var(--accent)',
    outline: '2px solid var(--accent)',
    outlineOffset: -3,
  },
  bridgeHeadline: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(24px, 6.4vw, 32px)',
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    margin: '0 0 10px',
    textWrap: 'balance',
    textAlign: 'center',
  },
  productSku: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 6px',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    margin: '0 0 8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 13,
    color: 'var(--ink-soft)',
  },
  stars: {
    color: '#c08423',
    letterSpacing: '0.04em',
    fontSize: 14,
  },
  productName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(22px, 5.6vw, 28px)',
    lineHeight: 1.15,
    letterSpacing: '-0.005em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: '0 0 6px',
    textWrap: 'balance',
  },
  productSub: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 14,
    color: 'var(--ink-soft)',
    margin: '0 0 18px',
  },
  // Toggle
  toggleLabel: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--ink-mid)',
    margin: '0 0 10px',
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    margin: '0 0 18px',
  },
  option: {
    position: 'relative',
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
    padding: '14px 14px 14px 14px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'var(--rule)',
    background: 'var(--paper)',
    borderRadius: 12,
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
    fontFamily: 'var(--font-sans)',
  },
  optionActive: {
    borderColor: 'var(--accent)',
    boxShadow: '0 0 0 2px var(--accent) inset',
  },
  radio: {
    flex: '0 0 auto',
    width: 18,
    height: 18,
    borderRadius: 9,
    border: '1.5px solid var(--ink-mid)',
    background: 'var(--paper)',
    marginTop: 2,
    position: 'relative',
  },
  radioOn: {
    borderColor: 'var(--accent)',
    background: 'var(--accent)',
  },
  radioDot: {
    position: 'absolute',
    inset: 3,
    borderRadius: 6,
    background: 'var(--paper)',
  },
  optionBody: {
    flex: 1,
    minWidth: 0,
  },
  optionTopRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: 8,
    flexWrap: 'wrap',
  },
  optionTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: 0,
  },
  priceCluster: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 6,
    flexWrap: 'wrap',
  },
  priceNow: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 18,
    color: 'var(--ink)',
  },
  priceWas: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 13,
    color: 'var(--ink-soft)',
    textDecoration: 'line-through',
  },
  optionDesc: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 13,
    color: 'var(--ink-soft)',
    margin: '6px 0 0',
    lineHeight: 1.4,
  },
  badge: {
    position: 'absolute',
    top: -9,
    left: 12,
    padding: '3px 8px',
    background: 'var(--green)',
    color: 'var(--ink)',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 10,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    borderRadius: 4,
  },
  perks: {
    listStyle: 'none',
    padding: 0,
    margin: '10px 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  perk: {
    display: 'flex',
    gap: 8,
    alignItems: 'flex-start',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 1.4,
    color: 'var(--ink)',
  },
  perkCheck: {
    flex: '0 0 auto',
    width: 14,
    height: 14,
    borderRadius: 7,
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 8,
    fontWeight: 800,
    fontFamily: 'var(--font-sans)',
    marginTop: 2,
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
  trustStrip: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px 16px',
    margin: '20px 0 0',
    padding: '16px 0 0',
    borderTop: '1px solid var(--rule)',
  },
  trustItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    fontFamily: 'var(--font-sans)',
  },
  trustLabel: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
  },
  trustSub: {
    fontWeight: 500,
    fontSize: 12,
    color: 'var(--ink-soft)',
    lineHeight: 1.35,
  },
};

function BuyImage({ label }) {
  const photos = [
    'CheeriPak/Sachet%20Tile%20Image%201.png',
    'CheeriPak/Sachet%20Tile%20Image%202.png',
    'CheeriPak/Sachet%20Tile%20Image%203.png',
    'CheeriPak/Sachet%20Tile%20Image%204.png',
    'CheeriPak/Sachet%20Tile%20Image%205.png',
    'CheeriPak/Sachet%20Tile%20Image%206.png',
    'CheeriPak/Sachet%20Tile%20Image%207.png',
  ];
  const [active, setActive] = React.useState(0);
  return (
    <div>
      <div style={buyStyles.imgPh}>
        <img
          src={photos[active]}
          alt="Cheerific product"
          style={buyStyles.imgPhPhoto}
        />
      </div>
      <div style={buyStyles.thumbRow}>
        {photos.map((src, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Product image ${i + 1}`}
            onClick={() => setActive(i)}
            style={{
              ...buyStyles.thumb,
              ...(active === i ? buyStyles.thumbActive : {}),
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <img src={src} alt="" style={buyStyles.thumbImg} />
          </button>
        ))}
      </div>
    </div>
  );
}

function BuyOption({ id, active, onSelect, title, badge, priceNow, priceWas, desc, perks }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      style={{
        ...buyStyles.option,
        ...(active ? buyStyles.optionActive : {}),
      }}
      aria-pressed={active}
    >
      {badge && <span style={buyStyles.badge}>{badge}</span>}
      <span style={{ ...buyStyles.radio, ...(active ? buyStyles.radioOn : {}) }}>
        {active && <span style={buyStyles.radioDot} />}
      </span>
      <span style={buyStyles.optionBody}>
        <span style={buyStyles.optionTopRow}>
          <span style={buyStyles.optionTitle}>{title}</span>
          <span style={buyStyles.priceCluster}>
            <span style={buyStyles.priceNow}>{priceNow}</span>
            {priceWas && <span style={buyStyles.priceWas}>{priceWas}</span>}
          </span>
        </span>
        <span style={buyStyles.optionDesc}>{desc}</span>
        {active && perks && (
          <ul style={buyStyles.perks}>
            {perks.map((p, i) => (
              <li key={i} style={buyStyles.perk}>
                <span style={buyStyles.perkCheck}>{'\u2713'}</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
      </span>
    </button>
  );
}

function Buy() {
  const [plan, setPlan] = React.useState('subscription');
  const ctaPrice = plan === 'subscription' ? '$24.95' : '$49.95';
  return (
    <section style={buyStyles.section} data-screen-label="04 Buy">
      <div style={buyStyles.inner} className="rail">
       <div style={buyStyles.card}>
        <div style={buyStyles.headerBand}>
          <h2 style={buyStyles.headerH}>
            Cheerific<sup className="tm">{'™'}</sup> · Dark Chocolate Superfood Elixir
          </h2>
        </div>
        <div style={buyStyles.body}>

        <div className="buy-cols">
          <div className="buy-cols-gallery">
            <BuyImage label="PRODUCT · IMAGE" />
          </div>
          <div className="buy-cols-info">

        <p style={buyStyles.productSub}>
          30 servings · Cocoa, 17 organic superfoods, Chocamine®, CP2305 postbiotic
        </p>
        <div style={buyStyles.rating}>
          <span style={buyStyles.stars}>{'\u2605\u2605\u2605\u2605\u2605'}</span>
          <span>4.9 · 126 reviews</span>
        </div>

        <p style={buyStyles.toggleLabel}>Choose your plan</p>
        <div style={buyStyles.options}>
          <BuyOption
            id="subscription"
            active={plan === 'subscription'}
            onSelect={setPlan}
            badge="50% off · Most popular"
            title="Subscribe & Save"
            priceNow="$24.95"
            priceWas="$49.95"
            desc="Delivered every 30 days. Cancel or pause anytime."
            perks={[
              '50% off your first order',
              '20% off every future order',
              'Free shipping, always',
              'A free gift with your first delivery',
              'That\u2019s less than 83¢ a day for a creamy mug of chocolate built for a woman over 40 doing keto on her own terms.',
            ]}
          />
          <BuyOption
            id="onetime"
            active={plan === 'onetime'}
            onSelect={setPlan}
            title="One-Time Purchase"
            priceNow="$49.95"
            desc="One jar. No subscription. No commitment."
          />
        </div>

        <button type="button" style={buyStyles.cta} onClick={() => window.CHEERI_SHOP.go(plan)}>
          Add to cart — {ctaPrice}
          <span style={buyStyles.ctaSub}>
            {plan === 'subscription'
              ? '30-day money-back guarantee · Cancel anytime'
              : '30-day money-back guarantee'}
          </span>
        </button>
          </div>
        </div>

        <div style={buyStyles.trustStrip}>
          <div style={buyStyles.trustItem}>
            <span style={buyStyles.trustLabel}>Free shipping</span>
            <span style={buyStyles.trustSub}>On every subscription order</span>
          </div>
          <div style={buyStyles.trustItem}>
            <span style={buyStyles.trustLabel}>30-day refund</span>
            <span style={buyStyles.trustSub}>Feel like yourself, or your money back</span>
          </div>
          <div style={buyStyles.trustItem}>
            <span style={buyStyles.trustLabel}>Cancel anytime</span>
            <span style={buyStyles.trustSub}>No forms, no hoops</span>
          </div>
          <div style={buyStyles.trustItem}>
            <span style={buyStyles.trustLabel}>Made in the USA</span>
            <span style={buyStyles.trustSub}>Third-party tested</span>
          </div>
        </div>
        </div>
       </div>
      </div>
    </section>
  );
}
