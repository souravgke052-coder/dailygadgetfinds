import React from 'react';

const styles = {
  card: {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--border-radius-xl)',
    padding: 'var(--spacing-6)',
    textAlign: 'center',
    transition: 'all var(--transition-normal)',
    textDecoration: 'none',
    display: 'block',
  },
  cardHover: {
    transform: 'translateY(-4px)',
    boxShadow: 'var(--shadow-lg)',
    borderColor: 'var(--color-accent)',
    backgroundColor: 'var(--color-surface-elevated)',
  },
  icon: {
    width: '48px',
    height: '48px',
    margin: '0 auto var(--spacing-4)',
    color: 'var(--color-accent)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 'var(--font-size-lg)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-2)',
  },
  description: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
    marginBottom: 'var(--spacing-3)',
    lineHeight: 'var(--line-height-relaxed)',
  },
  count: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-tertiary)',
  },
};

function CategoryCard({ title, description, articleCount, link, icon }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={link}
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <div style={styles.icon}>
          {icon}
        </div>
      )}
      <h3 style={styles.title}>{title}</h3>
      {description && <p style={styles.description}>{description}</p>}
      <span style={styles.count}>{articleCount} articles</span>
    </a>
  );
}

export default CategoryCard;