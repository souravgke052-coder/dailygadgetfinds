import React from 'react';
import Layout from '@theme/Layout';

export default function AffiliateDisclosure() {
  return (
    <Layout
      title="Affiliate Disclosure"
      description="Daily Gadget Finds affiliate disclosure statement.">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Affiliate Disclosure
        </h1>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          Daily Gadget Finds participates in affiliate marketing programs. This means that some of the links on our website are affiliate links, and we may earn a commission if you make a purchase through these links.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          What This Means for You
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          When you click on an affiliate link and make a purchase, the price you pay remains the same. The commission we earn comes from the retailer, not from you. There is no additional cost to you for using our affiliate links.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Our Commitment to Transparency
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          We only recommend products we believe provide genuine value to our readers. Affiliate partnerships do not influence our editorial content, reviews, or recommendations. Our goal is to help you make informed purchasing decisions based on your specific needs.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Affiliate Partners
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          We currently participate in affiliate programs with major retailers including Amazon Associates and direct brand affiliate programs. As we expand, we may add additional partners. All affiliate relationships will be disclosed here.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          FTC Compliance
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          This disclosure is provided in accordance with the Federal Trade Commission (FTC) guidelines concerning the use of endorsements and testimonials in advertising.
        </p>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          If you have any questions about our affiliate relationships, please contact us at <strong>hello@dailygadgetfinds.com</strong>.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginTop: '3rem' }}>
          Last updated: June 2024
        </p>
      </div>
    </Layout>
  );
}
