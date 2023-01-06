import React from 'react';
import { GridContainer } from '../components/grid-container/GridContainer';
import { SideBarContainer } from '../components/sidebar-container/SideBarContainer';
import { InfoContainer } from '../components/info-container/InfoContainer';

import '../components/final-greeting/final-greeting.css';

export const FinalGreeting = () => {
  return (
    <GridContainer>
      <SideBarContainer className='step-indicator--active' />
      <InfoContainer>
        <section className='final-greeting'>
          <img src='./images/check.svg' alt='icon' />
          <h1 className='final-greeting-title'>Thank you!</h1>
          <p className='final-greeting-description'>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </section>
      </InfoContainer>
    </GridContainer>
  );
};
