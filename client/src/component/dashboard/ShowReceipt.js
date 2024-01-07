
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react'
import { API } from '../../config';
const ShowReceipt=({auth: {user}})=> {
    

    const [data,setData]=useState([])
    useEffect(() => {
        fetchData()
    },[])
 
 
    const fetchData = async() => {
         try {
            const res=await axios.get(`${API}/order`)
            setData(res.data)
         }
         catch (error) {
            console.error(error)
         }
    }   
    if (!data) return (
        <>
        <div style={{marginTop: "15%"}}>
            No Receipt to show
            Lets Buy some order.
        </div>
        </>
    )
    return (
        <Fragment>
            {data.map((invoice,index)=> {
                return (
                    <div className="container " style={{border: "1px black solid"}}>
                    <div className="card-body mx-4">
                        <div className="container">
                            <p className="my-5 mx-5" style={{fontSize: "30px",}}>Thank for your purchase</p>
                            <div className="row">
                                <ul className="list-unstyled">
                                    <li className="text-black">Name: {invoice.name}</li>
                                    <li className="text-muted mt-1"><span className="text-black">Invoice</span> {index+1}</li>
                                    <li className="text-black mt-1">{invoice.date}</li>
                                </ul>
                                <hr/>
                                    <hr/>
                                    </div>
                                  {invoice.items.map((item,index)=> {
                                    return (
                                        <div className="row" key={index}>
                                        <div className="col-xl-10">
                                            <p>{item.name}</p>
                                        </div>
                                        <div className="col-xl-2">
                                            <p className="float-end"    >
                                                {`${item.quantity} x ${item.price}   ${item.quantity*item.price}`} 
                                            </p>
                                        </div>
                                        <hr/>
                                    </div>
                                    )
                                  })}
                                    <div className="row">
                                        <hr style={{border: "2px solid black",}}/>
                                    </div>
                                    <div className="row text-black">
    
                                        <div className="col-xl-12">
                                            <p className="float-end fw-bold">Total: {invoice.amount}
                                            </p>
                                        </div>
                                        <hr style={{border: "2px solid black",}}/>
                                    </div>
                                    <div className="text-center" style={{marginTop: "90px",}}>
                                        <u className="text-info">BIRLA MESS</u>
                                    </div>
    
                            </div>
                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}

ShowReceipt.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
    {
        auth: state.auth
    });

export default connect(mapStateToProps)(ShowReceipt);
