import React from 'react';

export const FinishingUpAddOn = ({ title, price }) => {
  return (
    <div className='finishing-up-addOn'>
      <div className='finishing-up-addOn-title'>{title}</div>
      <div className='finishing-up-addOn-price'>{price}</div>
    </div>
  );
};
