import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slideNumber: 0,
  maxNumberOfSlides: 4,
  personalInfo: { name: '', email: '', phone: '' },
  warningLabel: { name: '', email: '', phone: '' },
  selectedPlan: {
    isMonthlyPlan: true,
    types: [
      { id: 1, type: 'Arcade', isActive: true, price: { month: 9, year: 90 } },
      {
        id: 2,
        type: 'Advanced',
        isActive: false,
        price: { month: 12, year: 120 },
      },
      { id: 3, type: 'Pro', isActive: false, price: { month: 15, year: 150 } },
    ],
    selectedPlanPrice: 9,
  },
  selectedAddOns: {
    addOns: [
      {
        id: 1,
        type: 'service',
        title: 'Online service',
        description: 'Access to multiplayer games',
        checked: true,
        price: { month: 1, year: 10 },
      },
      {
        id: 2,
        type: 'storage',
        title: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        checked: false,
        price: { month: 2, year: 20 },
      },
      {
        id: 3,
        type: 'profile',
        title: 'Customizable profile',
        description: 'Custom theme on your profile',
        checked: false,
        price: { month: 2, year: 20 },
      },
    ],
    selectedAddOnsPrice: 0,
  },
  wrapUpData: {
    plan: {
      type: 'Arcade',
      price: '$9/mo',
    },
    addOns: [],
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPersonalInfo: (state, { payload }) => {
      state.personalInfo = payload;
    },
    setWarningLabel: (state, { payload }) => {
      state.warningLabel = payload;
    },
    setDefaultPlanPrice: (state) => {
      const plan = state.selectedPlan.types.find(
        (plan) => plan.type === 'Arcade'
      );

      state.selectedPlan.selectedPlanPrice = state.selectedPlan.isMonthlyPlan
        ? plan.price.month
        : plan.price.year;
    },
    setSelectedPlan: (state, { payload }) => {
      state.selectedPlan.types.forEach((plan) => {
        plan.isActive = false;
        if (plan.type === payload.type) {
          plan.isActive = true;
          state.wrapUpData.plan.type = plan.type;
          if (state.selectedPlan.isMonthlyPlan) {
            state.selectedPlan.selectedPlanPrice = plan.price.month;
            state.wrapUpData.plan.price = `$${plan.price.month}/mo`;
          } else {
            state.selectedPlan.selectedPlanPrice = plan.price.year;
            state.wrapUpData.plan.price = `$${plan.price.year}/yr`;
          }
        }
      });
    },
    setSelectedPlanPeriod: (state) => {
      state.selectedPlan.isMonthlyPlan = !state.selectedPlan.isMonthlyPlan;
    },
    setAddOns: (state, { payload }) => {
      state.selectedAddOns.selectedAddOnsPrice = 0;
      state.selectedAddOns.addOns.forEach((item) => {
        item.checked = payload[item.type];

        if (item.checked) {
          if (state.selectedPlan.isMonthlyPlan) {
            state.selectedAddOns.selectedAddOnsPrice += item.price.month;
          } else {
            state.selectedAddOns.selectedAddOnsPrice += item.price.year;
          }
        }
      });
      state.wrapUpData.addOns = state.selectedAddOns.addOns.filter(
        (item) => item.checked
      );
    },
    changeSlide: (state, { payload }) => {
      if (state.slideNumber > state.maxNumberOfSlides - 1) return;

      payload === 'next' ? (state.slideNumber += 1) : (state.slideNumber -= 1);
    },
    changeSelectedPlan: (state) => {
      state.slideNumber = 1;
    },
  },
});

export const {
  changeSlide,
  setPersonalInfo,
  setWarningLabel,
  setSelectedPlan,
  setSelectedPlanPeriod,
  setDefaultPlanPrice,
  setAddOns,
  changeSelectedPlan,
} = formSlice.actions;
export const slideNumber = (state) => state.form.slideNumber;
export const personalInfo = (state) => state.form.personalInfo;
export const getWarningLabel = (state) => state.form.warningLabel;
export const selectedPlan = (state) => state.form.selectedPlan;
export const addOns = (state) => state.form.selectedAddOns.addOns;
export const addOnsPrice = (state) =>
  state.form.selectedAddOns.selectedAddOnsPrice;

export const wrapUpData = (state) => state.form.wrapUpData;

export default formSlice.reducer;
