import React from 'react';
import { StepList } from '../step/StepList';

import './sidebar-container.css';

export const SideBarContainer = () => {
  return (
    <aside className='sidebar'>
      <StepList />
    </aside>
  );
};
