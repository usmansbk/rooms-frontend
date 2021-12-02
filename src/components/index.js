import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../redux/auth';

const Component = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signin({ email: 'test@gmail.com', password: 'password' }));
  }, []);
  return <h1>Rooms</h1>;
};

export default Component;
