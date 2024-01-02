import React, { Fragment, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { setAlert } from '../../actions/alerts';
import { employee_register } from '../../actions/auth';
import PropTypes from 'prop-types'

export const EmployeeRegister = ({isAuthenticated, setAlert, employee_register}) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenum: NaN,
    password: '',
    password2: ''
  });

  const { name, email,phonenum, password, password2 } = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", 'danger');
    }
    else {
      employee_register({ name, email, phonenum, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/admindashboard" />;
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
    <section className=" vh-100 " style={customGradient}>
      <form onSubmit={onSubmit}>
        <div className="container  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase" style={{ borderRadius: "1rem" }}>Employee Register</h2>
                    <p className="text-white-50 mb-5">Fill out the necessary details</p>
                    <div className="form-outline form-white mb-4">
                      <input id="typeEmailX" className="form-control form-control-lg" type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
                      <label className="form-label" for="typeEmailX">Name</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                      <label className="form-label" for="typeEmailX">Email </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="tel" className="form-control form-control-lg" placeholder="Phone Number" name="phonenum" value={phonenum} onChange={e => onChange(e)} required />
                      <label className="form-label" >PhoneNumber </label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg"
                        placeholder="Password"
                        name="password"
                        value={password} onChange={e => onChange(e)} required
                        minLength="6" />
                      <label className="form-label" for="typePasswordX">Password</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2} onChange={e => onChange(e)} required
                        minLength="6" />
                      <label className="form-label" for="typePasswordX">Password</label>
                    </div>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit" value="Register">Register</button>
                  </div>
                  <div>
                    <p className="mb-0">Already Signed up <a href="/employee_login" className="text-white-50 fw-bold">Login</a>
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

EmployeeRegister.propTypes = {
  setAlert: PropTypes.func.isRequired,
  employee_register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});
// think that mapStateToProps, setalert and employeeregister are passed as argument to RemployeeRegister
export default connect(mapStateToProps, { setAlert, employee_register })(EmployeeRegister);