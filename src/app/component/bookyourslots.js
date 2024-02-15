"use client"
import { useState } from "react";
import FillYourInfo from "./fillyourinfo";
import { useEffect } from "react";
import DateCarousel from "./datacarousel";
import TimeCarousel from "./slotsCarousel";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Link from '@mui/material/Link';



const BookYourSlots = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTab, setSelectedTab] = useState("morning"); 
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth() + 1); // Month is 0-based
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
    const [showAppointment, setShowAppointment] = useState(false);
    const [CurrentComp , setCurrentComp] = useState(true);
    const [IsMobile, setIsMobile]=useState(false);
    const [value, setValue] = useState(null);
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [openDatePicker2, setOpenDatePicker2] = useState(false);
  

 
    const handleLinkClick = () => {
      setOpenDatePicker(true);
    };

    const handleLinkClick2 = () => {
      setOpenDatePicker2(true);
    };
  
    const handleDatePickerClose = () => {
      setOpenDatePicker(false);
    };

    const handleDatePickerClose2 = () => {
      setOpenDatePicker2(false);
    };

    const handleMonthPickerOpen = () => {
      setIsMonthPickerOpen(true);
    };
  
    const handleMonthPickerClose = () => {
      setIsMonthPickerOpen(false);
    };

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


  const handleMonthPickerChange = (newDate) => {
   
    setSelectedMonth( new Date(newDate).getMonth()+1);
    handleDatePickerClose()
    
    console.log('Selected Date:', new Date(newDate).getMonth());
  };

  const handleYearPickerChange =(newDate)=>{
    setSelectedYear(new Date(newDate).getFullYear())
    handleDatePickerClose2()
    console.log('Selected Date:', new Date(newDate).getFullYear());
  }
 
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
    
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                      
                        <div>
                        <a href="#" onClick={() => handleMonthChange(-1)}>
                          <img
                            src="/images/year_arrow_left.png"
                            className="img-responsive"
                            alt=""
                          />{" "}
                        </a>{" "}
      <Link
        style={{ color: 'white', cursor: 'pointer' }}
        onClick={handleLinkClick}
      >
        
        
        {format(new Date(selectedYear, selectedMonth - 1), 'MMMM')}
     
      </Link>
      <a href="#"  onClick={() => handleMonthChange(1)}>
                          <img
                            src="images/year_arrow_right.png"
                            className="img-responsive"
                            alt=""
                          />{" "}
                        </a>

      {openDatePicker && (
      <div  style={{zIndex:999,position:'absolute'}}>  <StaticDatePicker
  label={'"Year"'}
  openTo="Year"
  views={[ 'month']}
  sx={{color:'#000'}}
  open={openDatePicker}
  onClose={handleDatePickerClose}
  onChange={handleMonthPickerChange}
/> 


</div>  )}

{openDatePicker2 && (
      <div  style={{zIndex:999,position:'absolute'}}>  <StaticDatePicker
  label={'"Year"'}
  openTo="Year"
  views={[ 'year']}
  sx={{color:'#000'}}
  open={openDatePicker2}
  onClose={handleDatePickerClose2}
  onChange={handleYearPickerChange}
/> 


</div>  )}
    </div>                   
                      </h4>
                    </div>
                    <div className="col-md-5 col-xs-6 december">
                      <h4>
                        <a href="#" onClick={() => handleMonthChange(-12)}>
                          <img
                            src="images/year_arrow_left.png"
                            className="img-responsive"
                            alt=""
                          />{" "}
                        </a>{" "}       
                        
                        <Link
        style={{ color: 'white', cursor: 'pointer' }}
        onClick={handleLinkClick2}
      >
       
                        {format(new Date(selectedYear, selectedMonth - 1), 'yyyy')}{' '}
     
      </Link>
                        
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
            <div id="morning" className={`tab-pane fade ${selectedTab === "morning" ? "in active" : ""}`}>
    <ul className="timings_list">
      {IsMobile
        ? (
          <>
          <TimeCarousel></TimeCarousel>
        
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
  <div id="afternoon" className={`tab-pane fade ${selectedTab === "afternoon" ? "in active" : ""}`}>
    <ul className="timings_list">
      {IsMobile
        ? (
          <>
          <TimeCarousel></TimeCarousel>
        
          </>
        )
        : (
        
          <>
            <li className=" zoomIn">
            <a href="#">07:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#" classNPMe="active">
                      08:00 PM
                    </a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">09:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">09:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">10:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">10:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">11:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">11:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">09:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">09:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">10:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">10:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">11:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">11:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">07:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">08:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">09:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">09:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">10:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">10:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">11:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">11:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">07:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">08:00 PM</a>
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
  <div id="evening" className={`tab-pane fade ${selectedTab === "evening" ? "in active" : ""}`}>
    <ul className="timings_list">
      {IsMobile
        ? (
          <>
          <TimeCarousel></TimeCarousel>
        
          </>
        )
        : (
        
          <>
            <li className=" zoomIn">
            <a href="#">07:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#" classNPMe="active">
                      05:00 PM
                    </a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">06:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">09:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">10:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">10:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">11:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">11:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">07:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">08:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">09:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">09:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">10:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">10:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">11:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">11:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">07:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">08:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">09:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">09:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">10:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">10:30 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">11:00 PM</a>
                  </li>
                  <li classNPMe=" zoomIn">
                    <a href="#">11:30 PM</a>
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
  {/* <div id="menu1" className="tab-pane fade">
    <div className="updated">
      <h3>Timing Slots To Be Updated</h3>
    </div>
  </div> */}
  {/* <div id="menu2" className="tab-pane fade">
    <div className="updated">
      <h3>Timing Slots To Be Updated</h3>
    </div>
  </div> */}
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
  </LocalizationProvider>

     );
}
 
export default BookYourSlots;