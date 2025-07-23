import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', color = 'var(--primary)' }) => {
  const spinnerClass = `spinner spinner-${size}`;
  
  return (
    <div className={spinnerClass} style={{ borderTopColor: color }}>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
