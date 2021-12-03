/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/auth';

const SignUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => dispatch(signup(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <input placeholder="Enter your name" {...register('name', { required: true })} />
      <input type="email" placeholder="Enter your email" {...register('email', { required: true })} />
      <input type="password" placeholder="Enter your password" {...register('password', { required: true })} />
      <input type="submit" value="Create account" />
    </form>
  );
};

export default SignUp;
