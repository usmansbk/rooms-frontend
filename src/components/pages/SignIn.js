/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/auth';

const SignIn = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => dispatch(signin(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <input type="email" placeholder="Enter your email" {...register('email', { required: true })} />
      <input type="password" placeholder="Enter your password" {...register('password', { required: true })} />
      <input type="submit" value="Log In" />
    </form>
  );
};

export default SignIn;
