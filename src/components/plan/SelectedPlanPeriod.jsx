import React from 'react';
import { useSelector } from 'react-redux';
import { selectedPlan } from '../../slices/formSlice';

export const SelectedPlanPeriod = ({ handleSlideToggle }) => {
  const { isMonthlyPlan } = useSelector(selectedPlan);
  const toggleClass = !isMonthlyPlan ? 'plan-period-slide--toggle' : null;

  return (
    <div className='plan-period'>
      <div className='plan-period-toggle'>
        <span
          className={
            isMonthlyPlan
              ? 'plan-period-duration plan-period-duration--active'
              : 'plan-period-duration'
          }
        >
          Monthly
        </span>
        <div className={`plan-period-slide`} onClick={handleSlideToggle}>
          <div className={`${toggleClass}`}></div>
        </div>
        <span
          className={
            !isMonthlyPlan
              ? 'plan-period-duration plan-period-duration--active'
              : 'plan-period-duration'
          }
        >
          Yearly
        </span>
      </div>
    </div>
  );
};
