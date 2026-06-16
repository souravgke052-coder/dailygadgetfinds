import React from 'react';
import SectionHeader from '../Shared/SectionHeader';
import ProductCard from '../Shared/ProductCard';

const trendingProducts = [
  {
    title: '65W GaN Chargers',
    description: 'Compact, efficient charging for laptops and phones',
    href: '/blog/65w-gan-charger-guide',
    badge: 'Hot',
  },
  {
    title: '20000mAh Power Banks',
    description: 'High capacity portable power for travel and daily use',
    href: '/blog/20000mah-power-bank-comparison',
    badge: 'Popular',
  },
  {
    title: 'ANC Earbuds',
    description: 'Active noise cancellation for immersive audio experience',
    href: '/blog/best-anc-earbuds',
    badge: 'Trending',
  },
  {
    title: 'MagSafe Stands',
    description: 'Stable magnetic stands for iPhone and accessories',
    href: '/blog/magsafe-stand-recommendations',
    badge: 'New',
  },
];

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 'var(--spacing-6)',
};

const sectionStyle = {
  padding: 'var(--spacing-16) var(--spacing-6)',
  maxWidth: 'var(--max-width-content)',
  margin: '0 auto',
};

const containerStyle = {
  padding: '0 var(--spacing-4)',
};

export default function TrendingSection() {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <SectionHeader
          title="Trending Accessories"
          subtitle="What readers are checking out this week"
        />
        <div style={gridStyle}>
          {trendingProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              href={product.href}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}