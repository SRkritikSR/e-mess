import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react'
// import Dashboard from '../component/dashboard/Dashboard';
import {API} from '../config'
import { Link } from 'react-router-dom';


export const Addcomment = ({auth: {user}}) => {
  const [formData,setFormData] = useState({   
    mess:'',
    comment:'',
    rating:'',
    username: '',
  });

  const {mess,comment,rating} = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]:e.target.value
  });

  const onSubmit = e => {
    // pass the role from localstorage, and the id from the global state
    e.preventDefault();
    const NewObj={...formData, username: user.email}
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    axios.post(`${API}/commentsection`,NewObj,config).then(res =>{
        alert("post successful");
    }).catch(err => alert(err));
    return (
      setFormData({
        mess:'',
        comment:'',
        rating:'',
      
      }),
      <Link to="/"></Link>
    )
  };
  if (!user) {return (
    <>
    Not Signed in, Loading ...
    </>
  )}
  return (
    <>
      
      <form onSubmit={onSubmit}>
      <div className="container-fluid has-bg-overlay text-center text-light has-height-lg middle-items" id="book-table">
      
       <div className="">
             <h2 className="section-title mb-5">Write Your Reviews</h2>
             <div className="row mb-5">
                 <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                     <input id="booktable" className="form-control form-control-lg custom-form-control" type="text" placeholder="Write Mess Name" name="mess" value={mess}  onChange={e=>onChange(e)} required/>
                 </div>
                 <div className="col-sm-6 col-md-6 col-xs-12 my-2">
                     <textarea type="text" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="Write Your Comment Here" name="comment" value={comment}  onChange={e=>onChange(e)} required ></textarea>
                 </div>
                  <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                     <input type="number" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="Rating" name="rating" value={rating}  min="1" max="5" onChange={e=>onChange(e)} required />
                 </div>
             </div>
             <input type="submit" className="btn btn-primary" id="rounded-btn" value="Post Reviews" />
         </div>

     </div>
     </form>

      
    </>
  )
}
Addcomment.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
  {
  auth: state.auth
});

export default connect(mapStateToProps)(Addcomment);
