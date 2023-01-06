import React from 'react';
import { Step } from './Step';

import './step.css';

export const StepList = ({ className }) => {
  return (
    <div className='steps'>
      <Step number={1} primaryTitle='Your info' secondaryTitle='Step 1' />
      <Step number={2} primaryTitle='Select plan' secondaryTitle='Step 2' />
      <Step number={3} primaryTitle='Add-ons' secondaryTitle='Step 3' />
      <Step
        number={4}
        primaryTitle='Summary'
        secondaryTitle='Step 4'
        className={className}
      />
    </div>
  );
};
