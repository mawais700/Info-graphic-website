import React from "react";
import Image1 from '../Images/Image1.png';

const About = () =>{
  return(
          <>
          <div className="container  my-5">
            <h1 className="text-center">Its my About page</h1>
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
            </div>
            
          </>
        )

}

export default About;