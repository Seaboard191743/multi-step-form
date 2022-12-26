import React from 'react';

export const Plan = ({ planTitle, imgSrc, planPrice }) => {
  return (
    <section className='plan'>
      <div className='plan-icon'>
        <img src={imgSrc} alt='icon' />
      </div>
      <h1 className='plan-title'>{planTitle}</h1>
      <p className='plan-price'>{planPrice}</p>
    </section>
  );
};
