import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from '../../API';
import { RESET } from '../actions';
import { normailzeRooms } from '../schema';

const LOAD_ROOMS = 'rooms/items';
const ADD_ROOM = 'rooms/add';
const REMOVE_ROOM = 'rooms/remove';

const loadRooms = (payload) => ({
  type: LOAD_ROOMS,
  payload,
});

export const addRoom = (payload) => ({
  type: ADD_ROOM,
  payload,
});

export const removeRoom = (id) => ({
  type: REMOVE_ROOM,
  id,
})

export const fetchRooms = async (dispatch) => {
  dispatch(showLoading());
  const rooms = await API.getRooms();
  if (rooms?.length) {
    dispatch(loadRooms(normailzeRooms(rooms)));
  }

  dispatch(hideLoading());
};

export const fetchRoom = (id) => async (dispatch) => {
  dispatch(showLoading());

  const room = await API.getRoom(id);
  if (room) {
    dispatch(addRoom(room));
  }

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
