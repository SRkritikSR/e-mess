
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react'
import { API } from '../../config';
const ShowOrder = ({ auth: { user } }) => {
    const [data, setData] = useState([])
    const [canCancel, setCancel] = useState(true)
    useEffect(() => {
        fetchData()
    }, [])
    const confirmOrder=async(e,index) => {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        if (window. confirm("Confirm Order")) {
            try {
                const res=await axios.put(`${API}/order/confirmOrder`,{_id: data[index]._id},config)
            }
            catch (error){
                console.error(error)
            }
        }

    }
    const cancelOrder = (e, index) => {
        if (data[index]) {
            console.log((new Date() - new Date(data[index].date)) / 60000)
            if ((new Date() - new Date(data[index].date)) > (20 * 60000)) {
                alert("Cannot cancel the alloted time has been passed")
            }
            else {
                alert("You can cancel now")
            }
        }
    }
    const fetchData = async () => {
        const userId = user ? user._id : "";
        try {
            const res = await axios.get(`${API}/order/userId/${userId}?all=true`)
            setData(res.data)
        }
        catch (error) {
            console.error(error)
        }
    }
    if (!data) return (
        <>
            <div style={{ marginTop: "15%" }}>
                No Order to show
                Lets Buy some order.
            </div>
        </>
    )
    return (
        <div className='container-fluid my-4 '>
            <div className='row border border-danger mx-auto px-auto'>
            {data.map((invoice, index) => {
                return (
                    <div className={`col-lg-4 mb-4 mx-auto border border-black bg-gradient ${invoice.isCancelled?'bg-success':'bg-warning'} opacity-50 `} >
                        <div className="card-body px-0">
                            <div className="container w-100 px-0 mt-0">
                                <div className="row text-center     " >
                                    <ul className="list-unstyled d-inline">
                                        <li className="text-black">Name: {invoice.name}</li>
                                        <li className="text-muted mt-1"><span className="text-black">Invoice</span> {index + 1}</li>
                                        <li className="text-black mt-1">{new Date(invoice.date).toLocaleString()}</li>
                                    </ul>
                                </div>
                                <hr />
                                <hr />
                                <table className='table table-responsive-md table-borderless ' style={{ color: "black" }} >
                                    <thead>
                                        <tr>
                                            <th scope='column '>S.No. </th>
                                            <th scope='column'>Particulars </th>
                                            <th scope='column' className='text-center'>Quantity</th>
                                            <th scope='column' className='text-center'>Rate</th>
                                            <th scope='column' className='text-center'>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {invoice.items.map((item, index) => {
                                            return (
                                                <tr className=''>
                                                    <th scope='row'>{index + 1}</th>
                                                    <td>{item.name}</td>
                                                    <td className='text-center' >{item.quantity}</td>
                                                    <td className='text-center'>{item.price}</td>
                                                    <td className='text-center'>{item.quantity * item.price}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <div className="row text-center">
                                    <hr style={{ border: "2px solid black", }} />
                                </div>
                                <div className="row text-black">

                                    <div className="col-xl-12 text-center">
                                        <p className="fw-bold">Total: {invoice.amount}
                                        </p>
                                    </div>
                                    <hr style={{ border: "2px solid black", }} />
                                </div>
                                <div className='text-center'>
                                    <button type="button" className="btn btn-danger text-center my-2" onClick={(e) => {
                                        cancelOrder(e, index)
                                    }}>Cancel</button>
                                </div>
                                <div className='text-center'>
                                    <button type="button" className="btn btn-danger text-center my-2" onClick={(e) => {
                                        confirmOrder(e, index)
                                    }}>Confirm</button>
                                </div>

                                <div className="text-center my-3">
                                    <u className="text-info">BIRLA MESS</u>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

ShowOrder.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
    {
        auth: state.auth
    });

export default connect(mapStateToProps)(ShowOrder);
