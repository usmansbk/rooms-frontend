/* eslint-disable react/prop-types */
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation, fetchReservations } from '../../redux/reservations';
import { selectMyReservations, selectReservationById } from '../../redux/reservations/selectors';
import { selectRoomById } from '../../redux/rooms/selectors';

const Item = ({ id, onDelete }) => {
  const { check_in: checkIn, room } = useSelector(selectReservationById(id));
  const { city, name } = useSelector(selectRoomById(room));
  return (
    <tr>
      <td>{name}</td>
      <td>{checkIn}</td>
      <td>{city}</td>
      <td>
        <button className="link" type="button" onClick={() => onDelete(id)}>
          Cancel
        </button>
      </td>
    </tr>
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
    <div className="container p-4">
      <h3 className="h3 mb-4">MY RESERVATIONS</h3>
      <table>
        <thead>
          <tr>
            <th>ROOM</th>
            <th>CHECK IN DATE</th>
            <th>CITY</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>
          {reservationIds.map((id) => <Item key={id} id={id} onDelete={handleDelete} />)}
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;
