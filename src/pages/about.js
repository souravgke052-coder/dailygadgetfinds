import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout
      title="About Us"
      description="Learn about Daily Gadget Finds — your trusted source for mobile accessory reviews and buying guides.">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-900)' }}>
          About Daily Gadget Finds
        </h1>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          Daily Gadget Finds is a dedicated resource for everyday smartphone users who want practical, tested recommendations for mobile accessories. We focus on what actually matters — build quality, real-world performance, and value for money.
        </p>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          Our guides cover chargers, power banks, earbuds, phone cases, cables, and everything that makes daily smartphone use better. Every recommendation is researched against actual product specifications and user priorities, not marketing claims.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          What We Do
        </h2>
        <ul style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', paddingLeft: '1.5rem' }}>
          <li>Research and compare mobile accessories across price ranges</li>
          <li>Write buying guides for students, office workers, and budget buyers</li>
          <li>Explain technical specs in plain language</li>
          <li>Keep recommendations current with market trends</li>
        </ul>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Our Approach
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          We do not publish fake reviews, fake ratings, or fake prices. Our content is built around product specifications, brand reputation, and what everyday users actually need. When we recommend something, we explain why — so you can decide if it fits your specific situation.
        </p>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          This site contains affiliate links. We may earn a commission when you purchase through our links at no extra cost to you. This does not influence our recommendations.
        </p>
      </div>
    </Layout>
  );
}
