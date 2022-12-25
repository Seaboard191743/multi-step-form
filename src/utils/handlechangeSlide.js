import { changeSlide } from '../slices/formSlice';

export const handleChangeSlide = (direction, dispatch) => {
  dispatch(changeSlide(direction));
};
