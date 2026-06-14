import React from 'react';

const styles = {
  container: {
    position: 'sticky',
    top: 'calc(var(--navbar-height) + var(--spacing-6))',
    borderLeft: '2px solid var(--color-border)',
    paddingLeft: 'var(--spacing-4)',
    fontSize: 'var(--font-size-sm)',
    maxHeight: 'calc(100vh - var(--navbar-height) - var(--spacing-12))',
    overflowY: 'auto',
  },
  title: {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-3)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    display: 'block',
    padding: 'var(--spacing-1) 0',
    color: 'var(--color-text-secondary)',
    textDecoration: 'none',
    transition: 'color var(--transition-fast)',
    lineHeight: 'var(--line-height-relaxed)',
  },
  linkActive: {
    color: 'var(--color-accent)',
    fontWeight: 'var(--font-weight-medium)',
  },
  h3Link: {
    paddingLeft: 'var(--spacing-3)',
  },
};

function StickyTOC({ headings = [] }) {
  const [activeId, setActiveId] = React.useState('');

  React.useEffect(() => {
    if (typeof window === 'undefined' || !headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      if (heading.id) {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav style={styles.container} aria-label="Table of contents">
      <div style={styles.title}>On This Page</div>
      <ul style={styles.list}>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              style={{
                ...styles.link,
                ...(heading.depth === 3 ? styles.h3Link : {}),
                ...(activeId === heading.id ? styles.linkActive : {}),
              }}
            >
              {heading.value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default StickyTOC;