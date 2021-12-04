import { RESET } from '../actions';

const HIDE_TOAST = 'toast/hide';
const SHOW_TOAST = 'toast/show';

export const showToast = (message) => ({
  type: SHOW_TOAST,
  message,
});

export const hideToast = () => ({
  type: HIDE_TOAST,
});

const initialState = {
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return { message: action.message };
    case HIDE_TOAST:
      return { message: null };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
