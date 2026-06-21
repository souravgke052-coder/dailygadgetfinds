import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import AffiliateButton from '../Shared/AffiliateButton';

export default function HeroSection() {
  const { colorMode } = useColorMode();

  const sectionStyle = {
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    minHeight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const gradientStyle = colorMode === 'dark'
    ? 'linear-gradient(135deg, #1F2937 0%, #111827 50%, #1F2937 100%)'
    : 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 50%, #1E40AF 100%)';

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: gradientStyle,
    zIndex: 0,
  };

  const patternStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    zIndex: 1,
    opacity: 0.5,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 var(--spacing-4)',
  };

  const headlineStyle = {
    fontSize: 'var(--font-size-5xl)',
    fontWeight: 'var(--font-weight-bold)',
    color: '#FFFFFF',
    marginBottom: 'var(--spacing-6)',
    lineHeight: 'var(--line-height-tight)',
  };

  const subheadlineStyle = {
    fontSize: 'var(--font-size-xl)',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 'var(--spacing-10)',
    lineHeight: 'var(--line-height-relaxed)',
    maxWidth: '600px',
    margin: '0 auto var(--spacing-10)',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    gap: 'var(--spacing-4)',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const primaryBtnStyle = {
    display: 'inline-block',
    padding: 'var(--spacing-4) var(--spacing-8)',
    backgroundColor: '#FFFFFF',
    color: 'var(--color-accent)',
    fontWeight: 'var(--font-weight-semibold)',
    fontSize: 'var(--font-size-base)',
    borderRadius: 'var(--border-radius-lg)',
    textDecoration: 'none',
    transition: 'all var(--transition-fast)',
    boxShadow: 'var(--shadow-lg)',
  };

  const secondaryBtnStyle = {
    display: 'inline-block',
    padding: 'var(--spacing-4) var(--spacing-8)',
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontWeight: 'var(--font-weight-semibold)',
    fontSize: 'var(--font-size-base)',
    borderRadius: 'var(--border-radius-lg)',
    textDecoration: 'none',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    transition: 'all var(--transition-fast)',
  };

  const visualElementStyle = {
    marginTop: 'var(--spacing-12)',
    display: 'flex',
    justifyContent: 'center',
    gap: 'var(--spacing-6)',
    flexWrap: 'wrap',
  };

  const iconCardStyle = {
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 'var(--border-radius-xl)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  };

  const badgesStyle = {
    display: 'flex',
    gap: 'var(--spacing-3)',
    justifyContent: 'center',
    marginTop: 'var(--spacing-6)',
    flexWrap: 'wrap',
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--spacing-2)',
    padding: 'var(--spacing-2) var(--spacing-4)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 'var(--border-radius-full)',
    fontSize: 'var(--font-size-sm)',
    color: '#FFFFFF',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  };

  return (
    <section className="hero-section" style={sectionStyle}>
      <div style={backgroundStyle} />
      <div style={patternStyle} />
      <div style={contentStyle}>
        <h1 style={headlineStyle}>
          Smarter Mobile Accessories.<br />Better Daily Experience.
        </h1>
        <p style={subheadlineStyle}>
          Discover tested accessories, practical buying guides, comparisons, and smart recommendations.
        </p>
        <div style={buttonsContainerStyle}>
          <Link
            to="/blog"
            style={primaryBtnStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}>
            Explore Reviews
          </Link>
          <Link
            to="/blog/tags/budget"
            style={secondaryBtnStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FFFFFF';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}>
            Best Deals
          </Link>
        </div>
        <div style={badgesStyle}>
          <span style={badgeStyle}>✓ Unbiased Reviews</span>
          <span style={badgeStyle}>✓ Real Testing</span>
          <span style={badgeStyle}>✓ Best Prices</span>
        </div>
        <div style={visualElementStyle}>
          <div style={iconCardStyle}>🔌</div>
          <div style={iconCardStyle}>🎧</div>
          <div style={iconCardStyle}>🔋</div>
          <div style={iconCardStyle}>📱</div>
        </div>
      </div>
    </section>
  );
}