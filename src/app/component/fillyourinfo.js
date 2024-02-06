"use client"

import Verification from "./verification";
import { useState } from "react";
const FillYourInfo = () => {
    const [showAppointment, setShowAppointment] = useState(false);
    const [CurrentComp , setCurrentComp] = useState(true);
    const handleBookAppointmentClick = () => {
        setShowAppointment(true);
        setCurrentComp(false)
      };
    return ( 
        <>
        {CurrentComp &&(
          <div className="congo">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 congo_top">
          <img
            src="images/congrats.png"
            className="img-responsive center-block  zoomIn"
            alt=""
          />
          <p>
            This is the final step to book your appointment you are almost done
          </p>
        </div>
        <div className="clearfix" />
        <div className="col-md-8 col-md-offset-2">
          <div className="fill_box">
            <h3>Fill Your Information</h3>
            <div className="clearfix" />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Phone No."
              />{" "}
            </div>
            <div className="clearfix" />
            <div className="fill_buttons">
              <a  className="btn btn_new2" onClick={handleBookAppointmentClick}>
                Book Now
              </a>
              <a href="#" className="btn btn_new1">
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />
    </div>
  </div> 
  )}
       {showAppointment && <Verification/>} 
  </>
     );
}
 
export default FillYourInfo;