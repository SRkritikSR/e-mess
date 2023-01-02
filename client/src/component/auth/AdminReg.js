import React, { Fragment, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { setAlert } from '../../actions/alerts';
import { admin_register } from '../../actions/auth';
import PropTypes from 'prop-types'

export const AdminReg = ({ setAlert, admin_register, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", 'danger');
    }
    else {
      admin_register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/admindashboard" />;
  }
  const customGradient={
  
    /* fallback for old browsers */
    background: "#6a11cb",
    
    /* Chrome 10-25, Safari 5.1-6 */
    background: "-webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))",
    
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))",
    
}
  return (
    // <Fragment>
    //   <h1 className="large text-primary">Admin Sign Up</h1>
    //   <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
    //   <form className="form" onSubmit={onSubmit}>
    //     <div className="form-group">
    //       <input type="text" placeholder="Name" name="name" value={name} onChange={e=>onChange(e)} 
    //       // required 
    //       />
    //     </div>
    //     <div className="form-group">
    //       <input type="email" placeholder="Email Address" name="email" value={email}  onChange={e=>onChange(e)}
    //       //  required 
    //        />
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         name="password"
    //         value={password} onChange={e=>onChange(e)} 
    //         // required
    //         // minLength="6"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <input
    //         type="password"
    //         placeholder="Confirm Password"
    //         name="password2"
    //         value={password2} onChange={e=>onChange(e)} 
    //         // required
    //         // minLength="6"
    //       />
    //     </div>
    //     <input type="submit" className="btn btn-primary" value="Admin Register" />
    //   </form>
    //   <p className="my-1">
    //     Already have an account? <Link to="/admin_login">Sign In</Link>
    //   </p>
    // </Fragment>
    <section className=" vh-100 " style={customGradient}>
    <form onSubmit={onSubmit}>
    <div className="container  h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white" >
            <div className="card-body p-5 text-center">

              <div className="mb-md-5 mt-md-4 pb-5">

                <h2 className="fw-bold mb-2 text-uppercase" style={{ borderRadius: "1rem" }}>ADMIN Register</h2>
                <p className="text-white-50 mb-5">Fill out the necessary details</p>
            
                <div className="form-outline form-white mb-4">
                  {/* <input type="email"   placeholder="Email Address" name="email" value={email}  onChange={e=>onChange(e)} required  /> */}
                   <input id="typeEmailX" className="form-control form-control-lg" type="text" placeholder="Name" name="name" value={name} onChange={e=>onChange(e)}  required />
                  <label className="form-label" for="typeEmailX">Name</label>
                </div>
                <div className="form-outline form-white mb-4">
                  {/* <input type="email"   placeholder="Email Address" name="email" value={email}  onChange={e=>onChange(e)} required  /> */}
                   {/* <input id="typeEmailX" className="form-control form-control-lg" type="text" placeholder="Name" name="name" value={name} onChange={e=>onChange(e)}  required /> */}
                   <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={email}  onChange={e=>onChange(e)}  required />
                  <label className="form-label" for="typeEmailX">Email </label>
                </div>

                <div className="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={password} onChange={e=>onChange(e)} required
                    minLength="6"/>
                  <label className="form-label" for="typePasswordX">Password</label>
                </div>
                <div className="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2} onChange={e=>onChange(e)} required
                    minLength="6"/>
                  <label className="form-label" for="typePasswordX">Password</label>
                </div>


                {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                <button className="btn btn-outline-light btn-lg px-5" type="submit" value="Register">Register</button>

                {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
              <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
              <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
              <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
            </div> */}

              </div>
              

              <div>
                <p className="mb-0">Already Signed up <a href="/admin_Login" className="text-white-50 fw-bold">Login</a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  </section>
    
  )
}

AdminReg.propTypes = {
  setAlert: PropTypes.func.isRequired,
  admin_register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, admin_register })(AdminReg);