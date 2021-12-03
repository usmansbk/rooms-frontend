/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';

const AddRoom = () => {
  return(
    <div>
      <h3>Add Room</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
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
}

export default AddRoom;
