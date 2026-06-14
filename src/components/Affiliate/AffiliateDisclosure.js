import React from 'react';

const styles = {
  container: {
    fontSize: 'var(--font-size-sm)',
    fontStyle: 'italic',
    color: 'var(--color-text-tertiary)',
    padding: 'var(--spacing-4)',
    backgroundColor: 'var(--color-surface-elevated)',
    borderRadius: 'var(--border-radius-md)',
    borderLeft: '3px solid var(--color-border)',
    margin: 'var(--spacing-4) 0',
    lineHeight: 'var(--line-height-relaxed)',
  },
};

function AffiliateDisclosure() {
  return (
    <p style={styles.container}>
      This page may contain affiliate links. We may earn a commission when you purchase through our links at no extra cost to you.
    </p>
  );
}

export default AffiliateDisclosure;