import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthService from '../services/authService';

export default function PrivateRoute({ roles, component: Component }) {
  if (!AuthService.isLoggedIn()) {
    return <Navigate to="/auth/registration" />;
  }

  if (!roles.includes(AuthService.currentUserRole())) {
    return <Navigate to="/" />;
  }

  return <Component />;
}

PrivateRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  component: PropTypes.func
};
