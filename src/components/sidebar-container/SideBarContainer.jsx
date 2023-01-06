import React from 'react';
import { StepList } from '../step/StepList';

import './sidebar-container.css';

export const SideBarContainer = ({ className }) => {
  return (
    <aside className='sidebar'>
      <StepList className={className} />
    </aside>
  );
};
