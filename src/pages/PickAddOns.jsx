import React from 'react';
import { useDispatch } from 'react-redux';

import { GridContainer } from '../components/grid-container/GridContainer';
import { SideBarContainer } from '../components/sidebar-container/SideBarContainer';
import { InfoContainer } from '../components/info-container/InfoContainer';
import { Heading } from '../components/heading/Heading';
import { Form } from '../components/form/Form';
import { AddOnList } from '../components/addOns/AddOnList';

import { ButtonContainer } from '../components/button-container/ButtonContainer';
import { Button } from '../components/button/Button';
import { useInputChange } from '../hooks/useInputChange';
import { setAddOns } from '../slices/formSlice';

import { handleChangeSlide } from '../utils/handlechangeSlide';

export const PickAddOns = () => {
  const { addOn, handleInputValueChange, setAddOn } = useInputChange();
  const dispatch = useDispatch();

  return (
    <GridContainer>
      <SideBarContainer />
      <InfoContainer>
        <Heading
          heading='Pick add-ons'
          subheading='Add-ons help enhance your gaming experience.'
        />
        <Form>
          <AddOnList
            addOn={addOn}
            setAddOn={setAddOn}
            handleInputValueChange={handleInputValueChange}
          />
        </Form>
        <ButtonContainer>
          <Button
            changeSlide={() => handleChangeSlide('prev', dispatch)}
            className='btn btn--prevstep'
          >
            Go Back
          </Button>
          <Button
            changeSlide={() => {
              dispatch(setAddOns(addOn));
              handleChangeSlide('next', dispatch);
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
