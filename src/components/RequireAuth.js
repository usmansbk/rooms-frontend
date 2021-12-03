/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
};

export const RedirectAuth = ({ children }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const location = useLocation();

  if (currentUser) {
    const from = location.state?.from?.pathname || '/';
    return <Navigate to={from} />;
  }

  return children;
};

export default RequireAuth;
