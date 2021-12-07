import { useSelector } from 'react-redux';
import { selectAllRooms } from '../../redux/rooms/selectors';
import RoomList from '../common/RoomList';

const Rooms = () => {
  const roomIds = useSelector(selectAllRooms);

  return (
    <div className="container pt-4 justify-content-center">
      <h3 className="h3 mb-10 text-align-center">AVAILABLE ROOMS</h3>
      <RoomList data={roomIds} />
    </div>
  );
};

export default Rooms;
