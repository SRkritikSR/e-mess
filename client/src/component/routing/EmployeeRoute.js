import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
const EmployeeRoute = ({
    component: Component,
    auth: { isAuthenticated, loading,role }
}) => {
  if (role=="employee") return <Component/>
  return (
    <Navigate  to="/"/>
  )
}
EmployeeRoute.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
const mapStateToProps = (state) => ({
    auth: state.auth
  });
export default connect(mapStateToProps)(EmployeeRoute)
