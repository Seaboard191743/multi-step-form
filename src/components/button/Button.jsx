import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSlide } from '../../slices/formSlice';

import './button.css';

export const Button = ({ className, changeSlide, children }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={changeSlide} className={className}>
      {children}
    </button>
  );
};
