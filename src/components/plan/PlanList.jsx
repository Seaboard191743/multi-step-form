import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Plan } from './Plan';
import { SelectedPlanPeriod } from './SelectedPlanPeriod';
import {
  setSelectedPlan,
  setSelectedPlanPeriod,
  setDefaultPlanPrice,
  selectedPlan,
} from '../../slices/formSlice';

import './plan.css';

export const PlanList = () => {
  const dispatch = useDispatch();

  const { types, isMonthlyPlan } = useSelector(selectedPlan);

  const handleSelectedPlan = (type) => {
    dispatch(setSelectedPlan({ type }));
  };

  const handleSlideToggle = () => {
    dispatch(setSelectedPlanPeriod());
    dispatch(setDefaultPlanPrice());
    dispatch(setSelectedPlan({ type: 'Arcade' }));
  };

  return (
    <div className='plan-container'>
      {types.map((plan) => {
        const { id, type, isActive } = plan;
        const price = isMonthlyPlan
          ? `$${plan.price.month}/mo`
          : `$${plan.price.year}/yr`;

        return (
          <Plan
            key={id}
            type={type}
            price={price}
            isActive={isActive}
            handleSelectedPlan={handleSelectedPlan}
          />
        );
      })}
      {/* <Plan
        planTitle='Arcade'
        imgSrc='./images/arcade.svg'
        type='arcade'
        handleSelectedPlan={handleSelectedPlan}
      />
      <Plan
        planTitle='Advanced'
        imgSrc='./images/advanced.svg'
        type='advanced'
        handleSelectedPlan={handleSelectedPlan}
      />
      <Plan
        planTitle='Pro'
        imgSrc='./images/pro.svg'
        type='pro'
        handleSelectedPlan={handleSelectedPlan}
      /> */}
      <SelectedPlanPeriod handleSlideToggle={handleSlideToggle} />
    </div>
  );
};
