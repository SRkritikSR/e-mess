import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Addcomment from "../../addTable/Addcomment";
import TableData from "../dashboard/Showcomment";
import store from '../../store';
import Login from "../auth/Login";
import { API } from "../../config";
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import AddReceipt from '../../addTable/AddReceipt';
import AddOns from './AddOns';
let creditVal = 0

const HomePage = () => {
    return (
            <section className="landing">
                <div >
                    <div className="landing-inner">
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
        
    )
}
const MenuTable = () => {
    const [menuData,setMenuData]=useState([])
    const fetchMenu = async () => {
        try {
            const res = await axios.get(`${API}/food/category/dinner lunch breakfast`)
            setMenuData(res.data)
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchMenu()
    }, [])
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const organizedData = {};
    menuData.forEach(item => {
      if (!organizedData[item.category]) {
        organizedData[item.category] = {};
      }
      organizedData[item.category][item.day] = item.name;
    });
  
    return (
      <>
        <div className="bg-dark">
          <h2 className="section-title text-center">OUR MENU</h2>
          <table className="table container table-dark">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#ff124f", color: "white" }}></th>
                {weekdays.map((day, index) => (
                  <th key={index} style={{ backgroundColor: "#ff124f", color: "white" }}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(organizedData).map((category, index) => (
                <tr key={index}>
                  <th style={{ backgroundColor: "#ff124f", color: "black", whiteSpace: "nowrap", verticalAlign: 'middle' }} scope="row">{category}</th>
                  {weekdays.map((day, dayIndex) => (
                    <td key={dayIndex}>
                      {organizedData[category][day] && (
                        <>
                          {organizedData[category][day]}<br /><br />
                          <button
                            className='btn-sm btn-danger'
                            onClick={() => window.alert("Meal Booked for Tomorrow")}
                          >
                            Book for tomorrow
                          </button>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
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

export const FirstPage = (admin) => {
    const URL = `${API}/users`;

    const [data, getData] = useState([])
    useEffect(() => {
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
        <>
            <HomePage />
            <AboutUs />
            <AddOns credits={credits} setCredits={setCredits} quantity={quantity} setQuantity={setQuantity} incNum={incNum} decNum={decNum} DeductCredit={DeductCredit} />
            <MenuTable />
        </>

    )
}



FirstPage.propTypes = {
    admin: PropTypes.string,
};
const mapStateToProps = (state) => ({
    admin: state.auth,
});

export default connect(mapStateToProps)(FirstPage);



