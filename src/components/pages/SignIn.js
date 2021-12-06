/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../../redux/auth';

const SignIn = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => dispatch(signin(data));

  return (
    <div className="container align-items-center justify-content-center">
      <h3 className="h3 pb-4">Welcome back!</h3>
      <form className="gap-2" onSubmit={handleSubmit(onSubmit)} method="post">
        <input className="input" type="email" placeholder="Enter your email" {...register('email', { required: true })} />
        <input className="input" type="password" placeholder="Enter your password" {...register('password', { required: true })} />
        <input className="button" type="submit" value="Log In" />
      </form>
      <Link className="pt-4" to="/signup">Create an account</Link>
    </div>
  );
};

export default SignIn;
