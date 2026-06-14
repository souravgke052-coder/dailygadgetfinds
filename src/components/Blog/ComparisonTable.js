import React from 'react';

const styles = {
  wrapper: {
    overflowX: 'auto',
    margin: 'var(--spacing-8) 0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: 'var(--font-size-sm)',
    minWidth: '600px',
  },
  th: {
    backgroundColor: 'var(--color-background-secondary)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-text-primary)',
    padding: 'var(--spacing-4)',
    textAlign: 'left',
    borderBottom: '2px solid var(--color-border)',
    whiteSpace: 'nowrap',
  },
  thSticky: {
    position: 'sticky',
    left: 0,
    zIndex: 1,
  },
  td: {
    padding: 'var(--spacing-4)',
    textAlign: 'left',
    borderBottom: '1px solid var(--color-border)',
    color: 'var(--color-text-secondary)',
  },
  tdSticky: {
    position: 'sticky',
    left: 0,
    backgroundColor: 'var(--color-surface)',
    zIndex: 1,
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-text-primary)',
  },
  featureName: {
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-text-primary)',
  },
  row: {
    transition: 'background-color var(--transition-fast)',
  },
  rowHover: {
    backgroundColor: 'var(--color-surface-elevated)',
  },
  headerCell: {
    fontWeight: 'var(--font-weight-bold)',
    color: 'var(--color-text-primary)',
    textAlign: 'center',
    minWidth: '120px',
  },
  valueCell: {
    textAlign: 'center',
  },
};

function ComparisonTable({ products = [], features = [] }) {
  const [hoveredRow, setHoveredRow] = React.useState(null);

  if (!products.length || !features.length) return null;

  return (
    <div style={styles.wrapper}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.th, ...styles.thSticky }}>Feature</th>
            {products.map((product, index) => (
              <th key={index} style={styles.headerCell}>
                {product.name || `Product ${index + 1}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, featureIndex) => (
            <tr
              key={featureIndex}
              style={{
                ...styles.row,
                ...(hoveredRow === featureIndex ? styles.rowHover : {}),
              }}
              onMouseEnter={() => setHoveredRow(featureIndex)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td style={{ ...styles.td, ...styles.tdSticky }}>
                <span style={styles.featureName}>{feature.name}</span>
              </td>
              {products.map((product, productIndex) => (
                <td key={productIndex} style={{ ...styles.td, ...styles.valueCell }}>
                  {product.features && product.features[featureIndex] !== undefined
                    ? product.features[featureIndex]
                    : '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;