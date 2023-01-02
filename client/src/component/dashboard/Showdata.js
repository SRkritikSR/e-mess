import React, { useState, useEffect } from 'react';
import '../tabledata.css';


function TableData() {
    const [data, getData] = useState([])
    const URL = 'http://localhost:5000/api/menu';

 
    useEffect(() => {
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
 
    }
    // console.log(data)
    return (
        <>
        <div id="blog" className="container-fluid bg-dark text-light py-5 text-center wow fadeIn">
        <h2 className="section-title py-5">OUR MENU</h2>
        <div className="row justify-content-center">
            <div className="col-sm-7 col-md-4 mb-5">
                <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#foods" role="tab" aria-controls="pills-home" aria-selected="true" style={{backgroundColor: "red",}}>Foods</a>
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
                            <img src="/img/blog-1.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive"/>
                            <div className="card-body">
                                <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$5</a></h1>
                                <h4 className="pt20 pb20">Reiciendis Laborum </h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-transparent border my-3 my-md-0">
                            <img src="/img/blog-2.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive"/>
                            <div className="card-body">
                                <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$12</a></h1>
                                <h4 className="pt20 pb20">Adipisci Totam</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-transparent border my-3 my-md-0">
                            <img src="/img/blog-3.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive"/>
                            <div className="card-body">
                                <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$8</a></h1>
                                <h4 className="pt20 pb20">Dicta Deserunt</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="juices" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row">
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="card bg-transparent border">
                            <img src="/img/blog-4.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive"/>
                            <div className="card-body">
                                <h1 className="text-center mb-4"><a href="#" className="badge badge-primary">$15</a></h1>
                                <h4 className="pt20 pb20">Consectetur Adipisicing Elit</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="card bg-transparent border">
                            <img src="/img/blog-5.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive"/>
                            <div className="card-body">
                                <h1 className="text-center mb-4"><a href="#" className="badge   badge-primary">$29</a></h1>
                                <h4 className="pt20 pb20">Ullam Laboriosam</h4>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="card bg-transparent border">
                            <img src="/img/blog-6.jpg" alt="template by DevCRID http://www.devcrud.com/" className="rounded-0 card-img-top mg-responsive"/>
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
        </>
    );
}
 
export default TableData;


// //        {/* <h1>Todays Menu</h1>
// <tbody>
// <tr>
//     <th>Mess Name</th>
//     <th>Item Name</th>
// </tr>
// {data.map((item, i) => (
    
//     <tr key={i}>
//         <td>{item.mess}</td>
//         <td>{item.item}</td>
//     </tr>
// ))}
// </tbody> */}
// <div class="row justify-content-center mt-5">
// {data.map((item,i)=> (
// // {/* // <!-- Card Wider --> */}

// <div className="card card-cascade wider col-lg-3 col-md-6 col-sm-12 mx-3">

//   {/* <!-- Card image --> */}
//   <div className="view view-cascade overlay">
//     <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo6.webp" alt="Card image cap"/>
//     <a href="#!">
//       <div className="mask rgba-white-slight"></div>
//     </a>
//   </div>

//   {/* <!-- Card content --> */}
//   <div className="card-body card-body-cascade text-center pb-0">

//     {/* <!-- Title --> */}
//     <h4 className="card-title"><strong>{item.item}</strong></h4>
//     {/* <!-- Subtitle --> */}
//     <h5 className="blue-text pb-2"><strong>{item.mess}</strong></h5>
//     {/* <!-- Text --> */}
//     {/* <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
//       laudantium, totam rem aperiam. </p>
//  */}
//     {/* <!-- Linkedin -->
//     <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>
//     <!-- Twitter -->
//     <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>
//     <!-- Dribbble -->
//     <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a> */}

//     {/* <!-- Card footer --> */}
//     <div className="card-footer text-muted text-center mt-4">
//       2 days ago
//     </div>

//   </div>

// </div>


// ))}
// </div>   