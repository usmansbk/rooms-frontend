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

const reducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
