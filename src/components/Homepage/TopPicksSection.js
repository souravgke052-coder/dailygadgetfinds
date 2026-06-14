import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import ProductCard from '../Shared/ProductCard';

const topPicks = {
  featured: {
    title: 'Best Overall: 65W GaN Charger',
    description: 'Our top recommendation for most users. Delivers fast charging for phones, tablets, and laptops in a compact form factor.',
    href: '/blog/best-65w-gan-charger',
    badge: 'Best Overall',
    price: '₹1,499',
  },
  secondary: [
    {
      title: 'Best Budget Power Bank',
      description: 'Reliable 10000mAh capacity with 18W fast charging support.',
      href: '/blog/best-budget-power-bank',
      badge: 'Budget Pick',
      price: '₹799',
    },
    {
      title: 'Best ANC Earbuds',
      description: 'Premium sound quality with effective noise cancellation.',
      href: '/blog/best-anc-earbuds-under-5000',
      badge: 'Premium Pick',
      price: '₹4,999',
    },
  ],
};

const sectionStyle = {
  padding: 'var(--spacing-16) var(--spacing-6)',
  backgroundColor: 'var(--color-background-secondary)',
};

const containerStyle = {
  maxWidth: 'var(--max-width-content)',
  margin: '0 auto',
  padding: '0 var(--spacing-4)',
};

const featuredLayoutStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 'var(--spacing-6)',
};

const rightColumnStyle = {
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
  gap: 'var(--spacing-6)',
};

const featuredCardStyle = {
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--border-radius-xl)',
  overflow: 'hidden',
  transition: 'all var(--transition-normal)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
};

const articleStyle = {
  position: 'relative',
  padding: 'var(--spacing-10)',
  background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
  borderRadius: 'var(--border-radius-xl)',
  color: '#FFFFFF',
  minHeight: '280px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
};

const articleTitleStyle = {
  fontSize: 'var(--font-size-2xl)',
  fontWeight: 'var(--font-weight-bold)',
  color: '#FFFFFF',
  marginBottom: 'var(--spacing-3)',
};

const articleDescriptionStyle = {
  fontSize: 'var(--font-size-base)',
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: 'var(--spacing-4)',
  lineHeight: 'var(--line-height-relaxed)',
};

const articlePriceStyle = {
  fontSize: 'var(--font-size-3xl)',
  fontWeight: 'var(--font-weight-bold)',
  color: '#FFFFFF',
  marginBottom: 'var(--spacing-3)',
};

const articleLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--spacing-2)',
  color: '#FFFFFF',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 'var(--font-weight-semibold)',
  textDecoration: 'none',
};

const badgeStyle = {
  display: 'inline-block',
  padding: 'var(--spacing-1) var(--spacing-3)',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  color: '#FFFFFF',
  fontSize: 'var(--font-size-xs)',
  fontWeight: 'var(--font-weight-semibold)',
  borderRadius: 'var(--border-radius-full)',
  textTransform: 'uppercase',
  letterSpacing: '0.025em',
  marginBottom: 'var(--spacing-3)',
  width: 'fit-content',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
};

const techDecorationStyle = {
  position: 'absolute',
  top: 'var(--spacing-6)',
  right: 'var(--spacing-6)',
  fontSize: '80px',
  opacity: 0.2,
};

@media (max-width: 992px) {
  featuredLayoutStyle.gridTemplateColumns = '1fr';
  rightColumnStyle.gridTemplateRows = 'auto';
}

export default function TopPicksSection() {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <SectionHeader
          title="Top Picks This Month"
          subtitle="Our highest-recommendation products across categories"
        />
        <div style={featuredLayoutStyle}>
          <div style={featuredCardStyle}>
            <div style={articleStyle}
              onClick={() => window.location.href = topPicks.featured.href}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              <span style={techDecorationStyle}>⚡</span>
              <span style={badgeStyle}>{topPicks.featured.badge}</span>
              <h3 style={articleTitleStyle}>{topPicks.featured.title}</h3>
              <p style={articleDescriptionStyle}>{topPicks.featured.description}</p>
              <span style={articlePriceStyle}>{topPicks.featured.price}</span>
              <span style={articleLinkStyle}>
                View Details →
              </span>
            </div>
          </div>
          <div style={rightColumnStyle}>
            {topPicks.secondary.map((pick, index) => (
              <ProductCard
                key={index}
                title={pick.title}
                description={pick.description}
                href={pick.href}
                badge={pick.badge}
                price={pick.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}