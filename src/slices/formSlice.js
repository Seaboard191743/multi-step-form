import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slideNumber: 0,
  maxNumberOfSlides: 4,
  personalInfo: { name: '', email: '', phone: '' },
  selectedPlan: {
    isMonthlyPlan: true,
    type: {
      arcade: { isActive: true, price: { month: 9, year: 90 } },
      advanced: { isActive: false, price: { month: 12, year: 120 } },
      pro: { isActive: false, price: { month: 15, year: 150 } },
    },
    selectedPlanPrice: 9,
  },
  step3: {
    onlineService: { isOnlineServie: false, price: 1 },
    largerStorage: { isLargerStorage: false, price: 2 },
    customizableProfile: { isCustomizableProfile: false, price: 1 },
    totalPrice: 0,
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPersonalInfo: (state, { payload }) => {
      state.personalInfo = payload;
    },
    setDefaultPlanPrice: (state) => {
      state.selectedPlan.selectedPlanPrice = state.selectedPlan.isMonthlyPlan
        ? state.selectedPlan.type['arcade'].price['month']
        : state.selectedPlan.type['arcade'].price['year'];
    },
    setSelectedPlan: (state, { payload }) => {
      for (let key in state.selectedPlan.type) {
        state.selectedPlan.type[key].isActive = false;
        state.selectedPlan.type[payload.type].isActive = true;
        state.selectedPlan.selectedPlanPrice = state.selectedPlan.isMonthlyPlan
          ? state.selectedPlan.type[payload.type].price['month']
          : state.selectedPlan.type[payload.type].price['year'];
      }
    },
    setSelectedPlanPeriod: (state) => {
      state.selectedPlan.isMonthlyPlan = !state.selectedPlan.isMonthlyPlan;
    },
    changeSlide: (state, { payload }) => {
      if (state.slideNumber > state.maxNumberOfSlides - 1) return;

      payload === 'next' ? (state.slideNumber += 1) : (state.slideNumber -= 1);
    },
  },
});

export const {
  changeSlide,
  setPersonalInfo,
  setSelectedPlan,
  setSelectedPlanPeriod,
  setDefaultPlanPrice,
} = formSlice.actions;
export const slideNumber = (state) => state.form.slideNumber;
export const personalInfo = (state) => state.form.personalInfo;
export const selectedPlan = (state) => state.form.selectedPlan;

export default formSlice.reducer;
