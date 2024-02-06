"use client"
import { useState } from "react";
import BookYourSlots from "./bookyourslots";
const BooingConfirm = () => {
    const [showAppointment, setShowAppointment] = useState(false);
    const [CurrentComp , setCurrentComp] = useState(true);
    const handleBookAppointmentClick = () => {
        setShowAppointment(true);
        setCurrentComp(false)
      };
    return ( 
        <>
         {CurrentComp && (
        <div className="colony">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="colony_top">
                <div className="row">
                  <div className="col-md-6">
                    <div className="cc_wrap">
                      <div className="cc_wrap_left">
                        <img
                          src="images/small_cat.png"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="cc_wrap_right">
                        <h3>Cat Care</h3>
                        <p>Shop No.1F Block Prime Colony</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 colony_buttons">
                    <a href="#" className="btn btn_new2">
                      View Detail
                    </a>
                    <a href="#" className="btn btn_new1" onClick={handleBookAppointmentClick}>
                      Cancel Request
                    </a>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="confirmed">
                <div className="row">
                  <div className="col-md-12 tick_top  zoomIn">
                    <img
                      src="images/tick2.png"
                      className="img-responsive center-block"
                      alt=""
                    />
                  </div>
                  <div className="col-md-12">
                    <h2>Booking Confirmed</h2>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="clearfix" />
                <div className="row">
                  <div className="col-md-6  slideInLeft">
                    <div className="cc_wrap">
                      <div className="cc_wrap_left">
                        <img
                          src="images/person.png"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="cc_wrap_right">
                        <h3>Doctor will be assigned </h3>
                        <p>
                          <span>1 hour</span> before the scheduled time
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 confirm_right  slideInRight">
                    <h3>Dr William Hemsflow</h3>
                    <p>
                      <img
                        src="images/clock.png"
                        className="img-responsive"
                        alt=""
                      />{" "}
                      10-11 AM on friday, 23rd November 2023
                    </p>
                  </div>
                  <div className="clearfix" />
                  <div className="text-center b_a_btn">
                    <a href="#" className="btn btn_new2" onClick={handleBookAppointmentClick}>
                      Re-Schedule
                    </a>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
      </div>
         )}
           {showAppointment && <BookYourSlots />} 
      </>
     );
}
 
export default BooingConfirm;