import React from 'react';

const baseStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '14px 28px',
  fontFamily: 'var(--font-family-base)',
  fontSize: '1rem',
  fontWeight: 600,
  lineHeight: 1,
  borderRadius: '12px',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'all 150ms ease',
  minHeight: '48px',
  minWidth: '140px',
  border: '2px solid transparent',
  boxSizing: 'border-box',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
};

const variants = {
  primary: {
    light: {
      backgroundColor: '#2563EB',
      color: '#FFFFFF',
      borderColor: '#2563EB',
    },
    dark: {
      backgroundColor: '#3B82F6',
      color: '#FFFFFF',
      borderColor: '#3B82F6',
    },
  },
  secondary: {
    light: {
      backgroundColor: 'transparent',
      color: '#2563EB',
      borderColor: '#2563EB',
    },
    dark: {
      backgroundColor: 'transparent',
      color: '#60A5FA',
      borderColor: '#60A5FA',
    },
  },
  neutral: {
    light: {
      backgroundColor: '#F3F4F6',
      color: '#111827',
      borderColor: '#F3F4F6',
    },
    dark: {
      backgroundColor: '#374151',
      color: '#F9FAFB',
      borderColor: '#374151',
    },
  },
};

const hoverStyles = {
  primary: {
    light: { backgroundColor: '#1D4ED8', borderColor: '#1D4ED8', transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(37,99,235,0.3)' },
    dark: { backgroundColor: '#2563EB', borderColor: '#2563EB', transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(59,130,246,0.3)' },
  },
  secondary: {
    light: { backgroundColor: 'rgba(37,99,235,0.08)', borderColor: '#1D4ED8', transform: 'translateY(-2px)' },
    dark: { backgroundColor: 'rgba(96,165,250,0.12)', borderColor: '#93C5FD', transform: 'translateY(-2px)' },
  },
  neutral: {
    light: { backgroundColor: '#E5E7EB', borderColor: '#E5E7EB', transform: 'translateY(-2px)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
    dark: { backgroundColor: '#4B5563', borderColor: '#4B5563', transform: 'translateY(-2px)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' },
  },
};

const activeStyles = {
  primary: { transform: 'translateY(0)', boxShadow: 'none' },
  secondary: { transform: 'translateY(0)' },
  neutral: { transform: 'translateY(0)', boxShadow: 'none' },
};

function AffiliateLink({ href = '#', variant = 'primary', children, ...rest }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const updateTheme = () => setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
      updateTheme();
      const observer = new MutationObserver(updateTheme);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
      return () => observer.disconnect();
    }
  }, []);

  const theme = isDark ? 'dark' : 'light';
  const variantBase = variants[variant]?.[theme] || variants.primary.light;
  const variantHover = hoverStyles[variant]?.[theme] || hoverStyles.primary.light;
  const variantActive = activeStyles[variant] || activeStyles.primary;

  const combinedStyle = {
    ...baseStyle,
    ...variantBase,
    ...(isHovered ? variantHover : {}),
    ...(isActive ? variantActive : {}),
  };

  return (
    <a
      href={href}
      style={combinedStyle}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className="affiliate-link"
      data-track="affiliate_click"
      data-event-category="affiliate"
      data-event-action="click"
      data-event-label={typeof children === 'string' ? children : 'affiliate-cta'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      {...rest}
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0, opacity: 0.8 }}
        aria-hidden="true"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  );
}

export default AffiliateLink;
