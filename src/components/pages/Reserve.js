/* eslint-disable react/prop-types */
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL, CITIES } from '../../constants';
import { selectRoomById, selectRoomsByCity } from '../../redux/rooms/selectors';
import ReserveForm from '../common/ReserveForm';

const Card = ({ id }) => {
  const { name, picture, price } = useSelector(selectRoomById(id));
  return (
    <div>
      <h3>{name}</h3>
      <img alt="" src={`${BASE_URL}${picture}`} style={{ width: 300, height: 300 }} />
      <p>
        {price}
        {' '}
        / per night
      </p>
      <ReserveForm roomId={id} />
    </div>
  );
};

const Reserve = () => {
  const [value, setValue] = useState(CITIES[0]);
  const roomIds = useSelector(selectRoomsByCity(value));

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <div className="container scroll hero text-white justify-content-center align-items-center p-4">
      <h3 className="h3 mb-4">BOOK A ROOM</h3>
      <select className="button" onChange={handleChange} value={value}>
        {CITIES.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <div>
        {roomIds.map((id) => <Card key={id} id={id} />)}
      </div>
    </div>
  );
};

export default Reserve;
