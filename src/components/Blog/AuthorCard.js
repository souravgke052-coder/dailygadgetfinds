import React from 'react';

const styles = {
  card: {
    display: 'flex',
    gap: 'var(--spacing-6)',
    padding: 'var(--spacing-6)',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--border-radius-xl)',
    margin: 'var(--spacing-6) 0',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: 'var(--border-radius-full)',
    backgroundColor: 'var(--color-background-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: 'var(--color-text-tertiary)',
    fontSize: 'var(--font-size-lg)',
    fontWeight: 'var(--font-weight-semibold)',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 'var(--font-size-lg)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-1)',
  },
  role: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-accent)',
    marginBottom: 'var(--spacing-3)',
    fontWeight: 'var(--font-weight-medium)',
  },
  bio: {
    fontSize: 'var(--font-size-sm)',
    color: 'var(--color-text-secondary)',
    lineHeight: 'var(--line-height-relaxed)',
    margin: 0,
  },
};

function AuthorCard({ name, role, bio, avatarUrl }) {
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'D';

  return (
    <div style={styles.card}>
      <div style={styles.avatar}>
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} style={styles.avatarImage} />
        ) : (
          initials
        )}
      </div>
      <div style={styles.content}>
        <h4 style={styles.name}>{name || 'Daily Gadget Finds Team'}</h4>
        <p style={styles.role}>{role || 'Content Writer'}</p>
        <p style={styles.bio}>
          {bio ||
            'A passionate team dedicated to helping you find the best mobile accessories for your lifestyle.'}
        </p>
      </div>
    </div>
  );
}

export default AuthorCard;