import React, { Fragment, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import FirstPage from './FirstPage';
import { HashLink } from 'react-router-hash-link';
import Landing2 from './Landing2';
const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
  const URL = 'http://localhost:5000/api/receipt';
  const AuthLinks = ()=> {
    return (
      <>
      <nav className="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top" data-spy="affix" data-offset-top="10" style={{ backgroundColor: "#343a40" }}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "#343a40" }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#about">Welcome <i style={{ color: "black" }}>{isAuthenticated ? (user?user.name:"blank") : "Logged Out"}</i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add_comment">Write a Review</Link>
            </li>
          </ul>
          <Link className="navbar-brand m-auto" to="/#">
            <img src="img/BirlaLogo.jpg" className="brand-img" alt="" />
            <span className="brand-txt">Birla Mess Management</span>
            
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#blog">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/show_receipt"> Your Receipt</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/show_comment"> Your Reviews</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={logout}>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
    )
  }
  const GuestLinks = ()=> {
    return (
      <>
      <nav className="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top" data-spy="affix" data-offset-top="10" style={{ backgroundColor: "#343a40" }}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "#343a40  " }}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#about">About</Link>
          </li>
        </ul>
        <Link className="navbar-brand m-auto" to="/#">
          <img src="img/BirlaLogo.jpg" className="brand-img" alt="" />
          <span className="brand-txt">Birla Mess Management</span>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="login"> Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin_login">Admin Login</Link>
          </li>
        </ul>
      </div>
    </nav>
    <HashLink smooth to="first_page/#about"></HashLink> 
      </>
    )
  }
  return (
    <>
      <Fragment>
      { 
      isAuthenticated ? 
        <>
        <AuthLinks/>
        </>
      : 
      <>
      <GuestLinks/>
      {/* <Landing2/> */}
      </>
      }
      </Fragment>
    </>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);