import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import SectionHeader from '../Shared/SectionHeader';
import ProductCard from '../Shared/ProductCard';

const budgetProducts = [
  {
    title: 'Braided USB-C Cable',
    description: 'Durable, tangle-free charging cable with fast data transfer',
    href: '/blog/best-budget-usb-cable',
    badge: 'Under ₹299',
    price: '₹299',
  },
  {
    title: 'Portable Phone Stand',
    description: 'Adjustable angle stand for desk setup and video calls',
    href: '/blog/best-budget-phone-stand',
    badge: 'Under ₹499',
    price: '₹449',
  },
  {
    title: 'Car Charger 18W',
    description: 'Dual port car charger with fast charging support',
    href: '/blog/best-car-charger-under-500',
    badge: 'Under ₹599',
    price: '₹549',
  },
  {
    title: 'Slim Phone Case',
    description: 'Minimalist protection with grip and wireless charging support',
    href: '/blog/best-slim-phone-case-budget',
    badge: 'Under ₹399',
    price: '₹349',
  },
];

export default function BudgetFindsSection() {
  const { colorMode } = useColorMode();

  const sectionStyle = {
    padding: 'var(--spacing-16) var(--spacing-6)',
    backgroundColor: colorMode === 'dark' ? 'var(--color-background-tertiary)' : '#F3F4F6',
  };

  const containerStyle = {
    maxWidth: 'var(--max-width-content)',
    margin: '0 auto',
    padding: '0 var(--spacing-4)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 'var(--spacing-6)',
  };

  const badgeStripStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-3)',
    marginBottom: 'var(--spacing-6)',
  };

  const priceTagStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: 'var(--spacing-2) var(--spacing-4)',
    backgroundColor: 'var(--color-accent)',
    color: '#FFFFFF',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-bold)',
    borderRadius: 'var(--border-radius-full)',
  };

  const lineStyle = {
    flex: 1,
    height: '1px',
    backgroundColor: 'var(--color-border)',
    maxWidth: '100px',
  };

  const labelStyle = {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <SectionHeader
          title="Best Under ₹999"
          subtitle="Great accessories that won't break the bank"
        />
        <div style={badgeStripStyle}>
          <span style={lineStyle} />
          <span style={labelStyle}>Budget Friendly</span>
          <span style={lineStyle} />
        </div>
        <div style={gridStyle}>
          {budgetProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              href={product.href}
              badge={product.badge}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}