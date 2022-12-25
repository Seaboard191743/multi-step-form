import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slideNumber: 0,
  maxNumberOfSlides: 4,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeSlide: (state, { payload }) => {
      if (state.slideNumber > state.maxNumberOfSlides - 1) return;
      console.log(payload);

      payload === 'next' ? (state.slideNumber += 1) : (state.slideNumber -= 1);
    },
  },
});

export const { changeSlide } = formSlice.actions;
export const slideNumber = (state) => state.form.slideNumber;

export default formSlice.reducer;
