
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react'
import { API } from '../../config';
import { Link, useLocation } from 'react-router-dom';
const EGGBHURJI = 40;
const EGGBOILED = 10;
const EGGOMELETTE = 40;
const EGGCRATE = 180;
const MILKGLASS = 10;
const price = {
    EggBhurji: 40,
    EggCrate: 180,
    EggOmelette: 20,
    EggBoiled: 10,
    MilkGlass: 10,
}
const ShowReceipt=({auth: {user}})=> {
    const URL = `${API}/receipt`;

    const [data,getData]=useState([])
    useEffect(() => {
        let isCancelled=false
        if (!isCancelled)
        fetchData()
        return ()=> {
            isCancelled=true
        }
    },[])
 
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                getData(()=> {
                    return (
                        response.filter((invoice)=> {
                            return (invoice.email===user.email)
                        })
                    )
                })
                
            })  
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
                    <div className="container card" style={{border: "1px black solid"}}>
                    <div className="card-body mx-4">
                        <div className="container">
                            <p className="my-5 mx-5" style={{fontSize: "30px",}}>Thank for your purchase</p>
                            <div className="row">
                                <ul className="list-unstyled">
                                    <li className="text-black">Name: {user.name}</li>
                                    <li className="text-muted mt-1"><span className="text-black">Invoice</span> {index+1}</li>
                                    <li className="text-black mt-1">{invoice.date}</li>
                                </ul>
                                <hr/>
                                    <hr/>
                                    </div>
                                  {invoice.itemName.map((item,index)=> {
                                    return (
                                        <div className="row" key={index}>
                                        <div className="col-xl-10">
                                            <p>{item}</p>
                                        </div>
                                        <div className="col-xl-2">
                                            <p className="float-end"    >
                                                {`${invoice.itemQuantity[index]} x ${price[item]}   ${invoice.itemQuantity[index]*price[item]}`} 
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
