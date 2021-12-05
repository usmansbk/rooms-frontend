/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../redux/auth';

const SignUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => dispatch(signup(data));

  return (
    <div>
      <h3>Register to book a room</h3>
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <input placeholder="Enter your name" {...register('name', { required: true })} />
        <input type="email" placeholder="Enter your email" {...register('email', { required: true })} />
        <input type="password" placeholder="Enter your password" {...register('password', { required: true })} />
        <input type="submit" value="Create account" />
      </form>
      <Link to="/signin">Already have an account?</Link>
    </div>
  );
};

export default SignUp;
