import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import NewsletterSignup from '../Shared/NewsletterSignup';

export default function NewsletterSection() {
  const { colorMode } = useColorMode();

  const sectionStyle = {
    background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
    padding: 'var(--spacing-20) var(--spacing-6)',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '700px',
    margin: '0 auto',
  };

  const titleStyle = {
    fontSize: 'var(--font-size-4xl)',
    fontWeight: 'var(--font-weight-bold)',
    color: '#FFFFFF',
    marginBottom: 'var(--spacing-4)',
  };

  const descriptionStyle = {
    fontSize: 'var(--font-size-lg)',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 'var(--spacing-10)',
    lineHeight: 'var(--line-height-relaxed)',
  };

  const disclaimerStyle = {
    fontSize: 'var(--font-size-xs)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 'var(--spacing-6)',
    maxWidth: '480px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 'var(--line-height-relaxed)',
  };

  const benefitsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: 'var(--spacing-8)',
    marginBottom: 'var(--spacing-10)',
    flexWrap: 'wrap',
  };

  const benefitStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-2)',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-medium)',
  };

  const checkIconStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    color: '#FFFFFF',
  };

  return (
    <section id="newsletter" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Stay Updated</h2>
        <p style={descriptionStyle}>
          Get the latest reviews and deals delivered to your inbox.
        </p>
        <div style={benefitsStyle}>
          <div style={benefitStyle}>
            <span style={checkIconStyle}>✓</span>
            Weekly reviews
          </div>
          <div style={benefitStyle}>
            <span style={checkIconStyle}>✓</span>
            Exclusive deals
          </div>
          <div style={benefitStyle}>
            <span style={checkIconStyle}>✓</span>
            No spam, ever
          </div>
        </div>
        <NewsletterSignup />
        <p style={disclaimerStyle}>
          We respect your privacy. Unsubscribe at any time. This newsletter may contain affiliate links.
        </p>
      </div>
    </section>
  );
}