import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
const UserRoute = ({
    component: Component,
    auth: { isAuthenticated, loading,role }
}) => {
  if (role=="student") return <Component/>
  return (
    <Navigate  to="/"/>
  )
}
UserRoute.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
const mapStateToProps = (state) => ({
    auth: state.auth
  });
export default connect(mapStateToProps)(UserRoute)
