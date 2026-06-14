import React from 'react';
import ReadingProgressBar from './ReadingProgressBar';
import AffiliateDisclosure from '../Affiliate/AffiliateDisclosure';
import AuthorCard from './AuthorCard';
import ShareButtons from './ShareButtons';
import RelatedPosts from './RelatedPosts';

const styles = {
  container: {
    maxWidth: 'var(--max-width-prose)',
    margin: '0 auto',
    padding: 'var(--spacing-6)',
  },
  article: {
    marginBottom: 'var(--spacing-12)',
  },
  header: {
    marginBottom: 'var(--spacing-8)',
  },
  guideBadge: {
    display: 'inline-block',
    padding: 'var(--spacing-1) var(--spacing-3)',
    backgroundColor: 'rgba(37, 99, 235, 0.1)',
    color: 'var(--color-accent)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 'var(--font-weight-semibold)',
    borderRadius: 'var(--border-radius-sm)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: 'var(--spacing-4)',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-4)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-tertiary)',
    marginBottom: 'var(--spacing-4)',
    flexWrap: 'wrap',
  },
  content: {
    lineHeight: 'var(--line-height-relaxed)',
  },
  section: {
    marginTop: 'var(--spacing-8)',
  },
  divider: {
    borderTop: '1px solid var(--color-border)',
    margin: 'var(--spacing-8) 0',
  },
  tipBox: {
    backgroundColor: 'var(--color-surface-elevated)',
    border: '1px solid var(--color-border)',
    borderLeft: '4px solid var(--color-accent)',
    borderRadius: 'var(--border-radius-lg)',
    padding: 'var(--spacing-6)',
    margin: 'var(--spacing-6) 0',
  },
  tipTitle: {
    fontSize: 'var(--font-size-base)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-2)',
  },
  tipContent: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
    margin: 0,
    lineHeight: 'var(--line-height-relaxed)',
  },
};

function BuyingGuideLayout({ children, frontMatter, relatedPosts = [] }) {
  return (
    <>
      <ReadingProgressBar />
      <article style={styles.container}>
        <header style={styles.header}>
          <span style={styles.guideBadge}>Buying Guide</span>
          {frontMatter?.date && (
            <div style={styles.meta}>
              <time>{frontMatter.date}</time>
            </div>
          )}
        </header>

        <AffiliateDisclosure />

        <div style={styles.content}>{children}</div>

        <div style={styles.section}>
          <div style={styles.divider} />
          <AffiliateDisclosure />
        </div>

        <AuthorCard
          name={frontMatter?.author?.name}
          role={frontMatter?.author?.role}
          bio={frontMatter?.author?.bio}
          avatarUrl={frontMatter?.author?.image_url}
        />

        <ShareButtons
          url={typeof window !== 'undefined' ? window.location.href : ''}
          title={frontMatter?.title}
        />

        <RelatedPosts posts={relatedPosts} />
      </article>
    </>
  );
}

export default BuyingGuideLayout;