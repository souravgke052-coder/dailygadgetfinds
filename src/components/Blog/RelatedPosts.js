import React from 'react';

const styles = {
  container: {
    margin: 'var(--spacing-12) 0',
  },
  title: {
    fontSize: 'var(--font-size-xl)',
    fontWeight: 'var(--font-weight-bold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-6)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'var(--spacing-6)',
  },
  card: {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--border-radius-xl)',
    overflow: 'hidden',
    transition: 'all var(--transition-normal)',
    textDecoration: 'none',
    display: 'block',
  },
  cardHover: {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-lg)',
    borderColor: 'var(--color-accent)',
  },
  imagePlaceholder: {
    width: '100%',
    height: '140px',
    backgroundColor: 'var(--color-surface-elevated)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-tertiary)',
  },
  content: {
    padding: 'var(--spacing-4)',
  },
  postTitle: {
    fontSize: 'var(--font-size-base)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-2)',
    lineHeight: 'var(--line-height-tight)',
  },
  excerpt: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
    lineHeight: 'var(--line-height-relaxed)',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
};

function RelatedPosts({ posts = [] }) {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  if (!posts.length) return null;

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Related Posts</h3>
      <div style={styles.grid}>
        {posts.slice(0, 3).map((post, index) => (
          <a
            key={post.slug || index}
            href={post.slug || '#'}
            style={{
              ...styles.card,
              ...(hoveredIndex === index ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={styles.imagePlaceholder}>
              [Post Image]
            </div>
            <div style={styles.content}>
              <h4 style={styles.postTitle}>{post.title}</h4>
              {post.excerpt && <p style={styles.excerpt}>{post.excerpt}</p>}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default RelatedPosts;