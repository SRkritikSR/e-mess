
import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { menu_item } from '../actions/auth';
import { API } from '../config'


export const Additem = () => {

  const [formData, setFormData] = useState({
    mess: '',
    item: ''
  });

  const { mess, item } = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios.post(`${API}/menu`, formData, config).then(res => {
      alert("post successful");
      setFormData({
        mess: '',
        item: ''
      })

    }).catch(err => alert(err));
    // menu_item(mess,item);
    return (
      <Navigate to="/dashboard" />
    )
  };

  return (
    <Fragment>      <form onSubmit={onSubmit}>
      <div className="container-fluid has-bg-overlay text-center text-light has-height-lg middle-items" id="book-table">

        <div className="">
          <h2 className="large text-primary">Add Item</h2>
          <div className="row mb-5 justify-content-center">
            <div className="col-sm-6 col-md-6 col-xs-12 my-2 ">
              <input id="booktable" className="form-control form-control-lg custom-form-control" type="text" name="mess" value={mess} onChange={e => onChange(e)} required placeholder="Mess Name" />
            </div>
            <div className="col-sm-6 col-md-6 col-xs-12 my-2">
              <input type="text" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="Item Name" name="item" value={item} onChange={e => onChange(e)} required />
            </div>
          </div>
          <input type="submit" className="btn btn-outlline-primary" id="rounded-btn" value="Add Items " />
        </div>

      </div>
    </form>


    </Fragment>
  )
}

// Additem.propTypes = {
//   login:PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// }

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated
// });


export default Additem;