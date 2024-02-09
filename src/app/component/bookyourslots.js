"use client"
import { useState } from "react";
import FillYourInfo from "./fillyourinfo";
import { useEffect } from "react";
import DateCarousel from "./datacarousel";
import { format, addMonths, subMonths } from 'date-fns';
import TimeCarousel from "./slotsCarousel";

const BookYourSlots = () => {
  const [selectedTab, setSelectedTab] = useState("morning"); 
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth() + 1); // Month is 0-based
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
    const [showAppointment, setShowAppointment] = useState(false);
    const [CurrentComp , setCurrentComp] = useState(true);
    const [IsMobile, setIsMobile]=useState(false);

    const handleMonthChange = (increment) => {
      // Increment can be 1 for next month or -1 for previous month
      const newDate = new Date(selectedYear, selectedMonth - 1 + increment, 1);
      setSelectedMonth(newDate.getMonth() + 1); // Month is 0-based in JavaScript Dates
      setSelectedYear(newDate.getFullYear());
    };
    const handleBookAppointmentClick = () => {
        setShowAppointment(true);
        setCurrentComp(false)
      };

      
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
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
                        <a href="#" onClick={() => handleMonthChange(-1)}>
                          <img
                            src="/images/year_arrow_left.png"
                            className="img-responsive"
                            alt=""
                          />{" "}
                        </a>{" "}
                        {format(new Date(selectedYear, selectedMonth - 1), 'MMMM')}{' '}
                        <a href="#"  onClick={() => handleMonthChange(1)}>
                          <img
                            src="images/year_arrow_right.png"
                            className="img-responsive"
                            alt=""
                          />{" "}
                        </a>
                      </h4>
                    </div>
                    <div className="col-md-4 col-xs-6 december">
                      <h4>
                        <a href="#" onClick={() => handleMonthChange(-12)}>
                          <img
                            src="images/year_arrow_left.png"
                            className="img-responsive"
                            alt=""
                          />{" "}
                        </a>{" "}
                        {format(new Date(selectedYear, selectedMonth - 1), 'yyyy')}{' '}
                        <a href="#" onClick={() => handleMonthChange(12)}>
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

      <DateCarousel selectedMonth={selectedMonth} selectedYear={selectedYear}></DateCarousel>
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
              <li className={selectedTab === "morning" ? "active" : ""} >
                <a data-toggle="tab" href="#morning" onClick={() => handleTabClick("morning")}>
                  Morning Slots
                </a>
              </li>
              <li className={selectedTab === "afternoon" ? "active" : ""}>
                <a data-toggle="tab" href="#afternoon" onClick={() => handleTabClick("afternoon")}>
                  Afternoon Slots
                </a>
              </li>
              <li className={selectedTab === "evening" ? "active" : ""}>
                <a data-toggle="tab" href="#evening" onClick={() => handleTabClick("evening")}>
                  Evening Slots
                </a>
              </li>
            </ul>
            <div className="tab-content">
  <div id="home" className="tab-pane fade in active">
  {/* <TimeslotsCarousel></TimeslotsCarousel> */}
    <ul className="timings_list">
      {IsMobile
        ? (
          <>
          <TimeCarousel></TimeCarousel>
            {/* <div id="first">
            <li className="zoomIn">
              <a href="#">07:00 AM</a>
            </li>
            <li className="zoomIn">
              <a href="#" className="active">
                08:00 AM
              </a>
            </li>
            <li className="zoomIn">
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
                  </div>
                  <div id="second">
            <li className="zoomIn">
              <a href="#">07:00 AM</a>
            </li>
            <li className="zoomIn">
              <a href="#" className="active">
                08:00 AM
              </a>
            </li>
            <li className="zoomIn">
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
                  </div>
                  <div id="third">
            <li className="zoomIn">
              <a href="#">07:00 AM</a>
            </li>
            <li className="zoomIn">
              <a href="#" className="active">
                08:00 AM
              </a>
            </li>
            <li className="zoomIn">
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
                  </div> */}
          </>
        )
        : (
        
          <>
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
          </>
        )
      }
    </ul>
    <div className="text-center b_a_btn">
      <a className="btn btn_new2" onClick={handleBookAppointmentClick}>
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