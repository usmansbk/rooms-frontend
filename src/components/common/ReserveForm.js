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
    <form onSubmit={onSubmit} className="gap-2">
      <label htmlFor="check_in">
        <span className="label">CHECK IN</span>
        <input className="input" type="date" placeholder="Check in" {...register('check_in', { required: true })} />
      </label>
      <input className="input" type="number" placeholder="Nights" {...register('nights', { required: true })} />
      <input className="button" type="submit" value="Reserve" />
    </form>
  );
};

export default ReserveForm;
