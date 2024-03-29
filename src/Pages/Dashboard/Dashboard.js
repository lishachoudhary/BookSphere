import book1 from '../../images/mzr3t_el7eoan.jpg';
import book2 from '../../images/fymmr.jpeg'
import book3 from '../../images/ln ynth.jpg'
import book4 from '../../images/aedzekola.jpg'

import publishlogo from '../../images/web-logo.jpg';
import { Link } from "react-router-dom";
import './dashboard.css'
import MyCard from '../../Components/MyCard/MyCard';

function Dashboard(){


    return (
        <>
        <div className="container-fluid mt-5 mx-auto">
            <div className="row">
                {/* Popular Books section  */}
                <div className='d-flex justify-content-between col-lg-8 col-md-12 col-sm-12 mt-2 mb-3'>
                    <h3 className='text-secondary w-25'>Popular Books</h3>
                </div>
                    
                <div className='container d-flex justify-content-evenly flex-wrap col-lg-7 col-md-11 col-sm-12 px-0 popular-books'>
                    <div className="card col-lg-3 col-md-7 col-sm-12 mb-sm-3 book-img  ">
                        <img src={book1} className="card-img-top d-block mx-auto pt-2 " alt="..." style={{"width":"85%"}}/>
                        <div className="card-body">
                            <h3 className="card-title text-center">mzr3t el7eoan</h3>
                            <p className="card-text text-center">Some quick example text to details</p>
                        </div>
                    </div>
                    
                    <div className="card col-lg-3 col-md-7 col-sm-12 mb-sm-3 book-img">
                        <img src={book2} className="card-img-top d-block mx-auto pt-2" alt="..." style={{"width":"85%"}}/>
                        <div className="card-body">
                            <h3 className="card-title text-center">Fy mmr elf2ran</h3>
                            <p className="card-text text-center">Some quick example text to details</p>
                        </div>
                    </div>
                    
                    <div className="card col-lg-3 col-md-7 col-sm-12 mb-sm-3 book-img">
                        <img src={book3} className="card-img-top d-block mx-auto pt-2 0" alt="..." style={{"width":"85%"}}/>
                        <div className="card-body">
                            <h3 className="card-title text-center">Ln ynthy elb2s</h3>
                            <p className="card-text text-center">Some quick example text to details</p>
                        </div>
                    </div>
                    
                </div>
                {/* end Popular Books section  */}

                {/* publisher info section */}
                
                <div className='d-flex justify-content-center col-lg-4 col-md-12 col-sm-12 mt-sm-4 publisher-info'>
                    <div className="col-lg-11 col-md-11 col-sm-11 border p-2">
                        <img src={publishlogo} className="card-img-top d-block mx-auto" alt="..." style={{"width":"85%"}}/>
                        <div className="card-body p-0">
                            <h3 className="card-title text-center fs-3">3ser Kotb</h3>
                            <p className="card-text text-center fs-4"  style={{"color":"#5f4ecb"}}>fkr tla8y ktabk</p>
                        </div>
                    </div>

                </div>

                {/* endpublisher info section */}
            </div>

            <hr className='w-75 mx-auto '></hr>

            <div className='row justify-content-between  align-items-start flex-wrap mb-5'>
                
                {/* Books section */}
                <div className='d-flex justify-content-between col-lg-7 '>
                    <h2 className='ps-5' >Books For You</h2>
                    <Link to='#' className='text-decoration-none align-self-center fs-4' style={{"color":"#5f4ecb"}}>View All</Link>
                </div>
                
                <div className='col-lg-8 col-md-12 col-sm-12 mx-auto'>
                        <div className='d-flex bg-light shadow mt-3 col-lg-10 position-relative'>
                            <div className='w-25'>
                                <img src={book2} className="card-img-top d-block mx-auto  w-100" style={{"height":"120px"}} alt="..." />
                            </div>
                            <div className='w-75'>
                                <h4 className='mt-4 ms-3 '>Fy mmr elf2ran </h4>
                                <h5 className='ms-3 opacity-50'>BY Dr.A7med 5ald</h5>
                                <ul className='d-flex book-dashboard-detail col-md-12 col-sm-12 p-0'>
                                    <li className='ms-4 ms-md-3 ms-sm-2' ><span className='fs-6' style={{"color":"#5f4ecb"}}>70</span> reviews</li>
                                    <li className='ms-3'><span className='fs-6' style={{"color":"#5f4ecb"}}>120</span> rating</li>
                                    <li className='ms-4'>
                                    <span class="fa fa-star checked" style={{"color":"#5f4ecb"}}></span>
                                        <span class="fa fa-star checked" style={{"color":"#5f4ecb"}}></span>
                                        <span class="fa fa-star checked" style={{"color":"#5f4ecb"}}></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </li>
                                    <li className='ms-4'><span className='fs-6 fw-bold' style={{"color":"#5f4ecb"}}>4.2</span> </li>

                                </ul>
                            </div>
                            <div className='book-arrow position-absolute'>
                                <i class="bi bi-arrow-right-circle-fill fs-3" style={{"color":"#5f4ecb"}}></i>
                            </div>
                        </div>

                        <div className='d-flex bg-light shadow mt-3 col-lg-10 position-relative'>
                            <div className='w-25'>
                                <img src={book2} className="card-img-top d-block mx-auto  w-100" style={{"height":"160px"}} alt="..." />
                            </div>
                            <div className='w-75'>
                                <h4 className='mt-4 ms-3 '>Fy mmr elf2ran </h4>
                                <h5 className='ms-3 opacity-50'>BY Dr.A7med 5ald</h5>
                                <ul className='d-flex book-dashboard-detail p-0'>
                                    <li className='ms-4 ms-md-3 ms-sm-2'><span className='fs-6' style={{"color":"#5f4ecb"}}>70</span> reviews</li>
                                    <li className='ms-3'><span className='fs-6' style={{"color":"#5f4ecb"}}>150</span> rating</li>
                                    <li className='ms-4'>
                                        <span class="fa fa-star checked" style={{"color":"#5f4ecb"}}></span>
                                        <span class="fa fa-star checked" style={{"color":"#5f4ecb"}}></span>
                                        <span class="fa fa-star checked" style={{"color":"#5f4ecb"}}></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </li>
                                    <li className='ms-4'><span className='fs-6 fw-bold' style={{"color":"#5f4ecb"}}>5.2</span> </li>

                                </ul>
                            </div>
                            <div className='book-arrow position-absolute'>
                                <i class="bi bi-arrow-right-circle-fill fs-3" style={{"color":"#5f4ecb"}}></i>
                            </div>
                        </div>

                        <div className='d-flex bg-light shadow mt-3 col-lg-10 position-relative'>
                            <div className='w-25'>
                                <img src={book4} className="card-img-top d-block mx-auto  w-100" style={{"height":"160px"}} alt="..." />
                            </div>
                            <div className='w-75'>
                                <h4 className='mt-4 ms-3 '>ard zekola</h4>
                                <h5 className='ms-3 opacity-50'>BY Dr.A7med 5ald</h5>
                                <ul className='d-flex book-dashboard-detail p-0'>
                                    <li className='ms-sm-2 ms-4 ms-md-3 '><span className='fs-6' style={{"color":"#5f4ecb"}}>50</span> reviews</li>
                                    <li className='ms-3'><span className='fs-6' style={{"color":"#5f4ecb"}}>130</span> rating</li>
                                    <li className='ms-4'>
                                    <span class="fa fa-star checked" style={{"color":"#5f4ecb"}}></span>
                                        <span class="fa fa-star checked" style={{"color":"#5f4ecb"}}></span>
                                        <span class="fa fa-star checked" style={{"color":"#5f4ecb"}}></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </li>
                                    <li className='ms-4'><span className='fs-6 fw-bold' style={{"color":"#5f4ecb"}}>3.2</span></li>

                                </ul>
                            </div>
                            <div className='book-arrow position-absolute'>
                                <i class="bi bi-arrow-right-circle-fill fs-3" style={{"color":"#5f4ecb"}}></i>
                            </div>
                        </div>
                </div>
                {/* end Books section */} 

                {/* books statistics section */}
                
                <div className='col-lg-3 col-md-12 col-sm-12 p-0  mt-sm-5 mt-0 me-0'>
                        <div class="card bg-light mt-3" >
                            <div class="card-header bg-light p-1">
                                <div className='d-flex justify-content-start'>
                                        <div className='p-3  col-lg-3 sol-md-3 col-sm-3'>
                                        <i class="fa-solid fa-book align-self-end fs-1" style={{"color":"#5f4ecb"}}></i>
                                        </div>
                                    <h1 className='text-start align-self-center col-lg-9 sol-md-9 col-sm-9 mb-0'>65</h1>

                                </div>
                                <div className='d-flex justify-content-around'>
                                    <p className='fs-4 text-dark text-start p-0 m-0'>Books</p>
                                    <Link to='/publisher/addbook' className='text-decoration-none align-self-center fs-4' style={{"color":"#5f4ecb"}}>ADD Book</Link>
                                </div>
                            </div>

                            <div class="card-header bg-light p-1">
                                <div className='d-flex justify-content-start'>
                                        <div className='p-3 col-lg-3 sol-md-3 col-sm-3'>
                                            <i class="bi bi-list-nested align-self-end fs-1" style={{"color":"#5f4ecb"}}></i>
                                        </div>
                                            <h1 className='text-start align-self-center col-lg-9 sol-md-9 col-sm-9 mb-0'>25</h1>
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <p className='fs-4 text-dark text-start p-0 m-0'>Category</p>
                                    <Link to='#' className='text-decoration-none align-self-center fs-4' style={{"color":"#5f4ecb"}}>View All</Link>
                                </div>
                            </div>
                        
                            <div class="card-header bg-light p-1">
                                <div className='d-flex justify-content-start'>
                                <div className='p-3  col-lg-3 sol-md-3 col-sm-3'>
                                        <i class="bi bi-basket3 align-self-end fs-1 col-lg-3 sol-md-3 col-sm-3" style={{"color":"#5f4ecb"}}></i>
                                </div>
                                        <h1 className='text-start align-self-center col-lg-9 sol-md-9 col-sm-9 mb-0'>20</h1>
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <p className='fs-4 text-dark text-start p-0 m-0'>Orders</p>
                                    <Link to='/publisherorder' className='text-decoration-none align-self-center fs-4' style={{"color":"#5f4ecb"}}>View All</Link>
                                </div>
                            </div> 
                        </div>


                        {/* <div class="card " >
                            <div class="card-header fs-2 text-center">
                                Actions
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item text-center fs-1"><Link className='text-decoration-none align-self-center fs-5 btn' to='#' style={{"color":"#5f4ecb"}}>ADD Category</Link></li>
                                <li class="list-group-item text-center fs-1"><Link className='text-decoration-none align-self-center fs-5' to='#' style={{"color":"#5f4ecb"}}>ADD Book</Link></li>
                                <li class="list-group-item text-center fs-1"><Link className='text-decoration-none align-self-center fs-5' to='#' style={{"color":"#5f4ecb"}}>ADD Author</Link></li>
                            </ul>
                        </div> */}
                </div>
                
                {/* books statistics section */}

            </div>
        
        </div>


        </>
    )
}

export default Dashboard;


