import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const DateCarousel = ({ selectedMonth, selectedYear }) => {
  const [dateItems, setDateItems] = useState([]);
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);

  const sliderRef = useRef(null);

  useEffect(() => {
    const generateDateItems = () => {
      const startDate = startOfMonth(new Date(selectedYear, selectedMonth - 1));
      const endDate = endOfMonth(startDate);

      const days = eachDayOfInterval({ start: startDate, end: endDate });

      const formattedDates = days.map((day) => ({
        date: format(day, 'd'),
        month: format(day, 'MMM'),
        separator: '|',
        day: format(day, 'EEE'),
      }));

      setDateItems(formattedDates);
    };

    generateDateItems();
  }, [selectedMonth, selectedYear]);

  const settings = {
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: false,
    speed: 200,
    dots: false,
    arrows: true,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleDateBoxClick = (index) => {
    setSelectedDateIndex(index);
    // Perform any additional logic you need when a date_box is clicked
    console.log(`Clicked on date_box at index ${index}`);
  };

  return (
    <div>
      <div className="customNavigation5">
        <a className="btn prev5" onClick={handlePrev}>
          <img src="images/l_o.png" alt="Left" />
        </a>
        <a className="btn next5" onClick={handleNext}>
          <img src="images/r_o.png" alt="Right" />
        </a>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {dateItems.map((item, index) => (
          <div key={index} className={`item`}>
            <div
              className={`date_box ${selectedDateIndex === index ? 'active' : ''}`}
              style={{ flex: '0 0 auto' }}
              onClick={() => handleDateBoxClick(index)}
            >
              <div className="date_top">
                <h3 style={{ color: 'white' }}>{item.date}</h3>
              </div>
              <div className="date_bottom">
                <h5 style={{ color: 'white' }}>{item.month}</h5>
                <h3 style={{ color: 'white' }}>{item.separator}</h3>
                <p style={{ color: 'white' }}>{item.day}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DateCarousel;
