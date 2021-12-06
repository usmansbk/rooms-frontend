/* eslint-disable react/prop-types */
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRoom } from '../../redux/rooms';
import { selectAllRooms, selectRoomById } from '../../redux/rooms/selectors';

const Item = ({ onDelete, id }) => {
  const { name } = useSelector(selectRoomById(id));


const DeleteRoom = () => {
  const roomIds = useSelector(selectAllRooms);
  const dispatch = useDispatch();

  const handleDelete = useCallback((id) => dispatch(deleteRoom(id)), []);

  return (
    <div>
      <h3>Delete Room</h3>
      <div>
        {roomIds.map((id) => <Item key={id} id={id} onDelete={handleDelete} />)}
      </div>
    </div>
  );
};

export default DeleteRoom;