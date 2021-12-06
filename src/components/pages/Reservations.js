/* eslint-disable react/prop-types */
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation, fetchReservations } from '../../redux/reservations';
import { selectMyReservations, selectReservationById } from '../../redux/reservations/selectors';
import { selectRoomById } from '../../redux/rooms/selectors';

const Reservations = () => <div>Reservations</div>;

export default Reservations;
