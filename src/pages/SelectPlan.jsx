import React from 'react';

import { useDispatch } from 'react-redux';

import { GridContainer } from '../components/grid-container/GridContainer';
import { SideBarContainer } from '../components/sidebar-container/SideBarContainer';
import { InfoContainer } from '../components/info-container/InfoContainer';
import { Heading } from '../components/heading/Heading';

import { ButtonContainer } from '../components/button-container/ButtonContainer';
import { Button } from '../components/button/Button';

import { handleChangeSlide } from '../utils/handlechangeSlide';

export const SelectPlan = () => {
  const dispatch = useDispatch();
  return (
    <GridContainer>
      <SideBarContainer />
      <InfoContainer>
        <Heading
          heading='Select you plan'
          subheading='You have the option of monthly or yearly billing.'
        />
        <ButtonContainer>
          <Button
            changeSlide={() => handleChangeSlide('prev', dispatch)}
            className='btn btn--prevstep'
          >
            Go Back
          </Button>
          <Button
            changeSlide={() => handleChangeSlide('next', dispatch)}
            className='btn btn--step'
          >
            Next step
          </Button>
        </ButtonContainer>
      </InfoContainer>
    </GridContainer>
  );
};
