import React from 'react';
import { AddOnInput } from './AddOnInput';

export const AddOn = ({
  name,
  checked,
  handleInputValueChange,
  setAddOn,
  title,
  description,
  price,
}) => {
  return (
    <div
      className={checked ? 'add-on add-on--active' : 'add-on'}
      onClick={() => setAddOn((prev) => ({ ...prev, [name]: !checked }))}
    >
      <AddOnInput
        name={name}
        checked={checked}
        handleInputValueChange={handleInputValueChange}
        id={name}
      />
      <div className='add-on-info'>
        <p className='add-on-title'>{title}</p>
        <p className='add-on-description'>{description}</p>
      </div>
      <div className='span add-on-price'>{price}</div>
    </div>
  );
};
