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
};

function ProductReviewLayout({ children, frontMatter, relatedPosts = [] }) {
  return (
    <>
      <ReadingProgressBar />
      <article style={styles.container}>
        <header style={styles.header}>
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

export default ProductReviewLayout;