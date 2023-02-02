import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import '../tabledata.css';


function TableData({auth: {user}}) {  
    const [data, getData] = useState([])
    const URL = 'http://localhost:5000/api/commentsection';

 
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
    }
    var arr = []
    data.map((item, i) => {
        console.log(item.username, user.email)
        if (item.username===user.email) {
        
        arr.push([item.mess,item.rating, item.comment])
        }
    })
    console.log(arr)
    return (
        <>
            {/* <h1>Reviews</h1> */}
            {/* <tbody>
                <tr>
                    <th>Mess Name</th>
                    <th>Comments</th>
                    <th>Rating</th>
                    
                </tr>
                {data.map((item, i) => (
                    
                    <tr key={i}>
                        <td>{item.mess}</td>
                        <td>{item.comment}</td>
                        <td>`${item.rating}`</td>
                        
                    </tr>
                ))}
            </tbody>
             */}




                 {/* <!-- REVIEWS Section  --> */}
     <div id="testmonial" className="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items" style={{marginTop:"8%"}}>
         <h2 className="section-title my-5 text-center">Your Reviews</h2>
         <div className="row mt-3 mb-5">
         {arr.map((item,i)=> (
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
            {/* <div className="col-md-4 my-3 my-md-0">
                <div className="testmonial-card">
                    <h3 className="testmonial-title">Steve Thomas</h3>
                    <h6 className="testmonial-subtitle">UX/UI Designer</h6>
                    <div className="testmonial-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minus obcaecati cum eligendi perferendis magni dolorum ipsum magnam, sunt reiciendis natus. Aperiam!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 my-3 my-md-0">
                <div className="testmonial-card">
                    <h3 className="testmonial-title">Miranda Joy</h3>
                    <h6 className="testmonial-subtitle">Graphic Designer</h6>
                    <div className="testmonial-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, nam. Earum nobis eligendi, dignissimos consequuntur blanditiis natus. Aperiam!</p>
                    </div>
                </div>
            </div> */}
        </>
         ))}
         </div>
         
     </div>

 
        </>
    );
}
 
// export default TableData;



TableData.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => (
    {
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(TableData);