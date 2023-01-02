import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Addcomment from "../../addTable/Addcomment";
import TableData from "../dashboard/Showcomment";
import store from '../../store';
import { API } from '../../config';
import Login from "../auth/Login";
// import {API} from "../config";
import { Navigate } from 'react-router-dom';
import axios from 'axios';
// export const FirstPage = () => {


//   return (
//     <section className="landing">
//     <div className="dark-overlay">
//       <div className="landing-inner">
//         <h1 className="x-large">Mess Management</h1>
//         <p className="lead">
//           Start Managing your <b>Business</b> in smart way
//         </p>
//         <div className="buttons">
//           <Link to="/admin_landing" className="btn btn-danger">Admin</Link>
//           <Link to="/user_landing" className="btn btn-danger">User</Link>
//         </div>
//       </div>
//     </div>
//   </section>

//   )
// }

// export default FirstPage;



// import React from 'react'
// import { Link} from 'react-router-dom'

// const authLinks = (
//   <ul>
//     <li className='nav-item'>
//       <Link className='nav-link' to="/dashboard">
//         <i className="fas fa-user" />{' '}
//         <span className="hide-sm">Dashboard</span>
//       </Link>
//     </li>
//     <li>
//       <Link to="/admindashboard">
//         <i className="fas fa-user" />{' '}
//         <span className="hide-sm">Admin Dashboard</span>
//       </Link>
//     </li>
//     <li>
//       <a onClick={logout} href="#!">
//         <i className="fas fa-sigan-out-alt" />{' '}
//         <span className="hide-sm">Logout</span>
//       </a>
//     </li>
//   </ul>
// );

// const guestLinks = (
//   <ul>
//     {/* <li>
//       <Link to="/admin_register">Admin Register</Link>
//     </li>
//     <li>
//       <Link to="/register">Register</Link>
//     </li> */}
//     <li>
//       <Link to="/login">Login</Link>
//     </li>
//     <li>

//       <Link to="/admin_login">Admin Login</Link>
//     </li>
//   </ul>
// );
export const FirstPage = ({user}) => {
    // useEffect(() => {
    //   onSubmit()

    // }, [])
    
    
    // // console.log(auth.user.credits)
    // //   useEffect(() => {
    // //     // post the new credit into the backend.
    // console.log(" in the first page, the user object is given by::: ", user)
    // //   }, [credits])
    // const onSubmit = () => {
        
    //     const config = {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }
    //     const NewObj={credits: 10000};
    //     axios.post(`${API}/credits`, NewObj, config).then(res => {
    //         alert("post successful");
    //     }).catch(err =>{ console.log(err);alert(err)});
    //     // menu_item(mess,item);
    //     return (
    //         <Navigate to="/" />
    //     )
    // };

    const [credits, setCredits] = useState(100000)
    const SetCreditFunc = (creditVal) => {
        if (credits > 0) {
            setCredits(credits - creditVal)
            window.alert(`Rs ${creditVal} deducted`)
        }
        else {
            window.alert(`CREDIT DISCHARGED \n contact admin for more`)
        }
    }

    // { auth: { isAuthenticated }, logout }
    // console.log(logout);
    // if (!isAuthenticated) {
    //   return (
    //     <div>
    //     <header id="home" className="header">
    //       <div className="overlay text-white text-center">
    //           <h1 className="display-2 font-weight-bold my-3">Birla Mess</h1>
    //           <h2 className="display-4 mb-5">Always fresh ; Delightful</h2>
    //           <a className="btn btn-lg btn-danger" href="#gallary">View Our gallary</a>
    //       </div>
    //   </header>



    //     </div>
    //   )
    // }
    return (
        <div data-spy="scroll" data-target=".navbar" data-offset="40" id="#home">
            {/* <nav className="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top" data-spy="affix" data-offset-top="10">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:"#343a40"}}>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#gallary">Gallary</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#book-table">Write a Review</a>
                </li>
            </ul>
            <a className="navbar-brand m-auto" href="#">
                <img src="img/logo.svg" className="brand-img" alt=""/>
                <span className="brand-txt">Food Hut</span>
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#blog">Menu<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#testmonial"> Your Reviews</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact Us</a>
                </li>
                <li className="nav-item">
                    <a href="components.html" className="btn btn-danger ml-xl-4">Components</a>
                </li>
            </ul>
        </div>
    </nav> */}
            {/* <!-- header --> */}
            <header id="home" className="header" style={{ background: "url(img/main.jpg)" }}>*
                <div className="overlay text-white text-center">
                    <h1 className="display-2 font-weight-bold my-3">Birla Mess</h1>
                    <h2 className="display-4 mb-5">Always fresh ; Delightful</h2>
                    <h1 className="display-4 mb-5">Credits : {credits}</h1>
                    {/* <a className="btn btn-lg btn-danger" href="#gallary">View Our gallary</a> */}
                </div>
            </header>

            {/* <!--  About Section  --> */}
            <div id="about" className="container-fluid wow fadeIn" data-wow-duration="1.5s">
                <div className="row">
                    <div className="col-lg-6 " style={{ background: "url(/img/about-section.jpg)  center center" }}></div>
                    <div className="col-lg-6">
                        <div className="row justify-content-center" style={{ backgroundColor: "#343a40", color: "white" }}>
                            <div className="col-sm-8 py-5 my-5">
                                <h2 className="mb-4">About Us</h2>
                                <p>The Birla Mess is a NON-PROFIT, STUDENT-MANAGED MESS.  <br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum necessitatibus iste,
                                    nulla recusandae porro minus nemo eaque cum repudiandae quidem voluptate magnam voluptatum? <br />Nobis, saepe sapiente omnis qui eligendi pariatur. quis voluptas. Assumenda facere adipisci quaerat. Illum doloremque quae omnis vitae.</p>
                                <p><b>Lonsectetur adipisicing elit. Blanditiis aspernatur, ratione dolore vero asperiores explicabo.</b></p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ab itaque modi, reprehenderit fugit soluta, molestias optio repellat incidunt iure sed deserunt nemo magnam rem explicabo vitae. Cum, nostrum, quidem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--  gallary Section  --> */}
            {/* <div id="gallary" className="text-center bg-dark text-light has-height-md middle-items wow fadeIn">
        <h2 className="section-title">OUR MENU</h2>
    </div>
    <div className="gallary row">
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
            <img src="/img/gallary-1.jpg" alt="template by DevCRID http://www.devcrud.com/" className="gallary-img">
            <a href="#" className="gallary-overlay">
                <i className="gallary-icon ti-plus"></i>
            </a>
        </div>
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
            <img src="/img/gallary-2.jpg" alt="template by DevCRID http://www.devcrud.com/" className="gallary-img">
            <a href="#" className="gallary-overlay">
                <i className="gallary-icon ti-plus"></i>
            </a>
        </div>
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
            <img src="/img/gallary-3.jpg" alt="template by DevCRID http://www.devcrud.com/" className="gallary-img">
            <a href="#" className="gallary-overlay">
                <i className="gallary-icon ti-plus"></i>
            </a>
        </div>
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
            <img src="/img/gallary-4.jpg" alt="template by DevCRID http://www.devcrud.com/" className="gallary-img">
            <a href="#" className="gallary-overlay">
                <i className="gallary-icon ti-plus"></i>
            </a>
        </div>
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
            <img src="/img/gallary-5.jpg" alt="template by DevCRID http://www.devcrud.com/" className="gallary-img">
            <a href="#" className="gallary-overlay">
                <i className="gallary-icon ti-plus"></i>
            </a>
        </div>
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
            <img src="/img/gallary-6.jpg" alt="template by DevCRID http://www.devcrud.com/" className="gallary-img">
            <a href="#" className="gallary-overlay">
                <i className="gallary-icon ti-plus"></i>
            </a>
        </div>*
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
            <img src="/img/gallary-7.jpg" alt="template by DevCRID http://www.devcrud.com/" className="gallary-img">
            <a href="#" className="gallary-overlay">
                <i className="gallary-icon ti-plus"></i>
            </a>
        </div>
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
            <img src="/img/gallary-8.jpg" alt="template by DevCRID http://www.devcrud.com/" className="gallary-img">
            <a href="#" className="gallary-overlay">
                <i className="gallary-icon ti-plus"></i>
            </a>
        </div>
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
            <img src="/img/gallary-9.jpg" alt="template by DevCRID http://www.devcrud.com/" className="gallary-img">
            <a href="#" className="gallary-overlay">
                <i className="gallary-icon ti-plus"></i>
            </a>
        </div>
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
            <img src="/img/gallary-10.jpg" alt="template by DevCRID http://www.devcrud.com/" className="gallary-img">
            <a href="#" className="gallary-overlay">
                <i className="gallary-icon ti-plus"></i>
            </a>
        </div>
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
            <img src="/img/gallary-11.jpg" alt="template by DevCRID http://www.devcrud.com/" className="gallary-img">
            <a href="#" className="gallary-overlay">
                <i className="gallary-icon ti-plus"></i>
            </a>
        </div>
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
            <img src="/img/gallary-12.jpg" alt="template by DevCRID http://www.devcrud.com/" className="gallary-img">
            <a href="#" className="gallary-overlay">
                <i className="gallary-icon ti-plus"></i>
            </a>
        </div>
    </div>  */}

            {/* <!-- book a table Section  --> */}
            {/* <div className="container-fluid has-bg-overlay text-center text-light has-height-lg middle-items" id="book-table" style={{background: "url(img/book-table-img.jpg) center center "}}>
        <div className="">
            <h2 className="section-title mb-5">Write Your Reviews</h2>
            <div className="row mb-5">
                <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                    <input type="email" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="MESS NAME"/>
                </div>
                <div className="col-sm-6 col-md-6 col-xs-12 my-2">
                    <textarea type="text" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="YOUR REVIEWS"  min="0"></textarea>
                </div>
                 <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                    <input type="number" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="Rating" name="rating"/>
                </div>
                 <div className="col-sm-6 col-md-3 col-xs-12 my-2">
                    <input type="date" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="12/12/12"/>
                </div> 
                <input type="number" id="booktable" className="form-control form-control-lg custom-form-control" placeholder="Rating" name="rating" />  
                 value={rating} 
            </div>
            <a href="#" className="btn btn-lg btn-danger" id="rounded-btn">Post Review</a>
        </div>
    </div> */}


            {/* <!-- BLOG Section  --> */}
            <div id="blog" className="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
                <h2 className="section-title py-5">OUR MENU</h2>
                <div className="row justify-content-center">
                    <div className="col-sm-7 col-md-4 mb-5">
                        <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#foods" role="tab" aria-controls="pills-home" aria-selected="true" style={{ backgroundColor: "red", }}>Add-ons</a>
                            </li>
                            {/* <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#juices" role="tab" aria-controls="pills-profile" aria-selected="false">Beverages</a>
                    </li> */}
                        </ul>
                    </div>

                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="foods" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img src="/img/Egg-Bhurji.jpeg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4"><a href="#" className="badge badge-primary" onClick={(e) => {
                                            return (SetCreditFunc(e.target.text))
                                        }}>20Rs</a></h1>
                                        <h4 className="pt20 pb20">Egg-Bhurji</h4>
                                        <p className="text-white">NON-VEG</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img src="/img/Egg-Crate.jpeg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                                    <div className="card-body">
                                        <h1  className="text-center mb-4"><a href="#" className="badge badge-primary" onClick={(e) => {
                                            return (SetCreditFunc(e.target.text))
                                        }}>180Rs</a></h1>
                                        <h4 className="pt20 pb20">Egg-Crate</h4>
                                        <p className="text-white">NON-VEG</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img src="/img/Egg-Omelette.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" style={{objectFit: "cover"}} />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4"><a href="#" className="badge badge-primary" onClick={(e) => {
                                            return (SetCreditFunc(e.target.text))
                                        }}>20Rs</a></h1>
                                        <h4 className="pt20 pb20">Egg-Omlette (2 eggs)</h4>
                                        <p className="text-white">NON-VEG</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img src="/img/Boiled-Egg.jpeg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4"><a href="#" className="badge badge-primary" onClick={(e) => {
                                            return (SetCreditFunc(e.target.text))
                                        }}>10Rs</a></h1>
                                        <h4 className="pt20 pb20">Egg-Boiled</h4>
                                        <p className="text-white">NON-VEG</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div className="card bg-transparent border my-3 my-md-0">
                                    <img src="/img/Milk-Glass.jpeg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4"><a href="#" className="badge badge-primary" onClick={(e) => {
                                            return (SetCreditFunc(e.target.text))
                                        }}>20Rs</a></h1>
                                        <h4 className="pt20 pb20">1 Glass of milk</h4>
                                        <p className="text-white">VEG</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="juices" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="row">
                            <div className="col-md-4 my-3 my-md-0">
                                <div className="card bg-transparent border">
                                    <img src="/img/blog-4.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$15</a></h1>
                                        <h4 className="pt20 pb20">Consectetur Adipisicing Elit</h4>
                                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-3 my-md-0">
                                <div className="card bg-transparent border">
                                    <img src="/img/blog-5.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4"><a href="#" className="badge   badge-primary">$29</a></h1>
                                        <h4 className="pt20 pb20">Ullam Laboriosam</h4>
                                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-3 my-md-0">
                                <div className="card bg-transparent border">
                                    <img src="/img/blog-6.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive" />
                                    <div className="card-body">
                                        <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$3</a></h1>
                                        <h4 className="pt20 pb20">Fugit Ipsam</h4>
                                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- REVIEWS Section  --> */}
            {/*     
     <div id="testmonial" className="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
     <TableData/> */}
            {/* // <h2 className="section-title my-5 text-center">REVIEWS</h2>
        // <div className="row mt-3 mb-5">
        //     <div className="col-md-4 my-3 my-md-0">
        //         <div className="testmonial-card">
        //             <h3 className="testmonial-title">John Doe</h3>
        //             <h6 className="testmonial-subtitle">Web Designer</h6>
        //             <div className="testmonial-body">
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!</p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="col-md-4 my-3 my-md-0">
        //         <div className="testmonial-card">
        //             <h3 className="testmonial-title">Steve Thomas</h3>
        //             <h6 className="testmonial-subtitle">UX/UI Designer</h6>
        //             <div className="testmonial-body">
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum minus obcaecati cum eligendi perferendis magni dolorum ipsum magnam, sunt reiciendis natus. Aperiam!</p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="col-md-4 my-3 my-md-0">
        //         <div className="testmonial-card">
        //             <h3 className="testmonial-title">Miranda Joy</h3>
        //             <h6 className="testmonial-subtitle">Graphic Designer</h6>
        //             <div className="testmonial-body">
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, nam. Earum nobis eligendi, dignissimos consequuntur blanditiis natus. Aperiam!</p>
        //             </div>
        //         </div>
        //     </div>
        // </div> */}
            {/* </div>  */}

            {/* <!-- CONTACT Section  --> */}
            {/* <div id="contact" className="container-fluid bg-dark text-light border-top wow fadeIn">
        <div className="row">
            <div className="col-md-6 px-0">
                <div id="map" style={{width: "100%", height: "100%", minHeight: "400px"}}></div>
            </div>
            <div className="col-md-6 px-5 has-height-lg middle-items">
                <h3>FIND US</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laboriosam doloremque odio delectus, sunt magnam laborum impedit molestiae, magni quae ipsum, ullam eos! Alias suscipit impedit et, adipisci illo quam.</p>
                <div className="text-muted">
                    <p><span className="ti-location-pin pr-3"></span> 12345 Fake ST NoWhere, AB Country</p>
                    <p><span className="ti-support pr-3"></span> (123) 456-7890</p>
                    <p><span className="ti-email pr-3"></span>info@website.com</p>
                </div>
            </div>
        </div>
    </div> */}
            {/* 
    <!-- page footer  --> */}
            {/* <div className="container-fluid bg-dark text-light has-height-md middle-items border-top text-center wow fadeIn">
        <div className="row">
            <div className="col-sm-4">
                <h3>EMAIL US</h3>
                <p className="text-muted">info@website.com</p>
            </div>
            <div className="col-sm-4">
                <h3>CALL US</h3>
                <p className="text-muted">(123) 456-7890</p>
            </div>
            <div className="col-sm-4">
                <h3>FIND US</h3>
                <p className="text-muted">12345 Fake ST NoWhere AB Country</p>
            </div>
        </div>
    </div>
    <div className="bg-dark text-light text-center border-top wow fadeIn">
        <p className="mb-0 py-3 text-muted small">&copy; Copyright <script>document.write(new Date().getFullYear())</script> Made with <i className="ti-heart text-danger"></i> By <a href="http://devcrud.com">DevCRUD</a></p>
    </div> */}
            {/* <!-- end of page footer --> */}
        </div>

    )
}



FirstPage.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
    {
        auth: state.auth
    });

export default connect(mapStateToProps)(FirstPage);