import React from 'react';

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
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-tertiary)',
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
  },
};

function ProductCard({ title, description, category, link }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.imagePlaceholder}>
        [Product Image Placeholder]
      </div>
      <div style={styles.body}>
        {category && <span style={styles.category}>{category}</span>}
        <h3 style={styles.title}>{title}</h3>
        {description && <p style={styles.description}>{description}</p>}
        <a href={link || '#'} style={styles.button}>
          View Product
        </a>
      </div>
    </div>
  );
}

export default ProductCard;