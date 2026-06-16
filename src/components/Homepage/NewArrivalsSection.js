import React from 'react';
import Link from '@docusaurus/Link';
import SectionHeader from '../Shared/SectionHeader';

const articles = [
  {
    title: 'Best Power Banks Under ₹1500',
    excerpt: 'Comprehensive guide to finding the perfect power bank for your needs and budget.',
    date: 'June 10, 2026',
    href: '/blog/best-power-banks-under-1500',
    tag: 'Buying Guide',
  },
  {
    title: 'Top Fast Chargers Compared',
    excerpt: 'We tested the most popular fast chargers to find which one delivers the best value.',
    date: 'June 8, 2026',
    href: '/blog/top-fast-chargers',
    tag: 'Comparisons',
  },
  {
    title: 'Desk Setup Under Budget',
    excerpt: 'Create an efficient workspace with these affordable accessories.',
    date: 'June 5, 2026',
    href: '/blog/desk-setup-under-budget',
    tag: 'Setup Guide',
  },
  {
    title: 'Must-Have Travel Accessories',
    excerpt: 'Essential accessories for frequent travelers to stay powered and connected.',
    date: 'June 2, 2026',
    href: '/blog/travel-accessories',
    tag: 'Travel',
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
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 'var(--spacing-6)',
};

const cardStyle = {
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--border-radius-xl)',
  padding: 'var(--spacing-6)',
  transition: 'all var(--transition-normal)',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  textDecoration: 'none',
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 'var(--spacing-4)',
  flexWrap: 'wrap',
  gap: 'var(--spacing-2)',
};

const tagStyle = {
  display: 'inline-block',
  padding: 'var(--spacing-1) var(--spacing-3)',
  backgroundColor: 'rgba(37, 99, 235, 0.1)',
  color: 'var(--color-accent)',
  fontSize: 'var(--font-size-xs)',
  fontWeight: 'var(--font-weight-semibold)',
  borderRadius: 'var(--border-radius-full)',
  textTransform: 'uppercase',
  letterSpacing: '0.025em',
};

const dateStyle = {
  fontSize: 'var(--font-size-xs)',
  color: 'var(--color-text-tertiary)',
};

const titleStyle = {
  fontSize: 'var(--font-size-xl)',
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--color-text-primary)',
  marginBottom: 'var(--spacing-3)',
  lineHeight: 'var(--line-height-tight)',
};

const excerptStyle = {
  fontSize: 'var(--font-size-sm)',
  color: 'var(--color-text-secondary)',
  marginBottom: 'var(--spacing-4)',
  flex: 1,
  lineHeight: 'var(--line-height-relaxed)',
};

const linkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--spacing-2)',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--color-accent)',
  textDecoration: 'none',
};

const iconStyle = {
  fontSize: '16px',
  transition: 'transform var(--transition-fast)',
};

export default function NewArrivalsSection() {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <SectionHeader
          title="New Arrivals & Updates"
          subtitle="Latest reviews and product updates"
        />
        <div style={gridStyle}>
          {articles.map((article, index) => (
            <Link
              to={article.href}
              key={index}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  const iconEl = e.currentTarget.querySelector('.arrow-icon');
                  if (iconEl) iconEl.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  const iconEl = e.currentTarget.querySelector('.arrow-icon');
                  if (iconEl) iconEl.style.transform = 'translateX(0)';
                }}>
                <div style={headerStyle}>
                  <span style={tagStyle}>{article.tag}</span>
                  <span style={dateStyle}>{article.date}</span>
                </div>
                <h3 style={titleStyle}>{article.title}</h3>
                <p style={excerptStyle}>{article.excerpt}</p>
                <span style={linkStyle}>
                  Read More <span className="arrow-icon" style={iconStyle}>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}