/* eslint-disable react/prop-types */
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRoom } from '../../redux/rooms';
import { selectAllRooms, selectRoomById } from '../../redux/rooms/selectors';

const Item = ({ onDelete, id }) => {
  const { name } = useSelector(selectRoomById(id));

  return (
    <tr>
      <td>{name}</td>
      <td>
        <button className="link" type="button" onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  );
};

const DeleteRoom = () => {
  const roomIds = useSelector(selectAllRooms);
  const dispatch = useDispatch();

  const handleDelete = useCallback((id) => dispatch(deleteRoom(id)), []);

  return (
    <div className="container p-4">
      <h3 className="h3 mb-4">DELETE ROOM</h3>
      <div>
        <table>
          {roomIds.map((id) => <Item key={id} id={id} onDelete={handleDelete} />)}
        </table>
      </div>
    </div>
  );
};

export default DeleteRoom;
