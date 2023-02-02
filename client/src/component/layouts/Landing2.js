import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

export const Landing2 = ({ isAuthenticated }) => {

  // if(isAuthenticated){
  //   return <Navigate to="/dashboard" />;
  // }

  return (
    <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Mess Management</h1>
        <div className="buttons">

            {/* <!-- header --> */}
            <header id="home" className="header" style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <div className=" text-white text-center">
                    <h1 className="display-2 font-weight-bold my-3">Birla Mess</h1>
                    <h2 className="display-4 mb-5"><i>Always fresh</i></h2>
                </div>
            </header>
        </div>
      </div>
    </div>
  </section>
  )
}

Landing2.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing2);
