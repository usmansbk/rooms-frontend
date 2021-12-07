/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import { selectAllRooms, selectRoomById } from '../../redux/rooms/selectors';
import '../../styles/rooms.css';

const Card = ({ id }) => {
  const { name, picture, facilities } = useSelector(selectRoomById(id));

  return (
    <Link to={`/rooms/${id}`}>
      <div className="room-container gap-2 p-4">
        <img alt="" src={`${BASE_URL}${picture}`} style={{ width: 300, height: 300 }} className="room-image" />
        <h5 className="h3">{name}</h5>
        <p className="room-facility footer-text">{facilities}</p>
      </div>
    </Link>
  );
};

const Rooms = () => {
  const roomIds = useSelector(selectAllRooms);

  return (
    <div className="rooms-wrapper">
      <h1 className="">Available Rooms</h1>
      <div className="rooms-container gap-2 p-2">
        {roomIds.map((id) => <Card id={id} key={id} />)}
      </div>
    </div>
  );
};

export default Rooms;
