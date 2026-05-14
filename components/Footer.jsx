// Footer.jsx — slim mobile footer mirroring desktop FooterD content.

const footerStyles = {
  footer: {
    background: 'var(--paper)',
    color: 'var(--ink)',
    padding: '36px 0 28px',
    fontFamily: 'var(--font-sans)',
    borderTop: '1px solid var(--rule)',
  },
  inner: {
    padding: '0 22px',
    maxWidth: 720,
    margin: '0 auto',
  },
  brandRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    padding: '4px 0 24px',
  },
  brandImg: {
    height: 40,
    width: 'auto',
    display: 'block',
  },
  finePrint: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 11,
    lineHeight: 1.6,
    color: 'var(--ink-soft)',
    margin: '0 0 12px',
    textAlign: 'center',
    textWrap: 'pretty',
  },
  legalRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '6px 14px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 11,
    color: 'var(--ink-soft)',
  },
  legalLink: {
    color: 'var(--ink-soft)',
    textDecoration: 'underline',
    textUnderlineOffset: 2,
  },
  copyright: {
    textAlign: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 11,
    color: 'var(--ink-soft)',
    margin: '4px 0 0',
  },
};

function Footer() {
  return (
    <footer style={footerStyles.footer} data-screen-label="09 Footer">
      <div style={footerStyles.inner}>
        <div style={footerStyles.brandRow}>
          <img src="cheerific-logo.avif" alt="Cheerific" style={footerStyles.brandImg} />
          <div style={footerStyles.legalRow}>
            <a href="https://www.cheerific.com/policies/privacy-policy?utm_source=vercel&utm_medium=landing_page&utm_campaign=keto" target="_blank" rel="noopener noreferrer" style={footerStyles.legalLink}>Privacy Policy</a>
            <a href="https://www.cheerific.com/policies/terms-of-service?utm_source=vercel&utm_medium=landing_page&utm_campaign=keto" target="_blank" rel="noopener noreferrer" style={footerStyles.legalLink}>Terms of Service</a>
            <a href="https://www.cheerific.com/pages/contact?utm_source=vercel&utm_medium=landing_page&utm_campaign=keto" target="_blank" rel="noopener noreferrer" style={footerStyles.legalLink}>Contact Us</a>
          </div>
        </div>

        <p style={footerStyles.finePrint}>
          *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>

        <p style={footerStyles.copyright}>
          {'©'} {new Date().getFullYear()} Cheerific<sup className="tm">{'™'}</sup>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
