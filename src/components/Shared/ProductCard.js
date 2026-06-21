import React from 'react';
import Link from '@docusaurus/Link';

const styles = {
  card: {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--border-radius-xl)',
    overflow: 'hidden',
    transition: 'all var(--transition-normal)',
  },
  cardHover: {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-lg)',
    borderColor: 'var(--color-accent)',
  },
  imagePlaceholder: {
    width: '100%',
    height: '180px',
    backgroundColor: 'var(--color-surface-elevated)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '0.5rem',
    color: 'var(--color-text-tertiary)',
  },
  imageIcon: {
    fontSize: '32px',
    lineHeight: 1,
  },
  imageLabel: {
    fontSize: 'var(--font-size-xs)',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  body: {
    padding: 'var(--spacing-6)',
  },
  category: {
    display: 'inline-block',
    padding: 'var(--spacing-1) var(--spacing-2)',
    backgroundColor: 'rgba(37, 99, 235, 0.1)',
    color: 'var(--color-accent)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 'var(--font-weight-medium)',
    borderRadius: 'var(--border-radius-sm)',
    marginBottom: 'var(--spacing-3)',
  },
  title: {
    fontSize: 'var(--font-size-lg)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-2)',
    lineHeight: 'var(--line-height-tight)',
  },
  description: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
    lineHeight: 'var(--line-height-relaxed)',
    marginBottom: 'var(--spacing-4)',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: 'var(--spacing-3) var(--spacing-4)',
    backgroundColor: 'var(--color-accent)',
    color: '#FFFFFF',
    fontWeight: 'var(--font-weight-semibold)',
    fontSize: 'var(--font-size-sm)',
    borderRadius: 'var(--border-radius-lg)',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all var(--transition-fast)',
    border: 'none',
    cursor: 'pointer',
    minHeight: '44px',
  },
};

function ProductCard({ title, description, category, href, badge, price }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const isExternal = href && (href.startsWith('http') || href.startsWith('//'));
  const linkProps = isExternal
    ? { target: '_blank', rel: 'nofollow sponsored noopener noreferrer' }
    : {};

  const Wrapper = href ? (isExternal ? 'a' : Link) : 'div';
  const wrapperProps = href
    ? isExternal
      ? { href, ...linkProps }
      : { to: href }
    : {};

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.imagePlaceholder} aria-hidden="true">
        <span style={styles.imageIcon}>📦</span>
        <span style={styles.imageLabel}>Review</span>
      </div>
      <div style={styles.body}>
        {category && <span style={styles.category}>{category}</span>}
        {badge && !category && <span style={styles.category}>{badge}</span>}
        <h3 style={styles.title}>{title}</h3>
        {description && <p style={styles.description}>{description}</p>}
        {price && (
          <p style={{ ...styles.description, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-4)' }}>
            {price}
          </p>
        )}
        {href ? (
          <Wrapper
            style={styles.button}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            {...wrapperProps}
          >
            {isExternal ? 'View Product' : 'Read Review'}
          </Wrapper>
        ) : null}
      </div>
    </div>
  );
}

export default ProductCard;
