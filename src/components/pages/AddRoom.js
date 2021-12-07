/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { serialize } from 'object-to-formdata';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createRoom } from '../../redux/rooms';
import { CITIES } from '../../constants';

const AddRoom = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    const object = { ...data, picture: data.picture[0] };
    const formData = serialize(object, undefined, undefined, 'room');
    dispatch(createRoom(formData, (room) => navigate(`/rooms/${room.id}`, { replace: true })));
  });

  return (
    <div className="container justify-content-center align-items-center flex-grow-1">
      <h3 className="h3 mb-4">ADD ROOM</h3>
      <form onSubmit={onSubmit} className="gap-2">
        <input className="input" placeholder="Name" {...register('name', { required: true })} />
        <select className="input" {...register('city', { required: true })}>
          {CITIES.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
        <input className="input" type="number" placeholder="Price per night ($)" {...register('price', { required: true })} />
        <input className="input" type="number" placeholder="Size (㎡)" {...register('size', { required: true })} />
        <input className="input" placeholder="Bed Type" {...register('bed_type', { required: true })} />
        <textarea className="input" placeholder="Facilities" {...register('facilities', { required: true })} />
        <label htmlFor="picture" className="input caption fw-600">
          <input placeholder="Picture" type="file" accept="image/png, image/jpeg" {...register('picture', { required: true })} />
          PICTURE
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddRoom;
