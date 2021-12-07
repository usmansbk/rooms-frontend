/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../constants';
import { selectRoomById } from '../../redux/rooms/selectors';
import classes from '../../styles/RoomList.module.css';

const Card = ({ id }) => {
  const { name, picture, facilities } = useSelector(selectRoomById(id));

  return (
    <Link to={`/rooms/${id}`}>
      <div className={classes.card}>
        <img alt="" src={`${BASE_URL}${picture}`} className={classes.image} />
        <h5 className="h4 mt-4 fw-600">{name}</h5>
        <div className="dot-divider my-4" />
        <p className="caption fw-600 text-gray text-align-center">{facilities}</p>
      </div>
    </Link>
  );
};

const RoomList = ({ data = [] }) => (
  <div className={classes.container}>
    {data.map((id) => <Card key={id} id={id} />)}
  </div>
);

export default RoomList;
