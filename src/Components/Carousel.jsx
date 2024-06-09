import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from '@heroicons/react/24/outline';

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="md-mx:hidden absolute z-10 cursor-pointer   slick-arrow top-[40%] left-5" onClick={onClick}>
    <ArrowLeftCircleIcon className="transition duration-300 ease-in-out h-10 hover:text-gray-500 text-white w-10"/>
     </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="md-mx:hidden absolute z-10 slick-arrow top-[40%] right-5" onClick={onClick}>
      <ArrowRightCircleIcon className="h-10 transition duration-300 ease-in-out hover:text-gray-500 text-white w-10" />
    </button>
  );
};


const Carousel = () => {
  const sliderRef = useRef(null);
  const offers=[1,2,3,4,5,6, 7, 8];
  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full max-h-fit">
    <Slider {...settings} ref={sliderRef}>
    {
      offers.map((x, index)=>
       <div key={index} className=" cursor-pointer  overflow-hidden">
        <img src={`../../Ekart/Images/img${x}.jpg`}  alt="Slide" className="w-auto sm-mx:!hidden object-cover min-h-[30vh] " />
        <img src={`../../Ekart/Images/smallimg${x}.jpg`}  alt="Slide" className="w-auto sm:!hidden object-cover min-h-[30vh] " />
      </div>
      )
    }
    </Slider>
    </div>
  );
};

export default Carousel;
