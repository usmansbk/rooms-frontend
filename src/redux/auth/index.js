import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from '../../API';
import { RESET } from '../actions';

export const selectCurrentUser = (state) => state.auth.currentUser;

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
  dispatch({ type: RESET });

  dispatch(hideLoading());
};

const intialState = {
  currentUser: null,
  token: null,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return action.payload;
    case RESET:
      return intialState;
    default:
      return state;
  }
};

export default reducer;
