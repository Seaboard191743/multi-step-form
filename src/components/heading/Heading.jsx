import React from 'react';
import './heading.css';

export const Heading = ({ heading, subheading }) => {
  return (
    <>
      <h1>{heading}</h1>
      <p className='subheading'>{subheading}</p>
    </>
  );
};
