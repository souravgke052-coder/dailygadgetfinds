import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HeroSection from '@site/src/components/Homepage/HeroSection';
import TrendingSection from '@site/src/components/Homepage/TrendingSection';
import TopPicksSection from '@site/src/components/Homepage/TopPicksSection';
import ComparisonSection from '@site/src/components/Homepage/ComparisonSection';
import BudgetFindsSection from '@site/src/components/Homepage/BudgetFindsSection';
import NewArrivalsSection from '@site/src/components/Homepage/NewArrivalsSection';
import NewsletterSection from '@site/src/components/Homepage/NewsletterSection';

export default function Home() {
  return (
    <Layout
      title="Smarter Mobile Accessories. Better Daily Experience."
      description="Discover tested mobile accessories, practical buying guides, comparisons, and smart recommendations for everyday smartphone users."
    >
      <Head>
        <meta property="og:title" content="Daily Gadget Finds - Mobile Accessory Reviews & Guides" />
        <meta property="og:description" content="Discover tested mobile accessories, practical buying guides, comparisons, and smart recommendations." />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <HeroSection />
        <TrendingSection />
        <TopPicksSection />
        <ComparisonSection />
        <BudgetFindsSection />
        <NewArrivalsSection />
        <NewsletterSection />
      </main>
    </Layout>
  );
}