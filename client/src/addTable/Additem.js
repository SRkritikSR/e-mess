
import axios from 'axios';
    import React, { Fragment, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { menu_item } from '../actions/auth';
import {API} from '../config'


export const Additem = () => {

  const [formData,setFormData] = useState({
    mess:'',
    item:''
  });

  const {mess,item} = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]:e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    axios.post(`${API}/menu`,formData,config).then(res =>{
        alert("post successful");
        setFormData({
          mess:'',
          item:''
        })

    }).catch(err => alert(err));
    // menu_item(mess,item);
    return (
      <Navigate to="/dashboard"/>
    )
  };

//   //Redirect if looged in
//   if (isAuthenticated) {
//     // console.log(0);
//     return <Navigate to="/dashboard" />;
//   }

  return (
    <Fragment>

      {/* <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Mess Name" name="mess" value={mess}  onChange={e=>onChange(e)} required />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Item Name" name="item" value={item}  onChange={e=>onChange(e)} required />
        </div>  

        <input type="submit" className="btn btn-primary" value="save" />
      </form> */}
      <form onSubmit={onSubmit}>
      <div className="container-fluid has-bg-overlay text-center text-light has-height-lg middle-items" id="book-table">
      
       <div className="">
       <h2 className="large text-primary">Add Item</h2>
             <div className="row mb-5 justify-content-center">
                 <div className="col-sm-6 col-md-6 col-xs-12 my-2 ">
                     <input id="booktable" className="form-control form-control-lg custom-form-control" type="text" name="mess" value={mess}  onChange={e=>onChange(e)} required  placeholder="Mess Name"/>
                 </div>
                 {/* <div className="col-sm-6 col-md-6 col-xs-12 my-2">
                     <textarea type="text" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="Write Your Comment Here" name="comment" value={comment}  onChange={e=>onChange(e)} required ></textarea>
                 </div> */}
                  <div className="col-sm-6 col-md-6 col-xs-12 my-2">
                     {/* <input type="number" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="Rating" name="rating" value={rating}  min="1" max="5" onChange={e=>onChange(e)} required /> */}
                     <input type="text"id="booktable" className="form-control form-control-lg custom-form-control" placeholder="Item Name" name="item" value={item}  onChange={e=>onChange(e)} required />
                 </div>
                 {/* <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                     <input type="date" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="12/12/12"/>
                 </div> 
                 <input type="number" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="Rating" name="rating" />  */}
                 {/* value={rating} */}
             </div>
             {/* <a href="#" type='submit' className="btn btn-lg btn-primary" id="rounded-btn" value="save">Post Review</a> */}
             <input type="submit" className="btn btn-primary" id="rounded-btn" value="Add Items " />
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