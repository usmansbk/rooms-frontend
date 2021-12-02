import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { signin } from '../redux/auth';
import { fetchRooms } from '../redux/rooms';

const Component = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(signin({ email: 'test@gmail.com', password: 'password' }));
    dispatch(fetchRooms);
  }, []);
  return <h1>Rooms</h1>;
};

export default Component;
