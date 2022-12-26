import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slideNumber: 0,
  maxNumberOfSlides: 4,
  step1: {},
  step2: {
    isMonthly: true,
    type: {
      arcade: { isArcade: true, price: { month: 9, year: 90 } },
      advanced: { isAdvanced: false, price: { month: 12, year: 120 } },
      pro: { isPro: false, price: { month: 15, year: 150 } },
    },
    totalPrice: 9,
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
    changeSlide: (state, { payload }) => {
      if (state.slideNumber > state.maxNumberOfSlides - 1) return;

      payload === 'next' ? (state.slideNumber += 1) : (state.slideNumber -= 1);
    },
  },
});

export const { changeSlide } = formSlice.actions;
export const slideNumber = (state) => state.form.slideNumber;

export default formSlice.reducer;
