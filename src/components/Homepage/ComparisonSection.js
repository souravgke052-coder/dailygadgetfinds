import React from 'react';
import Link from '@docusaurus/Link';
import SectionHeader from '../Shared/SectionHeader';

const comparisons = [
  {
    title: '20W vs 30W vs 65W Chargers',
    description: 'Compare charging speeds, efficiency, and value across power tiers.',
    href: '/blog/top-fast-chargers',
    items: ['20W - Phone Only', '30W - Phone + Tablet', '65W - Laptop Ready'],
  },
  {
    title: '10000mAh vs 20000mAh Power Banks',
    description: 'Which capacity truly fits your lifestyle and travel needs?',
    href: '/blog/best-power-banks-under-1500',
    items: ['10000mAh - 1-2 Charges', '20000mAh - 3-4 Charges', 'Size & Weight Trade-off'],
  },
  {
    title: 'Wired vs Wireless Earbuds',
    description: 'Audio quality, latency, convenience, and battery life compared.',
    href: '/blog/best-earbuds-for-daily-use',
    items: ['Wired - Zero Latency', 'Wireless - Maximum Freedom', 'Hybrid Options Available'],
  },
];

const sectionStyle = {
  padding: 'var(--spacing-16) var(--spacing-6)',
  maxWidth: 'var(--max-width-content)',
  margin: '0 auto',
};

const containerStyle = {
  padding: '0 var(--spacing-4)',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: 'var(--spacing-6)',
};

const cardStyle = {
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--border-radius-xl)',
  padding: 'var(--spacing-8)',
  transition: 'all var(--transition-normal)',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const iconStyle = {
  width: '56px',
  height: '56px',
  backgroundColor: 'rgba(37, 99, 235, 0.1)',
  borderRadius: 'var(--border-radius-lg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  marginBottom: 'var(--spacing-5)',
  color: 'var(--color-accent)',
};

const titleStyle = {
  fontSize: 'var(--font-size-xl)',
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--color-text-primary)',
  marginBottom: 'var(--spacing-3)',
};

const descriptionStyle = {
  fontSize: 'var(--font-size-sm)',
  color: 'var(--color-text-secondary)',
  marginBottom: 'var(--spacing-5)',
  lineHeight: 'var(--line-height-relaxed)',
  flex: 1,
};

const itemsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-2)',
  marginBottom: 'var(--spacing-5)',
};

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--spacing-2)',
  fontSize: 'var(--font-size-sm)',
  color: 'var(--color-text-secondary)',
};

const bulletStyle = {
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: 'var(--color-accent)',
  flexShrink: 0,
};

const linkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--spacing-2)',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--color-accent)',
  textDecoration: 'none',
  marginTop: 'auto',
};

export default function ComparisonSection() {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <SectionHeader
          title="Quick Comparisons"
          subtitle="See how popular options stack up"
        />
        <div style={gridStyle}>
          {comparisons.map((comparison, index) => (
            <Link
              to={comparison.href}
              key={index}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}>
                <div style={iconStyle}>⚖️</div>
                <h3 style={titleStyle}>{comparison.title}</h3>
                <p style={descriptionStyle}>{comparison.description}</p>
                <div style={itemsContainerStyle}>
                  {comparison.items.map((item, i) => (
                    <div key={i} style={itemStyle}>
                      <span style={bulletStyle} />
                      {item}
                    </div>
                  ))}
                </div>
                <span style={linkStyle}>
                  View Comparison →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}