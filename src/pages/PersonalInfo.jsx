import React from 'react';
import { useInputChange } from '../hooks/useInputChange';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeSlide } from '../utils/handlechangeSlide';
import {
  setPersonalInfo,
  setWarningLabel,
  getWarningLabel,
} from '../slices/formSlice';
import { Form } from '../components/form/Form';

import { GridContainer } from '../components/grid-container/GridContainer';
import { SideBarContainer } from '../components/sidebar-container/SideBarContainer';
import { InfoContainer } from '../components/info-container/InfoContainer';
import { Heading } from '../components/heading/Heading';
import { Input } from '../components/input/Input';

import { ButtonContainer } from '../components/button-container/ButtonContainer';

import { Button } from '../components/button/Button';

export const PersonalInfo = () => {
  const { inputValue, handleInputValueChange } = useInputChange();
  const dispatch = useDispatch();
  const warningLabel = useSelector(getWarningLabel);

  return (
    <GridContainer>
      <SideBarContainer />
      <InfoContainer>
        <Heading
          heading='Personal info'
          subheading='Please provide your name, email address, and phone number.'
        />
        <Form>
          <Input
            type='text'
            id='name'
            name='name'
            placeholder='e.g Stephen King'
            label='Name'
            required={true}
            value={inputValue}
            changeInputValue={handleInputValueChange}
            warningLabel={warningLabel.name}
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
            warningLabel={warningLabel.email}
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
            warningLabel={warningLabel.phone}
          />
        </Form>
        <ButtonContainer>
          <Button
            changeSlide={() => {
              const { name, email, phone } = inputValue;

              if (name && email && phone) {
                dispatch(setPersonalInfo(inputValue));
                handleChangeSlide('next', dispatch);
                dispatch(
                  setWarningLabel({
                    name: '',
                    email: '',
                    phone: '',
                  })
                );
                return;
              }
              const warningLabel = 'This field is required';
              dispatch(
                setWarningLabel({
                  name: name ? '' : warningLabel,
                  email: email ? '' : warningLabel,
                  phone: phone ? '' : warningLabel,
                })
              );
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
