import { SlideContainer } from './components/slide-container/SlideContainer';
import { PersonalInfo } from './pages/PersonalInfo';
import { SelectPlan } from './pages/SelectPlan';
import { PickAddOns } from './pages/PickAddOns';
import { FinishingUp } from './pages/FinishingUp';
import { FinalGreeting } from './pages/FinalGreeting';

import './app.css';

const App = () => {
  return (
    <div className='container'>
      <SlideContainer>
        <PersonalInfo />
        <SelectPlan />
        <PickAddOns />
        <FinishingUp />
        <FinalGreeting />
      </SlideContainer>
    </div>
  );
};

export default App;
