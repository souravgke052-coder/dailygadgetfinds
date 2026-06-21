import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import ReadingProgressBar from '@site/src/components/Blog/ReadingProgressBar';
import AffiliateDisclosure from '@site/src/components/Affiliate/AffiliateDisclosure';
import AuthorCard from '@site/src/components/Blog/AuthorCard';
import ShareButtons from '@site/src/components/Blog/ShareButtons';
import RelatedPosts from '@site/src/components/Blog/RelatedPosts';

const wrapperStyle = {
  maxWidth: 'var(--max-width-prose)',
  margin: '0 auto',
  padding: '0 1.5rem',
};

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage, frontMatter, metadata } = useBlogPost();

  return (
    <>
      {isBlogPostPage && <ReadingProgressBar />}
      <BlogPostItem {...props} />
      {isBlogPostPage && (
        <div style={wrapperStyle}>
          <div style={{ marginTop: '2rem' }}>
            <AffiliateDisclosure />
          </div>
          <AuthorCard
            name={frontMatter?.authors?.[0]?.name || 'Daily Gadget Finds Team'}
            role="Content Writer"
            bio="A passionate team dedicated to helping you find the best mobile accessories."
            avatarUrl={frontMatter?.authors?.[0]?.image_url}
          />
          <ShareButtons
            url={typeof window !== 'undefined' ? window.location.href : metadata?.permalink || ''}
            title={frontMatter?.title || metadata?.title}
          />
          <RelatedPosts />
        </div>
      )}
    </>
  );
}
