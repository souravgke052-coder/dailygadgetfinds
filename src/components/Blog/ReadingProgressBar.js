import React from 'react';

const styles = {
  bar: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '3px',
    backgroundColor: 'var(--color-accent)',
    zIndex: 9999,
    transition: 'width 50ms linear',
  },
};

function ReadingProgressBar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollProgress)));
    };

    window.addEventListener('scroll', calculateProgress);
    calculateProgress();

    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  return (
    <div
      style={{
        ...styles.bar,
        width: `${progress}%`,
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
}

export default ReadingProgressBar;