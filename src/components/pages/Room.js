import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import { fetchRoom } from '../../redux/rooms';
import { selectRoomById } from '../../redux/rooms/selectors';
import ReserveForm from '../common/ReserveForm';

const Room = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const room = useSelector(selectRoomById(params.id));

  useEffect(() => {
    if (!room) {
      dispatch(fetchRoom(params.id));
    }
  }, [room, params]);

  if (!room) {
    return null;
  }

  const {
    name, price, facilities, size, bed_type: bedType, picture, city,
  } = room;

  return (
    <div>
      <img alt="" src={`${BASE_URL}${picture}`} style={{ width: 300, height: 300 }} />
      <div>
        <h3>{name}</h3>
        <p>{city}</p>
        <h5>{price}</h5>
        <p>{facilities}</p>
        <p>{size}</p>
        <p>{bedType}</p>
      </div>
      <ReserveForm roomId={params.id} />
    </div>
  );
};

export default Room;
