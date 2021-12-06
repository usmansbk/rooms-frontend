/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import { selectAllRooms, selectRoomById } from '../../redux/rooms/selectors';

const Card = ({ id }) => {
  const { name, picture, facilities } = useSelector(selectRoomById(id));

  return (
    <Link to={`/rooms/${id}`}>
      <div>
        <img alt="" src={`${BASE_URL}${picture}`} style={{ width: 300, height: 300 }} />
        <h5>{name}</h5>
        <p>{facilities}</p>
      </div>
    </Link>
  );
};

const Rooms = () => {
  const roomIds = useSelector(selectAllRooms);

  return (
    <div>
      <h3>Available Rooms</h3>
      {roomIds.map((id) => <Card id={id} key={id} />)}
    </div>
  );
};

export default Rooms;
