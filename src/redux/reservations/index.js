import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { RESET } from '../actions';
import * as API from '../../API';
import { normailzeReservation, normailzeReservations } from '../schema';
import { addRoom } from '../rooms';

const LOAD_RESERVATIONS = 'reservations/load';
const ADD_RESERVATION = 'reservations/add';
const REMOVE_RESERVATION = 'reservations/remove';

const loadReservations = (payload) => ({
  type: LOAD_RESERVATIONS,
  payload,
});

const addReservation = (payload) => ({
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

const reducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
