import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from '../../API';
import { RESET } from '../actions';
import { normailzeRooms } from '../schema';

const LOAD_ROOMS = 'rooms/items';
const ADD_ROOM = 'rooms/add';
const REMOVE_ROOM = 'rooms/remove';

const loadItems = (payload) => ({
  type: LOAD_ITEMS,
  payload,
});

export const addRoom = (payload) => ({
  type: ADD_ROOM,
  payload,
});

export const fetchRooms = async (dispatch) => {
  dispatch(showLoading());

  const items = await API.getRooms();
  dispatch(loadItems(items));

  dispatch(hideLoading());
};

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return {
        ...state, items: action.payload,
      };
    case ADD_ROOM:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};

export default reducer;
