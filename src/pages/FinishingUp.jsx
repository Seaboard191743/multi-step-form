import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GridContainer } from '../components/grid-container/GridContainer';
import { SideBarContainer } from '../components/sidebar-container/SideBarContainer';
import { InfoContainer } from '../components/info-container/InfoContainer';
import { Heading } from '../components/heading/Heading';
import { ButtonContainer } from '../components/button-container/ButtonContainer';
import { FinishingUpData } from '../components/finishingUpData/FinishingUpData';

import { Button } from '../components/button/Button';

import { handleChangeSlide } from '../utils/handlechangeSlide';
import { selectedPlan, wrapUpData, addOnsPrice } from '../slices/formSlice';

export const FinishingUp = () => {
  const dispatch = useDispatch();
  const data = useSelector(wrapUpData);
  const { isMonthlyPlan, selectedPlanPrice } = useSelector(selectedPlan);
  const selectedAddOnsPrice = useSelector(addOnsPrice);

  return (
    <GridContainer>
      <SideBarContainer />
      <InfoContainer>
        <Heading
          heading='Finishing Up'
          subheading='Double-check everything looks OK before confirming.'
        />
        <FinishingUpData
          data={data}
          planPeriod={isMonthlyPlan}
          totalCost={selectedPlanPrice + selectedAddOnsPrice}
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
            className='btn btn--step btn--confirm'
          >
            Confirm
          </Button>
        </ButtonContainer>
      </InfoContainer>
    </GridContainer>
  );
};
