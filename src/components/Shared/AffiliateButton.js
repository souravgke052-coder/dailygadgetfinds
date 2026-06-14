import React from 'react';
import Link from '@docusaurus/Link';

export default function AffiliateButton({ label, to, href, variant = 'primary', children }) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'var(--spacing-3) var(--spacing-6)',
    fontFamily: 'var(--font-family-base)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-semibold)',
    lineHeight: 1,
    borderRadius: 'var(--border-radius-lg)',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
    border: 'none',
    textDecoration: 'none',
    minWidth: '140px',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-accent)',
      color: '#FFFFFF',
    },
    secondary: {
      backgroundColor: 'var(--color-background-secondary)',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-border)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-accent)',
    },
  };

  const combinedStyle = { ...baseStyle, ...variants[variant] };

  const handleMouseEnter = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)';
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'var(--color-background-tertiary)';
      e.currentTarget.style.borderColor = 'var(--color-text-tertiary)';
    } else {
      e.currentTarget.style.backgroundColor = 'rgba(37, 99, 235, 0.1)';
    }
  };

  const handleMouseLeave = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--color-accent)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
      e.currentTarget.style.borderColor = 'var(--color-border)';
    } else {
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  if (href) {
    return (
      <a
        href={href}
        style={combinedStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children || label}
      </a>
    );
  }

  return (
    <Link
      to={to}
      style={combinedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children || label}
    </Link>
  );
}