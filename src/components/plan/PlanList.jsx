import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Plan } from './Plan';
import { SelectedPlanPeriod } from './SelectedPlanPeriod';
import {
  setSelectedPlan,
  setSelectedPlanPeriod,
  setDefaultPlanPrice,
} from '../../slices/formSlice';

import './plan.css';

export const PlanList = () => {
  const dispatch = useDispatch();

  const handleSelectedPlan = (type) => {
    dispatch(setSelectedPlan({ type }));
  };

  const handleSlideToggle = () => {
    dispatch(setSelectedPlanPeriod());
    dispatch(setDefaultPlanPrice());
    dispatch(setSelectedPlan({ type: 'arcade' }));
  };

  return (
    <div className='plan-container'>
      <Plan
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
      />
      <SelectedPlanPeriod handleSlideToggle={handleSlideToggle} />
    </div>
  );
};
