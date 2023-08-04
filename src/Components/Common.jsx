import React from "react";


const Common = (props) =>{
  return(
          <>
            <div className="container-fluid mt-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={props.src} className="img-fluid"/>
                        </div>
                        <div className="col-md-6 pt-5 mt-2">
                            <h2>{props.title}</h2>
                            <p className="mt-5">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/> 
                                Aenean commodo ligula eget dolor. Aenean massa. Cum <br/>
                                sociis natoque penatibus et magnis dis parturient montes,<br/> 
                                nascetur ridiculus 
                                mus. 

                                Donec quam felis, ultricies nec, pellentesque eu,<br/> 
                                pretium quis, sem. Nulla consequat massa quis enim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </>
        )

}

export default Common;