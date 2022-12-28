import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleChangeSlide } from '../utils/handlechangeSlide';
import { setPersonalInfo } from '../slices/formSlice';

import { GridContainer } from '../components/grid-container/GridContainer';
import { SideBarContainer } from '../components/sidebar-container/SideBarContainer';
import { InfoContainer } from '../components/info-container/InfoContainer';
import { Heading } from '../components/heading/Heading';
import { Input } from '../components/input/Input';

import { ButtonContainer } from '../components/button-container/ButtonContainer';

import { Button } from '../components/button/Button';

export const PersonalInfo = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const dispatch = useDispatch();

  const handleInputValueChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <GridContainer>
      <SideBarContainer />
      <InfoContainer>
        <Heading
          heading='Personal info'
          subheading='Please provide your name, email address, and phone number.'
        />
        <form className='form' autoComplete='off'>
          <Input
            type='text'
            id='name'
            name='name'
            placeholder='e.g Stephen King'
            label='Name'
            required={true}
            value={inputValue}
            changeInputValue={handleInputValueChange}
          />
          <Input
            type='text'
            id='email'
            name='email'
            placeholder='e.g stephenking@lorem.com'
            label='Email Address'
            required={true}
            value={inputValue}
            changeInputValue={handleInputValueChange}
          />
          <Input
            type='text'
            id='phone'
            name='phone'
            placeholder='e.g +1 234 567 890'
            label='Phone Number'
            required={true}
            value={inputValue}
            changeInputValue={handleInputValueChange}
          />
        </form>
        <ButtonContainer>
          <Button
            changeSlide={() => {
              const { name, email, phone } = inputValue;
              // if (name && email && phone) {
              dispatch(setPersonalInfo(inputValue));
              handleChangeSlide('next', dispatch);
              // return;
              // }
              // alert('Fill in the form');
            }}
            className='btn btn--step'
          >
            Next step
          </Button>
        </ButtonContainer>
      </InfoContainer>
    </GridContainer>
  );
};
