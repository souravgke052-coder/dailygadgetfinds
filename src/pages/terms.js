import React from 'react';
import Layout from '@theme/Layout';

export default function Terms() {
  return (
    <Layout
      title="Terms of Service"
      description="Daily Gadget Finds terms of service.">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          Welcome to Daily Gadget Finds. By accessing and using this website, you accept and agree to be bound by the following terms and conditions.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Use of Content
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          All content on this site, including articles, guides, and recommendations, is provided for informational purposes only. We make every effort to ensure accuracy, but product specifications and availability may change. Always verify details with the manufacturer or retailer before purchasing.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Affiliate Links
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          This site contains affiliate links. When you click on these links and make a purchase, we may earn a commission at no additional cost to you. Our recommendations are independent and based on research, not commission rates.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Intellectual Property
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          All content, trademarks, and logos on this site are the property of Daily Gadget Finds unless otherwise stated. You may not reproduce, distribute, or create derivative works without our written permission.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Limitation of Liability
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          Daily Gadget Finds is not responsible for any damages arising from the use of information on this site or from products purchased through affiliate links. Product safety and suitability are the responsibility of the manufacturer and the purchaser.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Changes to Terms
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          We may update these terms at any time. Continued use of the site after changes constitutes acceptance of the revised terms.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginTop: '3rem' }}>
          Last updated: June 2024
        </p>
      </div>
    </Layout>
  );
}
