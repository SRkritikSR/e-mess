
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { API } from "../../config";
import axios from "axios";
const AddOns = ({ auth: {user} }) => {
    const [addOnData, setAddOnData] = useState([])
    const [items, setItems] = useState([])
    const fetchAddOns = async () => {
        try {
            const res = await axios.get(`${API}/food/category/addOns`)
            const newArray = []
            if (res.data) {

                const newItems = res.data.map((elem, index) => {

                    const newObj = { ...elem, quantity: 0 }
                    newArray.push(newObj)
                })
            }
            setItems(newArray)
            setAddOnData(res.data)
        }
        catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        fetchAddOns()
    }, [])
    const updateQuantity = (e, index, unary) => {
        setItems((prev) => {
          const updatedItems = [...prev];
          const oldData = updatedItems[index];
          updatedItems[index] = { ...oldData, quantity: oldData.quantity + unary };
          return updatedItems;
        });
      };
    const MakeOrder=async()=> {
        let amount=0;
        const orders=items.filter((elem)=> {
            if (elem.quantity>0) {
                amount=amount+elem.price*elem.quantity
            }
            return (
                elem.quantity>0
            )
        });
        const postData={
            name: user.name,
            user:user._id,
            items:orders,
            amount:amount,
            messName: "Boys-Mess",
        }
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res=await axios.post(`${API}/order`,postData,config)
            console.log(res)
        }
        catch(error) {
            console.error(error)
        }
    }
    return (    
        <>
            {/* <!-- Add-ons Section  --> */}
            <div id="blog" className="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
                <div className="row justify-content-center">
                    <div className="col-sm-7 col-md-4 mb-5">
                        <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#foods" role="tab" aria-controls="pills-home" aria-selected="true" style={{ backgroundColor: "red", }}>Add-ons</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container tab-content" id="pills-tabContent" style={{ border: "5px dashed red", padding: "2%" }}>
                    <div className="tab-pane fade show active" id="foods" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            {items && items.map((elem, index) => {

                                return (
                                    <div className="col-md-3 mt-5">
                                        <div className="card bg-transparent border my-3 my-md-0">
                                            <img src={`img/${elem["name"]}.jpeg`} className="rounded-0 card-img-top mg-responsive" height="250vh" />
                                            <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                                                <div style={{ display: 'flex', justifyContent: 'center', margin: '2%' }}>
                                                    <button className='btn btn-danger ti-minus' value={elem["price"]} name={elem["name"]} onClick={(e) => {
                                                        updateQuantity(e, index, -1)
                                                    }}  ><h2></h2></button>
                                                    <div className='btn btn-danger'><h2 style={{ color: 'black' }}>{`${elem["quantity"]}`}</h2></div>
                                                    <button className='btn btn-danger ti-plus' value={elem["price"]} name={elem["name"]} onClick={(e) => {
                                                        updateQuantity(e, index, 1)
                                                    }}   ><h2></h2></button>
                                                </div>
                                                <h4 className="pt20 pb20 ">{elem["name"]}</h4>
                                                {/* <p className="text-white">NON-VEG</p> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                            }
                        </div>
                    </div>
                </div>
                <button className='btn btn-lg' onClick={(e) => {
                    return (
                        MakeOrder()
                    )
                }} style={{ backgroundColor: "#ff124f" }}>
                    </button>
            </div>
        </>
    )
}
AddOns.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
    {
        auth: state.auth
    });

export default connect(mapStateToProps)(AddOns);
