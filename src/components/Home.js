import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { signout } from '../redux/auth';

const Home = () => {
  const dispatch = useDispatch();
  const handleSignout = useCallback(() => dispatch(signout), []);

  return (
    <div>
      <nav>
        <h5>Room App</h5>
        <Link to="rooms">Rooms</Link>
        <Link to="reservations/new">Reserve</Link>
        <Link to="reservations">My reservations</Link>
        <Link to="rooms/new">Add Room</Link>
        <Link to="rooms/delete">Delete Room</Link>
        <button type="button" onClick={handleSignout}>Sign out</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
