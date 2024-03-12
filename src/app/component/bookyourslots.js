"use client"
import React from 'react';
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
import axios from 'axios';




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
    const [selectedDay, setSelectedDay]= useState("Monday")
    const [morningtimingsData, setMorningTimingsData] = useState([]);
    const [aftertimingsData, setAfternoonTimingsData] = useState([]);
    const [eveningtimingsData, setEveningTimingsData] = useState([]);
    const [date, setDate]= useState();
    const [slot, setSlots] = useState();
    const [number,setNumber]= useState();
    const [bookedSlot, setBookedSlot] = useState({
      morning: [],
      afternoon: [],
      evening: [],
    });
    
    const handleTimeSlotClick = (time) => {
      const updatedBookedSlot = {
        morning: selectedTab === 'morning' ? [time] : [],
        afternoon: selectedTab === 'afternoon' ? [time] : [],
        evening: selectedTab === 'evening' ? [time] : [],
      };
      setSlots(time);
      setBookedSlot(updatedBookedSlot);
    };
  
    // const morningtimingsData = [
    //   "07:00 AM", "08:00 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
     
    // ];
    // const aftertimingsData = [
    //   "07:00 PM", "08:00 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM",
     
    // ];
    // const eveningtimingsData = [
    //   "07:00 AM", "08:00 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
     
    // ];

    const getday =(day)=>{
      setSelectedDay(day)
      getslots()
    }

    const getDate =(dateitem)=>{
      // localStorage.setItem("selectedDate", dateitem);
      setDate(dateitem)
      console.log("dateitem-------->"+dateitem)
    }
    
    const getnumber = (Number)=>{
       postData(Number)
    }
    console.log("Number------>"+number)
    

    console.log("slectedslotssss-->"+slot);
    localStorage.setItem("selectedSlots", slot);
    localStorage.setItem("selectedDate", date);
    


    const getslots = async () => {
      try {
        const response = await axios.get('http://localhost:8000/appointment');
        const data = response.data;
        const filteredData = data.filter(item => item.day.includes(selectedDay));
        console.log(filteredData)
        if (filteredData.length > 0) {
          const { morning, afternoon, evening } = filteredData[0].timeSlots;
          setMorningTimingsData(morning);
          setAfternoonTimingsData(afternoon);
          setEveningTimingsData(evening);
        } else {
          console.error('No data found for the selected day');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    const postData = async (phoneNumber) => {
      try {
        const dataToSend = {
          serialNo: "12345678", 
          date: date, 
          bookedSlot: bookedSlot,
          phoneNumber:phoneNumber, 
        };
    
        const response = await axios.post('http://localhost:8000/appointment-details', dataToSend);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
 
   
    
    // 
    useEffect(() => {
      getslots();
      postData();
    }, []); 


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
      const newDate = new Date(selectedYear, selectedMonth - 1 + increment, 1);
      setSelectedMonth(newDate.getMonth() + 1); 
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

      <DateCarousel selectedMonth={selectedMonth} selectedYear={selectedYear} getday={getday} getDate={getDate}></DateCarousel>
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
    {IsMobile ? (
      <TimeCarousel></TimeCarousel>
    ) : (
      <>
        {morningtimingsData.map((time, index) => (
          <li key={index} className="zoomIn">
            <a href="#" className={index === 1 ? "active" : ""} onClick={() => handleTimeSlotClick(time)}>
              {time}
            </a>
          </li>
        ))}
      </>
    )}
  </ul>
    <div className="text-center b_a_btn">
      <a className="btn btn_new2" onClick={handleBookAppointmentClick}>
      Book Appointment
      </a>
    </div>
  </div>
  <div id="afternoon" className={`tab-pane fade ${selectedTab === "afternoon" ? "in active" : ""}`}>
  <ul className="timings_list">
    {IsMobile ? (
      <TimeCarousel></TimeCarousel>
    ) : (
      <>
        {aftertimingsData.map((time, index) => (
          <li key={index} className="zoomIn">
            <a href="#" className={index === 1 ? "active" : ""}>
              {time}
            </a>
          </li>
        ))}
      </>
    )}
  </ul>
    <div className="text-center b_a_btn">
      <a className="btn btn_new2" onClick={handleBookAppointmentClick}>
        Book Appointment
      </a>
    </div>
  </div>
  <div id="evening" className={`tab-pane fade ${selectedTab === "evening" ? "in active" : ""}`}>
  <ul className="timings_list">
    {IsMobile ? (
      <TimeCarousel></TimeCarousel>
    ) : (
      <>
        {eveningtimingsData.map((time, index) => (
          <li key={index} className="zoomIn">
            <a href="#" className={index === 1 ? "active" : ""}>
              {time}
            </a>
          </li>
        ))}
      </>
    )}
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
        {showAppointment && <FillYourInfo getnumber={getnumber} />} 
  </>
  </LocalizationProvider>

     );
}
 
export default BookYourSlots;