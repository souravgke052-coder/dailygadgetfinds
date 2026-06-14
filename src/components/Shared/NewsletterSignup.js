import React from 'react';

const styles = {
  container: {
    backgroundColor: 'var(--color-background-secondary)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--border-radius-2xl)',
    padding: 'var(--spacing-12)',
    textAlign: 'center',
    margin: 'var(--spacing-12) 0',
  },
  title: {
    fontSize: 'var(--font-size-2xl)',
    fontWeight: 'var(--font-weight-bold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-3)',
  },
  description: {
    fontSize: 'var(--font-size-base)',
    color: 'var(--color-text-secondary)',
    maxWidth: '480px',
    margin: '0 auto var(--spacing-6)',
    lineHeight: 'var(--line-height-relaxed)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--spacing-4)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    width: '100%',
    padding: 'var(--spacing-4)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--border-radius-lg)',
    fontSize: 'var(--font-size-base)',
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text-primary)',
    transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
  },
  button: {
    width: '100%',
    padding: 'var(--spacing-4)',
    backgroundColor: 'var(--color-accent)',
    color: '#FFFFFF',
    fontWeight: 'var(--font-weight-semibold)',
    fontSize: 'var(--font-size-base)',
    border: 'none',
    borderRadius: 'var(--border-radius-lg)',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
  },
};

function NewsletterSignup() {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Subscribe to Our Newsletter</h2>
      <p style={styles.description}>
        Get the latest gadget reviews, buying guides, and deals delivered straight to your inbox.
      </p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
          aria-label="Email address"
        />
        <button type="submit" style={styles.button}>
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsletterSignup;