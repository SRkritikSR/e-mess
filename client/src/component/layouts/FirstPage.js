import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Addcomment from "../../addTable/Addcomment";
import TableData from "../dashboard/Showcomment";
import store from '../../store';
import Login from "../auth/Login";
import {API} from "../../config";
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import AddReceipt from '../../addTable/AddReceipt';
let creditVal = 0
const MenuItems = {
    Breakfast: ["Kachori, Banana, Egg-2pcs", "Pav-Bhaji, Sooji-Halwa", "Aalu-Paratha, Butter", "Chana-Poori", "Aalu-Paratha, Butter", "Panner-Paratha, Butter", "Chole-Bhature"],
    Lunch: ["Rajma, Boondi-Raita", "Kadhi, Chokha", "Chole", "Masoor-Dal", "Rajma, Kumaoni-Raita", "Bhatt, Yellow Dal", "Veg-Pualo, Papad, Dahi"],
    Dinner: ["Dinner", "Dinner", "Dinner", "Dinner", "Dinner", "Dinner", "Dinner",],
}
const WeekDays = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const HomePage=()=> {
    return (
        <>
             <section className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="x-large">Mess Management</h1>
                        <div className="buttons">

                            {/* <!-- header --> */}
                            <header id="home" className="header" style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                <div className=" text-white text-center">
                                    <h1 className="display-2 font-weight-bold my-3">Birla Mess</h1>
                                    <h2 className="display-4 mb-5"><i>Always fresh</i></h2>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
const MenuTable=()=> {
    return (
        <>
          <div class="bg-dark">
                <h2 className="section-title  text-center">OUR MENU</h2>
                <table class="table container table-dark">
                    <thead>
                        <tr style={{ width: "12.5%", height: "30%" }}>
                            {WeekDays.map((elem, index) => {
                                return (
                                    <th style={{ backgroundColor: "#ff124f", color: "white" }} key={index} scope="col">{elem}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ width: "100%", height: "30%" }}>
                            <th style={{ backgroundColor: "#ff124f", color: "black", whiteSpace: "nowrap", verticalAlign: 'middle' }} scope="row">BreakFast</th>
                            {MenuItems.Breakfast.map((BreakfastItems, index) => {
                                return (
                                    <td key={index}>{BreakfastItems}<br /><br />
                                        <button className='btn-sm btn-danger'
                                            onClick={() => {
                                                return (
                                                    window.alert("Meal Booked for Tommorrow")
                                                )
                                            }}>Book for tommorow</button>
                                    </td>
                                )
                            })}
                        </tr>
                        <tr style={{ width: "100%", height: "30%" }}>
                            <th style={{ backgroundColor: "#ff124f", color: "black", }} scope="row">Lunch</th>
                            {MenuItems.Lunch.map((LunchItems, index) => {
                                return (
                                    <td key={index}>{LunchItems}<br /><br />
                                        <button className='btn-sm btn-danger'
                                            onClick={() => {
                                                return (
                                                    window.alert("Meal Booked for Tommorrow")
                                                )
                                            }}>Book for tommorow</button>
                                    </td>
                                )
                            })}
                        </tr>
                        <tr style={{ width: "100 %", height: "30%" }}>
                            <th style={{ backgroundColor: "#ff124f", color: "black", }} scope="row">Dinner</th>
                            {MenuItems.Dinner.map((DinnerItems, index) => {
                                return (
                                    <td key={index}>{DinnerItems}<br /><br />
                                        <button className='btn-sm btn-danger'
                                            onClick={() => {
                                                return (
                                                    window.alert("Meal Booked for Tommorrow")
                                                )
                                            }}>Book for tommorow</button>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
            </>
    )
}
const AboutUs = () => {
    return (
        <>
            {/* <!--  About Section  --> */}
            <div id="about" className="container-fluid wow fadeIn" data-wow-duration="1.5s">
                <div className="row">
                    <div className="col-lg-6 " style={{ background: "url(/img/about-section.jpg)  center center" }}></div>
                    <div className="col-lg-6">
                        <div className="row justify-content-center" style={{ backgroundColor: "#343a40", color: "white" }}>
                            <div className="col-sm-8 py-5 my-5">
                                <h2 className="mb-4">About Us</h2>
                                <p>The Birla Mess is a NON-PROFIT, STUDENT-MANAGED MESS.  <br /><br />At E Mess, we think good food and quality ingredients should be available to everyone at prices that don’t cost an arm and a leg. We started operating in San Francisco in 2000. Since then, we’ve seen plenty of changes in the way people approach food - and we couldn’t be more excited. Come and check us out in person and discover something delicious today..</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const AddOns = ({ credits, setCredits, quantity, setQuantity, incNum, decNum, DeductCredit }) => {
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
                            <div className="col-md-3">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img src="/img/Egg-Bhurji.jpeg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" height="250vh" />
                                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', margin: '2%' }}>
                                            <button className='btn btn-danger ti-minus' value={40} name="EggBhurji" onClick={(e) => (decNum(e))} ><h2></h2></button>
                                            <div className='btn btn-danger'><h2 style={{ color: 'black' }}>{`${quantity["EggBhurji"]}`}</h2></div>
                                            <button className='btn btn-danger ti-plus' value={40} name="EggBhurji" onClick={(e) => (incNum(e))}><h2></h2></button>
-                                        </div>
                                        <h4 className="pt20 pb20">Egg-Bhurji</h4>
                                        <p className="text-white">NON-VEG</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img src="/img/Egg-Crate.jpeg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" height="250vh" />
                                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', margin: '2%' }}>
                                            <button className='btn btn-danger ti-minus' value={180} name="EggCrate" onClick={(e) => (decNum(e))} ><h2></h2></button>
                                            <div className='btn btn-danger'><h2 style={{ color: 'black' }}>{`${quantity["EggCrate"]}`}</h2></div>
                                            <button className='btn btn-danger ti-plus' value={180} name="EggCrate" onClick={(e) => (incNum(e))}><h2></h2></button>
                                        </div>
                                        <h4 className="pt20 pb20">Egg-Crate</h4>
                                        <p className="text-white">NON-VEG</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img src="/img/Egg-Omelette.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" style={{ objectFit: "cover" }} height="250vh" />
                                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', margin: '2%' }}>
                                            <button className='btn btn-danger ti-minus' value={20} name="EggOmelette" onClick={(e) => (decNum(e))} ><h2></h2></button>
                                            <div className='btn btn-danger'><h2 style={{ color: 'black' }}>{`${quantity["EggOmelette"]}`}</h2></div>
                                            <button className='btn btn-danger ti-plus' value={20} name="EggOmelette" onClick={(e) => (incNum(e))}><h2></h2></button>
                                        </div>
                                        <h4 className="pt20 pb20">Egg-Omelette</h4>
                                        <p className="text-white">NON-VEG</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img src="/img/Boiled-Egg.jpeg" className="rounded-0 card-img-top mg-responsive" height="250vh" />
                                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', margin: '2%' }}>
                                            <button className='btn btn-danger ti-minus' value={10} name="EggBoiled" onClick={(e) => (decNum(e))} ><h2></h2></button>
                                            <div className='btn btn-danger'><h2 style={{ color: 'black' }}>{`${quantity["EggBoiled"]}`}</h2></div>
                                            <button className='btn btn-danger ti-plus' value={10} name="EggBoiled" onClick={(e) => (incNum(e))}><h2></h2></button>
                                        </div>
                                        <h4 className="pt20 pb20">Egg-Boiled</h4>
                                        <p className="text-white">NON-VEG</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img src="/img/Milk-Glass.jpeg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" height="250vh" />
                                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', margin: '2%' }}>
                                            <button className='btn btn-danger ti-minus' value={10} name="MilkGlass" onClick={(e) => (decNum(e))} ><h2></h2></button>
                                            <div className='btn btn-danger'><h2 style={{ color: 'black', }}>{`${quantity["MilkGlass"]}`}</h2></div>
                                            <button className='btn btn-danger ti-plus' value={10} name="MilkGlass" onClick={(e) => (incNum(e))}><h2></h2></ button>
                                        </div>
                                        <h4 className="pt20 pb20">Milk-Glass</h4>
                                        <p className="text-white">VEG</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <button className='btn btn-lg' onClick={(e) => {
                    return (
                        DeductCredit()
                    )
                }} style={{ backgroundColor: "#ff124f" }}><Link  className="nav-link" state={{
                    quantity: quantity,
                    credits: credits - creditVal
                }} to="add_receipt">Create Receipt</Link></button>
            </div>
        </>
    )
}
export const FirstPage = (admin) => {
    const URL = `${API}/users`;

    const [data, getData] = useState([])
    useEffect(() => {
        console.log("First page is rendering initially now.")
        fetchData()
    }, [])


    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                getData(response);
            })
    }
    const [credits, setCredits] = useState(100000)
    let [quantity, setQuantity] = useState({
        EggBhurji: 0,
        EggCrate: 0,
        EggOmelette: 0,
        EggBoiled: 0,
        MilkGlass: 0,
    });

    let incNum = (e) => {
        if (quantity[e.target.name] < 10000) {

            setQuantity((previous) => {
                return (
                    { ...quantity, [e.target.name]: previous[e.target.name] + Number([e.target.value]) }
                )
            })
        }
    };
    let decNum = (e) => {
        if (quantity[e.target.name] > 0) {
            setQuantity((previous) => {
                return (
                    { ...quantity, [e.target.name]: previous[e.target.name] - Number([e.target.value]) }
                )
            })
        }
    }
    const DeductCredit = () => {

        Object.values(quantity).map((item) => {

            creditVal = creditVal + item
            if (item > 0) window.alert(`Rs ${item} deducted`)
        })
        if (credits > 0) {
            setCredits((prev) => {
                return (
                    prev - creditVal
                )
            })
            window.alert(`Rs ${creditVal} deducted. Total reamaining credit is ${credits - creditVal}`)
        }
        else {
            window.alert(`CREDIT DISCHARGED \n contact admin for more`)
        }
    }
    const SetCreditFunc = (creditVal) => {
        if (credits > 0) {
            setCredits(credits - creditVal)
            window.alert(`Rs ${creditVal} deducted, `)
        }
        else {
            window.alert(`CREDIT DISCHARGED \n contact admin for more`)
        }
    }
    return (
        <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
            <HomePage/>
            <AboutUs />
            <AddOns credits={credits} setCredits={setCredits} quantity={quantity} setQuantity={setQuantity} incNum={incNum} decNum={decNum} DeductCredit={DeductCredit} />
            <MenuTable/>
        </div>

    )
}



FirstPage.propTypes = {
    admin: PropTypes.string,
};
const mapStateToProps = (state) => ({
    admin: state.auth,
  });
  
export default connect(mapStateToProps)(FirstPage);



