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
  warningLabel,
}) => {
  return (
    <div className='input-group'>
      <div className='label-group'>
        {warningLabel ? (
          <>
            <label htmlFor={id}>{label}</label> <span>{warningLabel}</span>
          </>
        ) : (
          <label htmlFor={id}>{label}</label>
        )}
      </div>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value[name]}
        onChange={changeInputValue}
        style={{ borderColor: warningLabel ? '#EE374A' : '#d6d9e6' }}
      />
    </div>
  );
};
