import React from 'react';
import { useSelector } from 'react-redux';
import { slideNumber } from '../../slices/formSlice';

export const Step = ({ number, primaryTitle, secondaryTitle }) => {
  const slideNum = useSelector(slideNumber);
  const additionalClass =
    number === slideNum + 1 ? 'step-indicator--active' : null;

  return (
    <div className='step'>
      <div className={`step-indicator ${additionalClass}`}>{number}</div>
      <div className='step-description'>
        <span className='step-title-secondary'>{secondaryTitle}</span>
        <span className='step-title-primary'>{primaryTitle}</span>
      </div>
    </div>
  );
};
