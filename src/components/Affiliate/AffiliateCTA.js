import React from 'react';
import AffiliateButton from './AffiliateButton';

const styles = {
  container: {
    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
    borderRadius: 'var(--border-radius-xl)',
    padding: 'var(--spacing-8)',
    color: '#FFFFFF',
    textAlign: 'center',
    margin: 'var(--spacing-8) 0',
  },
  title: {
    fontSize: 'var(--font-size-2xl)',
    fontWeight: 'var(--font-weight-bold)',
    marginBottom: 'var(--spacing-3)',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 'var(--font-size-base)',
    opacity: 0.9,
    marginBottom: 'var(--spacing-6)',
    color: '#FFFFFF',
    lineHeight: 'var(--line-height-relaxed)',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: 'var(--spacing-3)',
    flexWrap: 'wrap',
  },
  disclaimer: {
    fontSize: 'var(--font-size-xs)',
    opacity: 0.7,
    marginTop: 'var(--spacing-4)',
    color: '#FFFFFF',
  },
};

function AffiliateCTA({ title, description, buttons }) {
  const defaultButtons = [
    { text: 'View Deal', link: '#' },
    { text: 'Check Price', link: '#' },
    { text: 'Buy Now', link: '#' },
  ];

  const displayButtons = buttons && buttons.length > 0 ? buttons : defaultButtons;

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{title || 'Check Out This Product'}</h3>
      {description && <p style={styles.description}>{description}</p>}
      <div style={styles.buttonsContainer}>
        {displayButtons.map((button, index) => (
          <AffiliateButton
            key={index}
            text={button.text}
            href={button.link}
            variant={index === 0 ? 'primary' : 'secondary'}
          />
        ))}
      </div>
      <p style={styles.disclaimer}>
        We may earn a commission when you purchase through our links at no extra cost to you.
      </p>
    </div>
  );
}

export default AffiliateCTA;