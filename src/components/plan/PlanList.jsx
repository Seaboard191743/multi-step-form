import React from 'react';
import { Plan } from './Plan';

import './plan.css';

export const PlanList = () => {
  return (
    <div className='plan-container'>
      <Plan planTitle='Arcade' imgSrc='./images/arcade.svg' planPrice='$9/mo' />
      <Plan
        planTitle='Advanced'
        imgSrc='./images/advanced.svg'
        planPrice='$12/mo'
      />
      <Plan planTitle='Pro' imgSrc='./images/pro.svg' planPrice='$15/mo' />
    </div>
  );
};
