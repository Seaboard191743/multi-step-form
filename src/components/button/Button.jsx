import React from 'react';

import './button.css';

export const Button = ({ className, changeSlide, children }) => {
  return (
    <button onClick={changeSlide} className={className}>
      {children}
    </button>
  );
};
