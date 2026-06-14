import React from 'react';

const styles = {
  base: {
    display: 'inline-block',
    padding: 'var(--spacing-3) var(--spacing-6)',
    fontWeight: 'var(--font-weight-semibold)',
    fontSize: 'var(--font-size-sm)',
    borderRadius: 'var(--border-radius-lg)',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all var(--transition-fast)',
    cursor: 'pointer',
    border: 'none',
  },
  primary: {
    backgroundColor: '#FFFFFF',
    color: 'var(--color-accent)',
  },
  primaryHover: {
    backgroundColor: 'var(--color-surface-elevated)',
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-lg)',
  },
  secondary: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    border: '2px solid rgba(255, 255, 255, 0.8)',
  },
  secondaryHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#FFFFFF',
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'var(--color-accent)',
    border: '2px solid var(--color-accent)',
  },
  outlineHover: {
    backgroundColor: 'var(--color-accent)',
    color: '#FFFFFF',
  },
};

function AffiliateButton({ text, href, variant = 'primary' }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          base: styles.secondary,
          hover: styles.secondaryHover,
        };
      case 'outline':
        return {
          base: styles.outline,
          hover: styles.outlineHover,
        };
      default:
        return {
          base: styles.primary,
          hover: styles.primaryHover,
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <a
      href={href || '#'}
      style={{
        ...styles.base,
        ...variantStyles.base,
        ...(isHovered ? variantStyles.hover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </a>
  );
}

export default AffiliateButton;