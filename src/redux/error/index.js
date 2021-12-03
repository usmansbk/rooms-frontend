import { ERROR } from '../actions';

const initialState = {
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return { message: action.payload };
    default:
      return state;
  }
};

export default reducer;
