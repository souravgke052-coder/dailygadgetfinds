import React from 'react';

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    width: '100%',
    padding: 'var(--spacing-3) var(--spacing-4)',
    paddingLeft: 'var(--spacing-10)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--border-radius-lg)',
    fontSize: 'var(--font-size-sm)',
    backgroundColor: 'var(--color-background-secondary)',
    color: 'var(--color-text-primary)',
    transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
  },
  icon: {
    position: 'absolute',
    left: 'var(--spacing-3)',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--color-text-tertiary)',
    pointerEvents: 'none',
  },
};

function SearchBar() {
  return (
    <div style={styles.container}>
      <span style={styles.icon}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </span>
      <input
        type="search"
        placeholder="Search articles..."
        style={styles.input}
        aria-label="Search articles"
      />
    </div>
  );
}

export default SearchBar;