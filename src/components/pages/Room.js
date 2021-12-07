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
    <div className="flex-direction-row">
      <div className="flex-grow-1">
        <img alt={name} src={`${BASE_URL}${picture}`} style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="p-4">
        <div className="text-align-right">
          <h3 className="h3 fw-600">{name}</h3>
          <span className="caption">{city}</span>
        </div>
        <h5>{price}</h5>
        <p>{facilities}</p>
        <p>{size}</p>
        <p>{bedType}</p>
        <ReserveForm roomId={params.id} />
      </div>
    </div>
  );
};

export default Room;
