import React from 'react';
import Layout from '@theme/Layout';

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Daily Gadget Finds privacy policy.">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          At Daily Gadget Finds, we take your privacy seriously. This policy outlines what information we collect, how we use it, and your rights regarding that information.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Information We Collect
        </h2>
        <ul style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', paddingLeft: '1.5rem' }}>
          <li><strong>Analytics data:</strong> We use analytics tools to understand how visitors interact with our site. This includes page views, time on site, and general traffic patterns. This data is anonymized.</li>
          <li><strong>Newsletter subscriptions:</strong> If you choose to subscribe to our newsletter, we collect your email address solely for the purpose of sending updates.</li>
          <li><strong>Affiliate links:</strong> When you click on affiliate links, third-party retailers may track your visit using cookies or similar technologies, subject to their own privacy policies.</li>
        </ul>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          How We Use Information
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          We use collected data to improve our content, understand which topics our readers find most useful, and optimize the site experience. We do not sell personal data to third parties.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Cookies
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          This website uses cookies for basic functionality (such as theme preferences) and analytics. You can disable cookies in your browser settings, though this may affect site functionality.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Changes to This Policy
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          We may update this privacy policy periodically. Changes will be posted on this page with an updated effective date.
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Contact Us
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          For privacy-related questions, contact us at <strong>hello@dailygadgetfinds.com</strong>.
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--ifm-color-emphasis-600)', marginTop: '3rem' }}>
          Last updated: June 2024
        </p>
      </div>
    </Layout>
  );
}
