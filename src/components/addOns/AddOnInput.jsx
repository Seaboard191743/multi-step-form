import React from 'react';

export const AddOnInput = ({ name, checked, id, handleInputValueChange }) => {
  return (
    <input
      type='checkbox'
      id={id}
      name={name}
      checked={checked}
      onChange={handleInputValueChange}
    />
  );
};
