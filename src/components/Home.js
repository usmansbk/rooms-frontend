import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';
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

const NavFooter = () => (
  <footer className="nav-footer align-items-center">
    <ul className="flex pb-4 gap-2">
      {externalLinks.map(({ id, icon, link }) => (
        <a aria-label="icon" key={id} href={link}><FontAwesomeIcon icon={icon} /></a>))}
    </ul>
    <span className="footer-text">&copy; 2021 Microverse</span>
  </footer>
);

const NavLinks = () => (
  <div className="nav-links flex-grow-1">
    {links.map(({ to, name }) => <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} key={to} to={to}>{name}</NavLink>)}
  </div>

);

const Home = () => {
  const dispatch = useDispatch();
  const handleSignout = useCallback(() => dispatch(signout), []);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchRooms);
  }, []);

  const toggleMenu = useCallback(() => setOpen((state) => !state), []);

  const navClass = clsx('nav', open && 'open-nav');

  return (
    <div className="container flex-direction-row">
      <nav className={navClass}>
        <h5 className="brand h3">Room App</h5>
        <NavLinks />
        <button className="link" type="button" onClick={handleSignout}>Sign out</button>
        <NavFooter />
      </nav>
      <div className="flex-grow-1 content">
        <button className="icon-button background-transparent" type="button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
