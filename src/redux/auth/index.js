import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from '../../API';

const LOAD_USER = 'auth/current_user';

export const setCurrentUser = (payload) => ({
  type: LOAD_USER,
  payload,
});

export const signin = (payload) => async (dispatch) => {
  dispatch(showLoading());

  const data = await API.login(payload);
  dispatch(setCurrentUser(data));

  dispatch(hideLoading());
};

export const signup = (payload) => async (dispatch) => {
  dispatch(showLoading());

  const data = await API.register(payload);
  dispatch(setCurrentUser(data));

  dispatch(hideLoading());
};

export const signout = async (dispatch) => {
  dispatch(showLoading());

  await API.logout();
  dispatch(setCurrentUser(null));

  dispatch(hideLoading());
};

const intialState = {
  currentUser: null,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default reducer;
