import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { AddOn } from './AddOn';
import { addOns, selectedPlan } from '../../slices/formSlice';

import './add-ons.css';

export const AddOnList = ({ addOn, setAddOn, handleInputValueChange }) => {
  const allAddOns = useSelector(addOns);
  const plan = useSelector(selectedPlan);
  return (
    <div className='add-ons'>
      {allAddOns.map((item) => {
        const { id, type, title, description } = item;
        const price = plan.isMonthlyPlan
          ? `$${item.price.month}/mo`
          : `$${item.price.year}/yr`;
        return (
          <AddOn
            key={id}
            name={type}
            title={title}
            description={description}
            price={price}
            checked={addOn[type]}
            handleInputValueChange={handleInputValueChange}
            setAddOn={setAddOn}
          />
        );
      })}
    </div>
  );
};
