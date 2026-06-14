import React from 'react';

const styles = {
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--spacing-2)',
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-tertiary)',
  },
  icon: {
    width: '16px',
    height: '16px',
    flexShrink: 0,
  },
};

function EstimatedReadingTime({ content, minutes }) {
  const calculateReadTime = (text) => {
    if (!text) return 1;
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const readTime = minutes || calculateReadTime(content);

  return (
    <span style={styles.container}>
      <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      {readTime} min read
    </span>
  );
}

export default EstimatedReadingTime;