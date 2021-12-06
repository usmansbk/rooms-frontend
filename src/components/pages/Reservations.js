/* eslint-disable react/prop-types */
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation, fetchReservations } from '../../redux/reservations';
import { selectMyReservations, selectReservationById } from '../../redux/reservations/selectors';
import { selectRoomById } from '../../redux/rooms/selectors';

const Item = ({ id, onDelete }) => {
  const { check_in: checkIn, nights, room } = useSelector(selectReservationById(id));
  const { city } = useSelector(selectRoomById(room));
  return (
    <div>
      <div>{checkIn}</div>
      <span>{nights}</span>
      <p>{city}</p>
      <button type="button" onClick={() => onDelete(id)}>
        Cancel
      </button>
    </div>
  );
};

const Reservations = () => {
  const dispatch = useDispatch();
  const reservationIds = useSelector(selectMyReservations);

  useEffect(() => {
    dispatch(fetchReservations);
  }, []);

  const handleDelete = useCallback((id) => dispatch(deleteReservation(id)), []);

  return (
    <div>
      <h3>My Reservations</h3>
      <ul>
        {reservationIds.map((id) => <Item key={id} id={id} onDelete={handleDelete} />)}
      </ul>
    </div>
  );
};

export default Reservations;