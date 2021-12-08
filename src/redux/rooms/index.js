import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as API from '../../API';
import { RESET } from '../actions';
import { normailzeRooms } from '../schema';

const LOAD_ROOMS = 'rooms/items';
const ADD_ROOM = 'rooms/add';
export const REMOVE_ROOM = 'rooms/remove';

const loadRooms = (payload) => ({
  type: LOAD_ROOMS,
  payload,
});

export const addRoom = (room) => ({
  type: ADD_ROOM,
  room,
});

export const removeRoom = (id) => ({
  type: REMOVE_ROOM,
  id,
});

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

export const createRoom = (payload, callback) => async (dispatch) => {
  dispatch(showLoading());

  const room = await API.createRoom(payload);
  dispatch(addRoom(room));

  dispatch(hideLoading());
  callback(room);
};

export const deleteRoom = (id) => async (dispatch) => {
  dispatch(showLoading());

  await API.deleteRoom(id);
  dispatch(removeRoom(id));

  dispatch(hideLoading());
};

const initialState = {
  byId: {},
  allIds: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROOMS:
      return action.payload;
    case ADD_ROOM: {
      const { room } = action;
      return {
        byId: { ...state.byId, [room.id]: room },
        allIds: state.allIds.filter((id) => id !== room.id).concat([room.id]),
      };
    }
    case REMOVE_ROOM: {
      const byId = { ...state.byId };
      delete byId[action.id];
      return {
        byId,
        allIds: state.allIds.filter((id) => String(id) !== String(action.id)),
      };
    }
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
