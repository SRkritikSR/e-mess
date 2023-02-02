import React, { Fragment, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


export const Login = ({ login,isAuthenticated }) => {
  console.log(" The login page has been activated")
  const [formData,setFormData] = useState({
    email:'',
    password:''
  });

  const {email,password} = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]:e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    login(email,password);
  };

  //Redirect if looged in
  if (isAuthenticated) {
    return <Navigate to="/"/>;
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
    <section style={{marginTop: "10%"}}>
      <form onSubmit={onSubmit}>
      <div className="container  h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" >
              <div className="card-body  text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase" style={{ borderRadius: "1rem" }}>Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>
              
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="typeEmailX" className="form-control form-control-lg"  placeholder="Email Address" name="email" value={email}  onChange={e=>onChange(e)} required  />
                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      value={password} onChange={e=>onChange(e)} required
                      minLength="6"/>
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                  </div>

                  {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                  <button className="btn btn-outline-light btn-lg px-5" type="submit" >Login</button>

                  {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div> */}

                </div>
                

                <div>
                  <p className="mb-0">Don't have an account? <Link to="/register" className="text-white-50 fw-bold">SignUp/Register</Link>
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

Login.propTypes = {
  login:PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { login })(Login);