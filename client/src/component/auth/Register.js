import React, { Fragment, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { setAlert } from '../../actions/alerts';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'

export const Register = ({ setAlert, register, isAuthenticated }) => {
  const [selectedBranch, setSelectedBranch] = useState("C.S.E.")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: 0,
    branch: " ",
    password: '',
    password2: ''
  });

  const { name, email, year, branch, password, password2 } = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });
  const onSelectBranch = e => setSelectedBranch(
    e.target.value
  )
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", 'danger');
    }
    else {
      const branch=selectedBranch
      register({ name, email, branch, year, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  const customGradient = {

    // /* fallback for old browsers */
    // background: "#6a11cb",

    // /* Chrome 10-25, Safari 5.1-6 */
    // background: "-webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))",

    // /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    // background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))",

  }
  return (
    <section className=" vh-100 " style={customGradient}>
      <form onSubmit={onSubmit}>
        <div className="container  mt-0 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" >
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase" style={{ borderRadius: "1rem" }}>Register</h2>
                    <p className="text-white-50 mb-5">Fill out the necessary details</p>

                    <div className="form-outline form-white mb-4">
                      {/* <input type="email"   placeholder="Email Address" name="email" value={email}  onChange={e=>onChange(e)} required  /> */}
                      <input id="typeEmailX" className="form-control form-control-lg" type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
                      <label className="form-label" for="typeEmailX">Name</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      {/* <input type="email"   placeholder="Email Address" name="email" value={email}  onChange={e=>onChange(e)} required  /> */}
                      {/* <input id="typeEmailX" className="form-control form-control-lg" type="text" placeholder="Name" name="name" value={name} onChange={e=>onChange(e)}  required /> */}
                      <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                      <label className="form-label" for="typeEmailX">Email </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      {/* <input type="email"   placeholder="Email Address" name="email" value={email}  onChange={e=>onChange(e)} required  /> */}
                      <input className="form-control form-control-lg" type="number" placeholder="year" name="year" value={year} onChange={e => onChange(e)} required min={1} max={4}/>
                      <label className="form-label" for="typeEmailX">Year</label>
                    </div>



                    <div className="form-outline form-white mb-4">
                      {/* <input type="email"   placeholder="Email Address" name="email" value={email}  onChange={e=>onChange(e)} required  /> */}
                      <div>
                        <label className="form-label mx-2" for="typeEmailX"> <input type='radio' value="C.S.E." onChange={(e) => setSelectedBranch(e.target.value)} checked={selectedBranch == "C.S.E." ? true : false} />C.S.E</label>
                        <label className="form-label mx-2" for="typeEmailX"> <input type='radio' value="E.C.E." checked={selectedBranch == "E.C.E." ? true : false} onChange={(e) => setSelectedBranch(e.target.value)} />E.C.E</label>
                        <label className="form-label mx-2" for="typeEmailX"> <input type='radio' value="M.C.A." checked={selectedBranch == "M.C.A." ? true : false} onChange={(e) => setSelectedBranch(e.target.value)} />M.C.A</label>
                      </div>
                      <label className='form-label mx-2' >Select Branch</label>
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
                    <p className="mb-0">Already Signed up <a href="/Login" className="text-white-50 fw-bold">Login</a>
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);