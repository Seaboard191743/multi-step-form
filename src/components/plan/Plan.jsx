import React from 'react';

export const Plan = ({ type, price, isActive, handleSelectedPlan }) => {
  const additionalClass = isActive ? 'plan--active' : null;

  return (
    <section
      className={`plan ${additionalClass}`}
      onClick={() => handleSelectedPlan(type)}
    >
      <div className='plan-icon'>
        <img src={`./images/${type.toLowerCase()}.svg`} alt='icon' />
      </div>
      <div className='plan-info'>
        <h1 className='plan-title'>{type}</h1>
        <p className='plan-price'>{price}</p>
      </div>
    </section>
  );
};
