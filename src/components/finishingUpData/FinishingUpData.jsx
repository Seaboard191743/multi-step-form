import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { FinishingUpAddOn } from './FinishingUpAddOn';
import { changeSelectedPlan } from '../../slices/formSlice';
import './finishingUp.css';

export const FinishingUpData = ({ data, planPeriod, totalCost }) => {
  const dispatch = useDispatch();
  const {
    plan: { type, price },
    addOns,
  } = data;
  const typeDesc = planPeriod ? '(Monthly)' : '(Yearly)';
  return (
    <>
      <div className='finishing-up-container'>
        <div className='finishing-up-plan'>
          <div className='finishing-up-desc'>
            <p className='finishing-up-plan-title'>
              {type} {typeDesc}
            </p>
            <p
              onClick={() => dispatch(changeSelectedPlan())}
              className='finishing-up-plan-change'
            >
              Change
            </p>
          </div>
          <p className='finishing-up-price'>{price}</p>
        </div>
        <div className='finishing-up-addOns'>
          {addOns.map((item) => {
            const { id, title } = item;
            const price = planPeriod
              ? `+$${item.price.month}/mo`
              : `+$${item.price.year}/yr`;
            return <FinishingUpAddOn key={id} title={title} price={price} />;
          })}
        </div>
      </div>
      <div className='finishing-up-total'>
        <p className='finishing-up-total-title'>{`Total ${
          planPeriod ? 'per month' : 'per year'
        } `}</p>
        <p className='finishing-up-total-cost'>{`+$${totalCost}/${
          planPeriod ? 'mo' : 'yr'
        }`}</p>
      </div>
    </>
  );
};
