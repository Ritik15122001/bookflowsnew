import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TimeCarousel = () => {
  const carouselData = [
    // Your data for each slide goes here
    // Example slide data for the first div
    [
      { time: '07:00 AM' },
      { time: '08:00 AM', active: true },
      { time: '09:00 AM' },
      { time: '09:30 AM' },
      { time: '10:00 AM' },
      { time: '10:30 AM' },
      { time: '11:00 AM' },
      { time: '11:30 AM' },
      { time: '07:00 AM' },
    ],
    // Example slide data for the second div
    [
      { time: '07:00 AM' },
      { time: '08:00 AM', active: true },
      { time: '09:00 AM' },
      { time: '09:30 AM' },
      { time: '10:00 AM' },
      { time: '10:30 AM' },
      { time: '11:00 AM' },
      { time: '11:30 AM' },
      { time: '07:00 AM' },
    ],
    // Example slide data for the third div
    [
      { time: '07:00 AM' },
      { time: '08:00 AM', active: true },
      { time: '09:00 AM' },
      { time: '09:30 AM' },
      { time: '10:00 AM' },
      { time: '10:30 AM' },
      { time: '11:00 AM' },
      { time: '11:30 AM' },
      { time: '07:00 AM' },
    ],
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    swipeToSlide: true, // Allow swipe to slide
    touchMove: true, // Allow touch to move
  };

  return (
    <Slider {...settings}>
      {carouselData.map((slideData, index) => (
        <div key={index}>
          <ul>
            {slideData.map(({ time, active }, listItemIndex) => (
              <li key={listItemIndex} className={`zoomIn ${active ? 'active' : ''}`}>
                <a href="#">{time}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Slider>
  );
};

export default TimeCarousel;
