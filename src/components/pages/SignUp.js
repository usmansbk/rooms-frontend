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
    <div className="container align-items-center justify-content-center">
      <h3 className="h3 pb-4">Register</h3>
      <form className="gap-2" onSubmit={handleSubmit(onSubmit)} method="post">
        <input className="input" placeholder="Enter your name" {...register('name', { required: true })} />
        <input className="input" type="email" placeholder="Enter your email" {...register('email', { required: true })} />
        <input className="input" type="password" placeholder="Enter your password" {...register('password', { required: true })} />
        <input className="button" type="submit" value="Create account" />
      </form>
      <Link className="pt-4" to="/signin">Already have an account?</Link>
    </div>
  );
};

export default SignUp;
