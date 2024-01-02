import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react'
// import Dashboard from '../component/dashboard/Dashboard';
import { API } from '../config'
import { Link, useLocation } from 'react-router-dom';

const AddReceipt = ({ auth: { user } }) => {

    const location = useLocation()
    const { credits, quantity } = location.state;
    const date = new Date()
    const keys = Object.keys(quantity)
    const price = {
        EggBhurji: 40,
        EggCrate: 180,
        EggOmelette: 20,
        EggBoiled: 10,
        MilkGlass: 10,
    }
    const ItemOrdered = keys.filter((items) => {
        return (
            (quantity[items]) != 0
        )
    })
        // gives all the element which are ordered
    let ItemPrice=[]
    let sum=0
    ItemOrdered.map((item)=> {
        ItemPrice.push(quantity[item]/price[item])
        sum=sum+quantity[item]
    })
    const onConfirm = (e) => {
        const NewObj = {
            name: user.name,
            email: user.email,
            credits: credits - sum,
            itemName: ItemOrdered,
            itemQuantity: ItemPrice,
            amount: sum,
        }
        e.preventDefault();
        // const NewObj={name: user.name}
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.post(`${API}/receipt`, NewObj, config).then(res => {
            alert("post successful");
        }).catch(err => alert(err));
        return (
            <Link to="show_receipt"></Link>
        )
        //             // return (
        //   setFormData({
        //     mess:'',
        //     comment:'',
        //     rating:'',

        //   }),
        //   <Link to="/"></Link>
        // )
          };

        return (
            <Fragment   >
                <form >
                    <div class="form-group" style={{ marginTop: "15%" }}>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input  type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.name} />
                        <small id="emailHelp" class="form-text text-muted">We have automatically entered your name.</small>
                    </div>
                    <div class="form-group">
                        <label htmlFor="Today's Date">Date</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" value={date} readOnly />
                        <small id="dateHelp" class="form-text text-muted">We have automatically entered the present date and time.</small>
                    </div>
                    <div class="form-group form-check">
                        <table className='container table'>

                            <thead>
                                <tr>
                                    <th scope="col">Item-Name</th>
                                    <th scope="col">Item-Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total-Amount</th>
                                </tr>
                            </thead>

                            {ItemOrdered.map((item, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr>
                                            <th scope="row">{item}</th>
                                            <td>{price[item]}</td>
                                            <td>{ItemPrice[index]}</td>
                                            <td>{quantity[item]}</td>
                                        </tr>
                                    </tbody>
                                )
                            })}

                        </table>

                        <button type="submit" class="btn btn-primary" onClick={(e)=> {
                            return (
                                onConfirm(e)
                            )
                        }} style={{ display: 'flex', justifyContent: 'center' }}>Confirm and Save</button>
                    </div>

                </form>
            </Fragment>
        )
    }

    AddReceipt.propTypes = {
        auth: PropTypes.object.isRequired
    };

    const mapStateToProps = (state) => (
        {
            auth: state.auth
        });

    export default connect(mapStateToProps)(AddReceipt);
