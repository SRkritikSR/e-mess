import React, { Fragment, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { employee_login } from '../../actions/auth';


export const Employee = ({ employee_login, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    employee_login(email, password);
  };

  //Redirect if employee looged in
  if (isAuthenticated) {
    console.log("employee logged in ");
    return <Navigate to="/" />;
  }
  const customGradient = {

    /* fallback for old browsers */
    background: "#6a11cb",


    /* Chrome 10-25, Safari 5.1-6 */
    background: "-webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))",

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))",

  }
  return (
    <section style={{ marginTop: "10%" }} >
      <form onSubmit={onSubmit}>
        <div className="container  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" >
                <div className="card-body text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase" style={{ borderRadius: "1rem" }}> Employee Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                      <label className="form-label" for="typeEmailX">Email</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg"
                        placeholder="Password"
                        name="password"
                        value={password} onChange={e => onChange(e)} required
                        minLength="6" />
                      <label className="form-label" for="typePasswordX">Password</label>
                    </div>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit" value="login">Login</button>
                  </div>
                  <div>
                    <p className="mb-0">Don't have an account? <Link to="/employee_register" className="text-white-50 fw-bold">SignUp/Register</Link>
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

Employee.propTypes = {
  employee_login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});


export default connect(mapStateToProps, { employee_login })(Employee);