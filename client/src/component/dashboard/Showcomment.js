import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import '../tabledata.css';
import { API } from '../../config';


function Showcomment({auth: {user}}) {  
    const [data, getData] = useState([])
    const userId=user?user._id:""
    const URL = `${API}/commentsection/userId/${userId}`
    useEffect(() => {
        fetchData()
    },[])
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                getData(response);
            })
            .catch((error)=> {
                console.error(error)
            })
    }
    var arr = []
    data.map((item, i) => {
        
        arr.push([item.mess,item.rating, item.comment])
        
    })
    if (!user) return (
        <div>
            Loading
        </div>
    )
    return (
        <>
          
     <div id="testmonial" className="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" >
         <h2 className="section-title my-5 text-center">Your Reviews</h2>
         <div className="row mt-3 mb-5">
         {user && arr.map((item,i)=> (
            <>
            <div key={i} className="col-md-4 my-5 " style={{border: "solid red 0.5"}}>
                <div className="testmonial-card">
                    <h3 className="testmonial-title">{item[0]}</h3>
                    <h6 className="testmonial-subtitle">{item[1]}</h6>
                    <div className="testmonial-body">
                        <p>{item[2]}</p>
                    </div>
                </div>
            </div>
        </>
         ))}
         </div>
     </div>

 
        </>
    );
}
 
// export default Showcomment;



Showcomment.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => (
    {
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(Showcomment);