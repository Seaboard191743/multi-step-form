import React from 'react';
import './input.css';

export const Input = ({
  value,
  changeInputValue,
  name,
  id,
  type,
  required,
  placeholder,
  label,
}) => {
  return (
    <div className='input-group'>
      <div className='label-group'>
        <label htmlFor={id}>{label}</label>
      </div>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value[name]}
        onChange={changeInputValue}
      />
    </div>
  );
};
