/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import { selectAllRooms, selectRoomById } from '../../redux/rooms/selectors';

const Card = ({ id }) => {
  const { name, picture, facilities } = useSelector(selectRoomById(id));

  return (
    <Link to={`/rooms/${id}`}>
      <div className="card justify-content-center align-items-center">
        <img alt="" src={`${BASE_URL}${picture}`} style={{ width: '100%', height: 200 }} />
        <h5 className="h4 mt-4 fw-600">{name}</h5>
        <div className="dot-divider my-4" />
        <p className="caption fw-600 text-gray text-align-center">{facilities}</p>
      </div>
    </Link>
  );
};

const Rooms = () => {
  const roomIds = useSelector(selectAllRooms);

  return (
    <div className="container p-4 justify-content-center">
      <h3 className="h3 mb-4 text-align-center">AVAILABLE ROOMS</h3>
      <div className="mt-4 flex-lg-direction-row gap-6 align-items-center">
        {roomIds.map((id) => <Card id={id} key={id} />)}
      </div>
    </div>
  );
};

export default Rooms;
