/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { BASE_URL } from '../../constants';
import { selectRoomById } from '../../redux/rooms/selectors';
import classes from '../../styles/RoomList.module.css';

const CardFooter = () => (
  <div className="flex-direction-row my-4 justify-content-center gap-4">
    <div className={classes.icon}>
      <FontAwesomeIcon icon={faFacebookF} />
    </div>
    <div className={classes.icon}>
      <FontAwesomeIcon icon={faTwitter} />
    </div>
    <div className={classes.icon}>
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  </div>
);

const Card = ({ id }) => {
  const { name, picture, facilities } = useSelector(selectRoomById(id));

  return (
    <Link to={`/rooms/${id}`}>
      <div className={classes.card}>
        <img alt="" src={`${BASE_URL}${picture}`} className={classes.image} />
        <h5 className="h4 mt-4 fw-600">{name}</h5>
        <div className={classes.divider} />
        <div className="text-gray">
          <p className="caption fw-600 text-align-center">{facilities}</p>
          <CardFooter />
        </div>
      </div>
    </Link>
  );
};

const RoomList = ({ data = [] }) => (
  <div className={classes.container}>
    <button type="button" className={clsx(classes.button, classes.leftBtn)}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <button type="button" className={clsx(classes.button, classes.rightBtn)}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
    {data.map((id) => <Card key={id} id={id} />)}
  </div>
);

export default RoomList;
