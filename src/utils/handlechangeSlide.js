import { changeSlide } from '../slices/slidesSlice';

export const handleChangeSlide = (direction, dispatch) => {
  dispatch(changeSlide(direction));
};
