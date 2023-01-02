import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import FirstPage from './FirstPage';

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
  const authLinks = (
    <>
      {/* <ul>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-user" />{' '}
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link'to="/admindashboard">
            <i className="fas fa-user" />{' '}
            <span className="hide-sm">Admin Dashboard</span>
          </Link>
        </li>
        <li>x
          <a onClick={logout} href="#!">
            <i className="fas fa-sign-out-alt" />{' '}
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>

      */}
      <nav className="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top" data-spy="affix" data-offset-top="10" style={{ backgroundColor: "#343a40" }}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "#343a40" }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">Welcome <i style={{ color: "black" }}>{isAuthenticated ? (user?user.name:"blank") : "Logged Out"}</i></a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/#about">Credits: {user.credits}</a>
            </li> */}
            {/* <li className="nav-item">
                  <a className="nav-link" href="#gallary">Gallary</a>
              </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/add_comment">Write a Review</a>
            </li>
          </ul>
          <a className="navbar-brand m-auto" href="/#">
            <img src="img/BirlaLogo.jpg" className="brand-img" alt="" />
            <span className="brand-txt">Birla Mess Management</span>
          </a>
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <a className="nav-link" href="">Menu<span className="sr-only">(current)</span></a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/#blog">Menu</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/show_comment"> Your Reviews</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={logout}>Logout</a>
            </li>
            {/* <li className="nav-item">
                  <a href="components.html" className="btn btn-danger ml-xl-4">Components</a>
              </li> */}

          </ul>
        </div>

      </nav>
    </>
  );
  const guestLinks = (
    <nav className="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top" data-spy="affix" data-offset-top="10" style={{ backgroundColor: "#343a40" }}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "#343a40  " }}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#about">About</a>
          </li>
          {/* <li className="nav-item">
                  <a className="nav-link" href="#gallary">Gallary</a>
              </li> */}
          {/* <li className="nav-item">
                  <a className="nav-link" href="#book-table">Write a Review</a>
              </li> */}
        </ul>
        {/* <a className="navbar-brand m-auto" href="/#">
          <img src="img/logo.svg" className="brand-img" alt="" />
          <span className="brand-txt">Food Hut</span>
        </a> */}
        <a className="navbar-brand m-auto" href="/#">
          <img src="img/BirlaLogo.jpg" className="brand-img" alt="" />
          <span className="brand-txt">Birla Mess Management</span>
        </a>
        <ul className="navbar-nav">
          {/* <li className="nav-item">
                  <a className="nav-link" href="#blog"><span className="sr-only">(current)</span></a>
              </li> */}
          <li className="nav-item">
            <a className="nav-link" href="/login"> Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin_login">Admin Login</a>
          </li>
          {/* <li className="nav-item">
                  <a href="components.html" className="btn btn-danger ml-xl-4">Components</a>
              </li> */}
        </ul>
      </div>
    </nav>
    // <ul>
    //   <li>
    //     <Link to="/admin_register">Admin Register</Link>
    //   </li>
    //   <li>
    //     <Link to="/register">Register</Link>
    //   </li>
    //   <li>
    //     <Link to="/login">Login</Link>
    //   </li>
    //   <li>
    //     <Link to="/admin_login">Admin Login</Link>
    //   </li>
    // </ul>
  );

  return (
    <>
      {/* <h1>
          <Link to="/">
            Mess-Management
          </Link>
        </h1> */}
      {/* <FirstPage/> */}
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
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