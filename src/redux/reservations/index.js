import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { RESET } from '../actions';
import * as API from '../../API';
import { normailzeReservation, normailzeReservations } from '../schema';
import { addRoom, REMOVE_ROOM } from '../rooms';
import { showToast } from '../toast';

const LOAD_RESERVATIONS = 'reservations/load';
const ADD_RESERVATION = 'reservations/add';
const REMOVE_RESERVATION = 'reservations/remove';

const loadReservations = (payload) => ({
  type: LOAD_RESERVATIONS,
  payload,
});

export const addReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

const removeReservation = (id) => ({
  type: REMOVE_RESERVATION,
  id,
});

export const createReservation = (payload) => async (dispatch) => {
  dispatch(showLoading());

  const reservation = await API.createReservation(payload);
  const { byId, id, room } = normailzeReservation(reservation);
  dispatch(addReservation({ byId, id }));
  dispatch(addRoom(room));
  dispatch(showToast('Reserved!'));

  dispatch(hideLoading());
};

export const fetchReservations = async (dispatch) => {
  dispatch(showLoading());

  const reservations = await API.getReservations();
  if (reservations?.length) {
    dispatch(loadReservations(normailzeReservations(reservations)));
  }

  dispatch(hideLoading());
};

export const deleteReservation = (id) => async (dispatch) => {
  dispatch(showLoading());

  await API.deleteReservation(id);
  dispatch(removeReservation(id));

  dispatch(hideLoading());
};

const initialState = {
  byId: {},
  allIds: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RESERVATIONS:
      return action.payload;
    case ADD_RESERVATION: {
      const { byId, id } = action.payload;
      return {
        byId: { ...state.byId, ...byId },
        allIds: [...state.allIds, id],
      };
    }
    case REMOVE_RESERVATION: {
      const byId = { ...state.byId };
      delete byId[action.id];
      return {
        byId,
        allIds: state.allIds.filter((id) => String(id) !== String(action.id)),
      };
    }
    case REMOVE_ROOM: {
      const ids = state.allIds.filter((id) => {
        const reservation = state.byId[id];

        return reservation.room !== action.id;
      });
      return {
        ...state,
        allIds: ids,
      };
    }
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
