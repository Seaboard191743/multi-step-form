import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { slideNumber } from '../../slices/formSlice';

import './slide-container.css';

export const SlideContainer = ({ children }) => {
  const slide = useSelector(slideNumber);
  return (
    <div className='slide-container'>
      <div
        className='slides'
        style={{
          transform:
            slide > 0
              ? `translateX(calc(-${slide * 100}% - ${slide * 15}px))`
              : null,
        }}
      >
        {children}
      </div>
    </div>
  );
};
