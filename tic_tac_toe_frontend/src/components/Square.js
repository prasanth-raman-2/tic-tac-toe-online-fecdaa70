import React from 'react';
import './Square.css';

const Square = ({ value, onClick }) => {
  return (
    <button 
      className={`square ${value ? 'filled' : ''}`} 
      onClick={onClick}
      disabled={value}
    >
      {value}
    </button>
  );
};

export default Square;
