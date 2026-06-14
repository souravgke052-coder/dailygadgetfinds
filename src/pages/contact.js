import React from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout
      title="Contact Us"
      description="Get in touch with the Daily Gadget Finds team.">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-900)' }}>
          Contact Us
        </h1>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>
          Have a question, suggestion, or partnership inquiry? We would love to hear from you.
        </p>
        <div style={{ backgroundColor: 'var(--ifm-color-emphasis-100)', borderRadius: '12px', padding: '2rem', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
            General Inquiries
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem' }}>
            For general questions, feedback, or content suggestions, reach out via email:
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#2563EB' }}>
            hello@dailygadgetfinds.com
          </p>
        </div>
        <div style={{ backgroundColor: 'var(--ifm-color-emphasis-100)', borderRadius: '12px', padding: '2rem', marginTop: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
            Partnerships & Affiliates
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem' }}>
            Interested in featuring your product or exploring an affiliate partnership? Contact us at:
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#2563EB' }}>
            partners@dailygadgetfinds.com
          </p>
        </div>
        <div style={{ backgroundColor: 'var(--ifm-color-emphasis-100)', borderRadius: '12px', padding: '2rem', marginTop: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--ifm-color-emphasis-900)' }}>
            Response Time
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--ifm-color-emphasis-700)' }}>
            We typically respond to all inquiries within 2-3 business days.
          </p>
        </div>
      </div>
    </Layout>
  );
}
