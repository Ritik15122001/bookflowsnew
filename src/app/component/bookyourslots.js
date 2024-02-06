"use client"
import { useState } from "react";
import FillYourInfo from "./fillyourinfo";
import { useEffect } from "react";
const BookYourSlots = () => {
    const [showAppointment, setShowAppointment] = useState(false);
    const [CurrentComp , setCurrentComp] = useState(true);
    const [IsMobile, setIsMobile]=useState(false);
    const handleBookAppointmentClick = () => {
        setShowAppointment(true);
        setCurrentComp(false)
      };

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768); 
        };
    
        
        handleResize();
    
       
        window.addEventListener("resize", handleResize);
    
     
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    return ( 
        <>      
       {CurrentComp && (
         <div className="book_demo2">
    <div className="opaque_slot">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="top_book_slot">
              <div className="row">
                <div className="col-md-8 top_slot_left slideInLeft">
                  <h4>Book Your Slot</h4>
                </div>
                <div className="col-md-4">
                  <div className="row  slideInRight">
                    <div className="col-md-6 col-xs-6 december">
                      <h4>
                        <a href="#">
                          <img
                            src="/images/year_arrow_left.png"
                            className="img-responsive"
                            alt=""
                          />{" "}
                        </a>{" "}
                        December{" "}
                        <a href="#">
                          <img
                            src="images/year_arrow_right.png"
                            className="img-responsive"
                            alt=""
                          />{" "}
                        </a>
                      </h4>
                    </div>
                    <div className="col-md-6 col-xs-6 december">
                      <h4>
                        <a href="#">
                          <img
                            src="images/year_arrow_left.png"
                            className="img-responsive"
                            alt=""
                          />{" "}
                        </a>{" "}
                        2024{" "}
                        <a href="#">
                          <img
                            src="images/year_arrow_right.png"
                            className="img-responsive"
                            alt=""
                          />{" "}
                        </a>
                      </h4>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="clearfix" />
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="clearfix" />
          <div className="col-md-12 owl-demo5  owl-theme text-center">
            <div className="owl-demo5" style={{display:'flex',justifyContent:'space-between'}}>
            {!IsMobile && (
                <> 
                <div className="item ">
                <a href="#">
                  <div className="date_box">
                    <div className="date_top">
                      <p>15</p>
                    </div>
                    <div className="date_bottom">
                      <h5>APR</h5>
                      <h3>|</h3>
                      <h3>THU</h3>{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <div className="date_box">
                    <div className="date_top">
                      <p>15</p>
                    </div>
                    <div className="date_bottom">
                      <h5>APR</h5>
                      <h3>|</h3>
                      <h3>THU</h3>{" "}
                    </div>
                  </div>
                </a>
              </div>
          
              <div className="item">
                <a href="#">
                  <div className="date_box">
                    <div className="date_top">
                      <p>15</p>
                    </div>
                    <div className="date_bottom">
                      <h5>APR</h5>
                      <h3>|</h3>
                      <h3>THU</h3>{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <div className="date_box">
                    <div className="date_top">
                      <p>15</p>
                    </div>
                    <div className="date_bottom">
                      <h5>APR</h5>
                      <h3>|</h3>
                      <h3>THU</h3>{" "}
                    </div>
                  </div>
                </a>
              </div>
          
         
              <div className="item">
                <a href="#">
                  <div className="date_box">
                    <div className="date_top">
                      <p>15</p>
                    </div>
                    <div className="date_bottom">
                      <h5>APR</h5>
                      <h3>|</h3>
                      <h3>THU</h3>{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <div className="date_box">
                    <div className="date_top">
                      <p>15</p>
                    </div>
                    <div className="date_bottom">
                      <h5>APR</h5>
                      <h3>|</h3>
                      <h3>THU</h3>{" "}
                    </div>
                  </div>
                </a>
              </div>
              </>
                 )}
              <div className="item">
                <a href="#">
                  <div className="date_box">
                    <div className="date_top">
                      <p>15</p>
                    </div>
                    <div className="date_bottom">
                      <h5>APR</h5>
                      <h3>|</h3>
                      <h3>THU</h3>{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <div className="date_box">
                    <div className="date_top">
                      <p>15</p>
                    </div>
                    <div className="date_bottom">
                      <h5>APR</h5>
                      <h3>|</h3>
                      <h3>THU</h3>{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <div className="date_box">
                    <div className="date_top">
                      <p>15</p>
                    </div>
                    <div className="date_bottom">
                      <h5>APR</h5>
                      <h3>|</h3>
                      <h3>THU</h3>{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <div className="date_box">
                    <div className="date_top">
                      <p>15</p>
                    </div>
                    <div className="date_bottom">
                      <h5>APR</h5>
                      <h3>|</h3>
                      <h3>THU</h3>{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="customNavigation5">
              <a className="btn prev5">
                <img src="/images/l_o.png" />
              </a>
              <a className="btn next5">
                <img src="/images/r_o.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
    <div className="book_demo book_slot">
      <div className="container">
        <div className="row">
          <div className="clearfix" />
          <div className="col-md-12 morning info_bottom2">
            <ul className="nav nav-tabs">
              <li className="active">
                <a data-toggle="tab" href="#home">
                  Morning Slots
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#menu1">
                  Afternoon Slots
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#menu2">
                  Evening Slots
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="home" className="tab-pane fade in active">
                <ul className="timings_list">
                  <li className=" zoomIn">
                    <a href="#">07:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#" className="active">
                      08:00 AM
                    </a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">09:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">09:30 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">10:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">10:30 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">11:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">11:30 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">07:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">08:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">09:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">09:30 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">10:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">10:30 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">11:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">11:30 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">07:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">08:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">09:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">09:30 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">10:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">10:30 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">11:00 AM</a>
                  </li>
                  <li className=" zoomIn">
                    <a href="#">11:30 AM</a>
                  </li>
                </ul>
                <div className="text-center b_a_btn">
                  <a  className="btn btn_new2" onClick={handleBookAppointmentClick}>
                    Book Appointment
                  </a>
                </div>
              </div>
              <div id="menu1" className="tab-pane fade">
                <div className="updated">
                  <h3>Timing Slots To Be Updated</h3>
                </div>
              </div>
              <div id="menu2" className="tab-pane fade">
                <div className="updated">
                  <h3>Timing Slots To Be Updated</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="row">
          <div className="col-md-12"></div>
          <div className="clearfix" />
        </div>
        <div className="clearfix" />
      </div>
    </div>
   
  </div>
       )}
        {showAppointment && <FillYourInfo />} 
  </>
  

     );
}
 
export default BookYourSlots;