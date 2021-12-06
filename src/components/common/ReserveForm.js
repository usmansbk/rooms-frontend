/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createReservation } from '../../redux/reservations';

const ReserveForm = ({ roomId }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      room_id: roomId,
    },
  });

  const onSubmit = handleSubmit((data) => dispatch(createReservation(data)));

  return (
    <form onSubmit={onSubmit}>
      <input type="date" placeholder="Check in" {...register('check_in', { required: true })} />
      <input type="number" placeholder="Nights" {...register('nights', { required: true })} />
      <input type="submit" value="Reserve" />
    </form>
  );
};

export default ReserveForm;
