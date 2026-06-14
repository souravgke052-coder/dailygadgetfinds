import React from 'react';

const styles = {
  container: {
    textAlign: 'center',
    marginBottom: 'var(--spacing-12)',
  },
  title: {
    fontSize: 'var(--font-size-3xl)',
    fontWeight: 'var(--font-weight-bold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-4)',
    lineHeight: 'var(--line-height-tight)',
  },
  subtitle: {
    fontSize: 'var(--font-size-lg)',
    color: 'var(--color-text-secondary)',
    maxWidth: '600px',
    margin: '0 auto var(--spacing-6)',
    lineHeight: 'var(--line-height-relaxed)',
  },
  ctaLink: {
    display: 'inline-block',
    padding: 'var(--spacing-3) var(--spacing-6)',
    backgroundColor: 'var(--color-accent)',
    color: '#FFFFFF',
    fontWeight: 'var(--font-weight-semibold)',
    fontSize: 'var(--font-size-sm)',
    borderRadius: 'var(--border-radius-lg)',
    textDecoration: 'none',
    transition: 'all var(--transition-fast)',
  },
};

function SectionHeader({ title, subtitle, ctaText, ctaLink }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
      {ctaText && ctaLink && (
        <a href={ctaLink} style={styles.ctaLink}>
          {ctaText}
        </a>
      )}
    </div>
  );
}

export default SectionHeader;