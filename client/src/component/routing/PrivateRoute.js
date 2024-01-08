import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Spinner from '../layout/Spinner';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading,role }
}) => {
//   if (loading) return <Spinner />;
  if (role=="admin") return <Component />;

  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
