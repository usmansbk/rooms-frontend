import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { fetchRooms } from '../redux/rooms';
import { signout } from '../redux/auth';

const links = [
  {
    to: '/',
    name: 'Rooms',
  },
  {
    to: 'reservations/new',
    name: 'Reserve',
  },
  {
    to: 'my-reservations',
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

const externalLinks = [
  {
    id: 'github',
    icon: faGithub,
    link: 'https://github.com/usmansbk',
  },
  {
    id: 'facebook',
    icon: faFacebookF,
    link: 'https://facebook.com',
  },
  {
    id: 'twitter',
    icon: faTwitter,
    link: 'https://twitter.com',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const handleSignout = useCallback(() => dispatch(signout), []);

  useEffect(() => {
    dispatch(fetchRooms);
  }, []);

  return (
    <div className="container flex-direction-row">
      <nav className="nav">
        <h5 className="brand h3">Room App</h5>
        <div className="nav-links flex-grow-1">
          {links.map(({ to, name }) => <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} key={to} to={to}>{name}</NavLink>)}
        </div>
        <button className="link" type="button" onClick={handleSignout}>Sign out</button>
        <footer className="nav-footer align-items-center">
          <ul className="flex pb-4 gap-2">
            {externalLinks.map(({ id, icon, link }) => (
              <a aria-label="icon" key={id} href={link}><FontAwesomeIcon icon={icon} /></a>))}
          </ul>
          <span className="footer-text">&copy; 2021 Microverse</span>
        </footer>
      </nav>
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
