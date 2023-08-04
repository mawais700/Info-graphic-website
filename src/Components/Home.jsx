import React from "react";
import Image1 from '../Images/Image1.png';
import Common from "./Common";
import Sdata from "./Sdata";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";



const Home=()=>{


    return (
        <>
            <div className="container-fluid Background_image"> 
                <div class="container bg_content d-flex">
                    <div className="row ">
                        <div className="col-12">
                            <h1>Introduce Your Product <br/>
                                 Quickly & Effectively</h1>
                                <p className="pt-4">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br/>
                                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque <br/>
                                    penatibus et magnis dis parturient montes, nascetur ridiculus <br/>

                                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, <br/>
                                    sem. Nulla consequat massa quis enim. <br/>
                                </p>
                                <div className="pt-4">
                                    <NavLink to="/contact"><button className="btn text-white button_2">Purchase Kite</button></NavLink>
                                    <NavLink to="/about"><button className="btn text-white button_3">Learn More</button></NavLink>
                                </div> 
                        </div>    
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="container pt-5">
                    <div className="row pt-5">
                        <div className="col-md-6 pt-5">
                            <h1 className="ms-4">Light, Fast & Powerful</h1>
                            <p className="ms-4">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo<br/> 
                                        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis<br/> 
                                        dis parturient montes, nascetur ridiculus<br/> 

                                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.<br/> 
                                        Nulla consequat massa quis enim.
                            </p>
                            <div className="row ms-4 mt-5">
                                <div className="col-md-6">
                                    <h3>Title Goes Here</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                </div>
                                <div className="col-md-6">
                                    <h3>Title Goes Here</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={Image1} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>  

            {/* <Common title = "Light, Fast & Powerful" src = {Image2} />
            <Common title="Light, Sample of Content" src = {Image3} />
            <Common title= "Its the Power of React.js" src={Image4} /> */}

            {
                Sdata.map( (CVal, ind)=>{
                   return <Common title = {CVal.title} src = {CVal.src}/> 
                })
            }
            <div className="container-fluid mt-5 Background_image2">
                <div className="container py-5">
                        <div className="container text-center mt-5">
                            <h1>A Price To Suit Everyone</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula <br/> 
                            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient <br/>  
                            montes, nascetur ridiculus</p>
                        </div>
                </div>
                <div className="cointainer text-center">
                    <h1>$40</h1>
                    <p>UI Design Kit</p>
                </div>
                <div className="cointainer text-center py-4">
                    <p>See, One price. Simple.</p>
                    <button className="btn text-white button_4">Purchase Now</button>
                </div>
                
            </div>
            {/* Footer */}
            <div className="container-fluid Background_image3">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-4">
                            <p>©2023 Yourcompany</p>
                        </div>
                        <div className="col-4">
                            <h2>Landing</h2>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-dark">Purchase Now</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;
