import React from 'react';
import { useSelector } from 'react-redux';
import { selectedPlan } from '../../slices/formSlice';

export const Plan = ({ planTitle, imgSrc, type, handleSelectedPlan }) => {
  const plan = useSelector(selectedPlan);

  const additionalClass = plan.type[type].isActive ? 'plan--active' : null;
  const price = plan.isMonthlyPlan
    ? `$${plan.type[type].price.month}/mo`
    : `$${plan.type[type].price.year}/yr`;
  return (
    <section
      className={`plan ${additionalClass}`}
      onClick={() => handleSelectedPlan(type)}
    >
      <div className='plan-icon'>
        <img src={imgSrc} alt='icon' />
      </div>
      <h1 className='plan-title'>{planTitle}</h1>
      <p className='plan-price'>{price}</p>
    </section>
  );
};
