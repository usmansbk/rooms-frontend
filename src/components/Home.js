import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { fetchRooms } from '../redux/rooms';
import { signout } from '../redux/auth';

const links = [
  {
    to: 'rooms',
    name: 'Rooms',
  },
  {
    to: 'reservations/new',
    name: 'Reserve',
  },
  {
    to: 'reservations',
    name: 'My Reservations',
  },
  {
    to: 'rooms/new',
    name: 'Add Room',
  },
  {
    to: 'rooms/delete',
    name: 'Delete Room',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const handleSignout = useCallback(() => dispatch(signout), []);

  useEffect(() => {
    dispatch(fetchRooms);
  }, []);

  return (
    <div>
      <div>
        <nav>
          <h5>Room App</h5>
          {links.map(({ to, name }) => <Link key={to} to={to}>{name}</Link>)}
          <button type="button" onClick={handleSignout}>Sign out</button>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
