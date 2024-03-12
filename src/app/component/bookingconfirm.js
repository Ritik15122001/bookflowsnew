"use client"
import { useState } from "react";
import BookYourSlots from "./bookyourslots";
import { useEffect } from "react";
import axios from "axios";
const BooingConfirm = () => {
    const [showAppointment, setShowAppointment] = useState(false);
    const [CurrentComp , setCurrentComp] = useState(true);
    const [name , setname] = useState();
    const [data, setdata] = useState({
      name:"",
      emailId:"",
      contactNumber:"",
      address:"",
      logo:""
    });
  

    const selectedSlots = localStorage.getItem('selectedSlots');
    const selectedDate = localStorage.getItem('selectedDate');
    const getdoctor = async () => {
      try {
        const response = await axios.get('http://localhost:8000/businessinfo');
        const data = response.data[0];
        console.log(data)
        setname(data.name)
        setdata({
          name: data.name || "",
          emailId: data.emailId || "",
          contactNumber: data.contactNumber || "",
          address: data.address || "",
          logo: data.logo || ""
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
      getdoctor();
    }, []);

    // const handleapicall = (event) => {
    //   event.preventDefault();
    //   console.log("Re-Schedule button clicked");
    //   getdoctor();
    // };

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
                           src={'http://localhost:8000' + "/" + data.logo.filename}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="cc_wrap_right">
                        <h3>{data.contactNumber} </h3>
                        <p>{data.emailId} </p>
                        <p>{data.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 colony_buttons">
                    <a href="#" className="btn btn_new2" >
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
                    <h3>{name}</h3>
                    <p>
                      <img
                        src="images/clock.png"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    {selectedDate}<br />{" "}{selectedSlots}
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