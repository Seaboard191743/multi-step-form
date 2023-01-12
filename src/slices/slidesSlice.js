import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slideNumber: 0,
  maxNumberOfSlides: 4,
};

const slidesSlice = createSlice({
  name: 'slides',
  initialState,
  reducers: {
    changeSlide: (state, { payload }) => {
      if (state.slideNumber > state.maxNumberOfSlides - 1) return;

      payload === 'next' ? (state.slideNumber += 1) : (state.slideNumber -= 1);
    },
  },
});

export const { changeSlide } = slidesSlice.actions;

export const slideNumber = (state) => state.slides.slideNumber;
export default slidesSlice.reducer;
