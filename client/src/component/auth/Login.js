import React, { Fragment, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


export const Login = ({ login, isAuthenticated }) => {
  const [isStudent, setStudent] = useState(false)
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
    console.log(email, password)
    login(email, password);
  };

  //Redirect if looged in
  if (isAuthenticated) {
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
  const cardStyle = {
    width: '200px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '50%',
    cursor: 'pointer',
  };
  if (isStudent) {
    return (
      <section style={{ marginTop: "10%" }}>
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
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                        <label className="form-label" htmlFor="typeEmailX">Email</label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" className="form-control form-control-lg"
                          placeholder="Password"
                          name="password"
                          value={password} onChange={e => onChange(e)} required
                          minLength="6" />
                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                      </div>
                      <button className="btn btn-outline-light btn-lg px-5" type="submit" >Login</button>
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
  return (

    <div style={{ textAlign: 'center', marginTop: '5%' }}>
      <h1>Welcome to Your Website</h1>
      <p>Please select your role:</p>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button style={{ border: 'none', outline: 'none', backgroundColor: 'transparent' }} onClick={() => setStudent((prev) => !prev)}>
          <div style={cardStyle}>
            <img
              src="img/student.svg"
              alt="Student"
              style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
            />
            <p>Student</p>
          </div>
        </button>

        <Link to="/employee_login">
          <div style={cardStyle}>
            <img
              src="/img/employee.svg"
              alt="Mess Worker"
              style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
            />
            <p>Mess Worker</p>
          </div>
        </Link>

        <Link to="/admin_login">
          <div style={cardStyle}>
            <img
              src="img/admin.svg"
              alt="Admin"
              style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
            />
            <p>Admin</p>
          </div>
        </Link>
      </div>
    </div>

  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { login })(Login);