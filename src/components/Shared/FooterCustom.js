import React from 'react';

const styles = {
  footer: {
    backgroundColor: 'var(--color-background-secondary)',
    borderTop: '1px solid var(--color-border)',
    padding: 'var(--spacing-12) 0 var(--spacing-6)',
    marginTop: 'var(--spacing-16)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 var(--spacing-6)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'var(--spacing-8)',
    marginBottom: 'var(--spacing-8)',
  },
  column: {
    marginBottom: 'var(--spacing-4)',
  },
  columnTitle: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-text-primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: 'var(--spacing-4)',
  },
  link: {
    display: 'block',
    color: 'var(--color-text-secondary)',
    fontSize: 'var(--font-size-sm)',
    marginBottom: 'var(--spacing-2)',
    textDecoration: 'none',
    transition: 'color var(--transition-fast)',
  },
  brandSection: {
    marginBottom: 'var(--spacing-4)',
  },
  brandName: {
    fontSize: 'var(--font-size-lg)',
    fontWeight: 'var(--font-weight-bold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-2)',
  },
  brandTagline: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
    lineHeight: 'var(--line-height-relaxed)',
  },
  divider: {
    borderTop: '1px solid var(--color-border)',
    paddingTop: 'var(--spacing-6)',
    marginTop: 'var(--spacing-6)',
  },
  copyright: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-tertiary)',
    textAlign: 'center',
    marginTop: 'var(--spacing-4)',
  },
  disclosure: {
    fontSize: 'var(--font-size-xs)',
    color: 'var(--color-text-tertiary)',
    textAlign: 'center',
    marginTop: 'var(--spacing-3)',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

function FooterCustom() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.brandSection}>
            <div style={styles.brandName}>Daily Gadget Finds</div>
            <p style={styles.brandTagline}>
              Smarter mobile accessories for your daily life. Reviews, guides, and the best deals.
            </p>
          </div>

          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Categories</h4>
            <a href="/docs/categories/chargers" style={styles.link}>Chargers</a>
            <a href="/docs/categories/power-banks" style={styles.link}>Power Banks</a>
            <a href="/docs/categories/earbuds" style={styles.link}>Earbuds</a>
            <a href="/docs/categories/cases" style={styles.link}>Cases</a>
            <a href="/docs/categories/cables" style={styles.link}>Cables</a>
          </div>

          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Resources</h4>
            <a href="/blog/tags/buying-guide" style={styles.link}>Buying Guides</a>
            <a href="/blog/tags/review" style={styles.link}>Reviews</a>
            <a href="/blog/tags/comparison" style={styles.link}>Comparisons</a>
            <a href="/blog/tags/budget" style={styles.link}>Budget Picks</a>
            <a href="/blog/tags/best" style={styles.link}>Best Of</a>
          </div>

          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Legal</h4>
            <a href="/privacy" style={styles.link}>Privacy Policy</a>
            <a href="/terms" style={styles.link}>Terms of Service</a>
            <a href="/disclosure" style={styles.link}>Affiliate Disclosure</a>
            <a href="/contact" style={styles.link}>Contact Us</a>
          </div>
        </div>

        <div style={styles.divider}>
          <p style={styles.copyright}>
            &copy; {new Date().getFullYear()} Daily Gadget Finds. All rights reserved.
          </p>
          <p style={styles.disclosure}>
            This site contains affiliate links. We may earn a commission when you purchase through our links at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterCustom;