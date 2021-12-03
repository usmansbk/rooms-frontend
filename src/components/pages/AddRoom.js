/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { serialize } from 'object-to-formdata';
import { useNavigate } from 'react-router-dom';
import { createRoom } from '../../API';

const AddRoom = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const object = { ...data, picture: data.picture[0] };
    const formData = serialize(object, undefined, undefined, 'room');
    const room = await createRoom(formData);
    navigate(`/rooms/${room.id}`, { replace: true });
  });

  return (
    <div>
      <h3>Add Room</h3>
      <form onSubmit={onSubmit}>
        <input placeholder="Name" {...register('name', { required: true })} />
        <input placeholder="City" {...register('city', { required: true })} />
        <input type="number" placeholder="Price" {...register('price', { required: true })} />
        <input type="number" placeholder="Size" {...register('size', { required: true })} />
        <input placeholder="Bed Type" {...register('bed_type', { required: true })} />
        <textarea placeholder="Facilities" {...register('facilities', { required: true })} />
        <input placeholder="Picture" type="file" accept="image/png, image/jpeg" {...register('picture', { required: true })} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddRoom;
