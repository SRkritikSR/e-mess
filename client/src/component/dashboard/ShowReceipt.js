
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react'
import { API } from '../../config';
const ShowReceipt = ({ auth: { user } }) => {
    const [data, setData] = useState([])
    const [canCancel, setCancel] = useState(true)
    useEffect(() => {
        fetchData()
    }, [])
    const cancelOrder=(e,index)=> {
        if (data[index]) {
            console.log((new Date()-new Date(data[index].date))/60000)
            if ((new Date()-new Date(data[index].date))>(20*60000)) {
                alert("Cannot cancel the alloted time has been passed")
            }
            else {
                alert("You can cancel now")
            }
        }
    }
    const fetchData = async () => {
        const userId=user?user._id:"";
        try {
            const res = await axios.get(`${API}/order/userId/${userId}`)
            setData(res.data)
        }
        catch (error) {
            console.error(error)
        }
    }
    if (!data) return (
        <>
            <div style={{ marginTop: "15%" }}>
                No Receipt to show
                Lets Buy some order.
            </div>
        </>
    )
    return (
        <Fragment>
            {data.map((invoice, index) => {
                console.log(data[index].isConfirmed)
                return (
                    <div className="container w-50" style={{ border: `1px ${data[index].isConfirmed ? "green" : "red"} solid` }}>
                        <div className="card-body mx-4">
                            <div className="container w-100">
                            <p className={`my-2 mx-5 text-center ${data[index].isConfirmed ? "text-success" : "text-warning"}`} style={{ fontSize: "30px", }}>Order: {data[index].isConfirmed?"Confirmed!!": "Pending.."}</p>
                                <p className="my-2 mx-5 text-center" style={{ fontSize: "30px", }}>Thank for your purchase</p>
                                <div className="row text-center">
                                    <ul className="list-unstyled">
                                        <li className="text-black">Name: {invoice.name}</li>
                                        <li className="text-muted mt-1"><span className="text-black">Invoice</span> {index + 1}</li>
                                        <li className="text-black mt-1">{new Date(invoice.date).toLocaleString()}</li>
                                    </ul>
                                    <hr />
                                    <hr />
                                </div>
                                <table className='table table-responsive-sm table-borderless' style={{ color: "black" }} >
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
                                    <button type="button" className="btn btn-danger text-center my-2" onClick={(e)=> {
                                        cancelOrder(e,index)
                                    }}>Cancel</button>
                                </div>


                                <div className="text-center my-3">
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
