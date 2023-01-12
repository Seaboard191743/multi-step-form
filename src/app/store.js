import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formSlice';
import slidesReducer from '../slices/slidesSlice';

export const store = configureStore({
  reducer: { form: formReducer, slides: slidesReducer },
});
