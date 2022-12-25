import React from 'react';
import { useDispatch } from 'react-redux';

import { GridContainer } from '../components/grid-container/GridContainer';
import { SideBarContainer } from '../components/sidebar-container/SideBarContainer';
import { InfoContainer } from '../components/info-container/InfoContainer';
import { Heading } from '../components/heading/Heading';
import { ButtonContainer } from '../components/button-container/ButtonContainer';

import { Button } from '../components/button/Button';

import { handleChangeSlide } from '../utils/handlechangeSlide';

export const FinishingUp = (props) => {
  const dispatch = useDispatch();
  return (
    <GridContainer>
      <SideBarContainer />
      <InfoContainer>
        <Heading
          heading='Finishing Up'
          subheading='Double-check everything looks OK before confirming.'
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