import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { slideNumber } from '../../slices/slidesSlice';

import './slide-container.css';

export const SlideContainer = ({ children }) => {
  const slide = useSelector(slideNumber);
  return (
    <div className='slide-container'>
      <div
        className='slides'
        style={{
          transform: `translateX(calc(-${slide * 100}% - ${slide * 15}px))`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
