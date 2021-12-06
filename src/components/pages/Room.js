import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import { fetchRoom } from '../../redux/rooms';
import { selectRoomById } from '../../redux/rooms/selectors';
import ReserveForm from '../common/ReserveForm';

const Room = () => <div>Room</div>;

export default Room;
