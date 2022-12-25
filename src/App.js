import { useState } from 'react';

import { SlideContainer } from './components/slide-container/SlideContainer';
import { PersonalInfo } from './pages/PersonalInfo';
import { SelectPlan } from './pages/SelectPlan';
import { PickAddOns } from './pages/PickAddOns';
import { FinishingUp } from './pages/FinishingUp';

import './app.css';

const App = () => {
  // const [slide, setSlide] = useState(0);

  // const changeSlide = (direction) => {
  //   console.log('Hello');
  //   setSlide((prevSlide) =>
  //     direction === 'next' ? prevSlide + 1 : prevSlide - 1
  //   );
  //   console.log(slide);
  // };

  // const props = { slide, changeSlide };
  return (
    <div className='container'>
      <SlideContainer>
        <PersonalInfo />
        <SelectPlan />
        <PickAddOns />
        <FinishingUp />
      </SlideContainer>
    </div>
  );
};

export default App;
