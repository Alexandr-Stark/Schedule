// Absolute import
import React from 'react';
import SliderSlick from 'react-slick';

//Styles
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrapper } from './styled';

const Slider = ({ children }) => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    slidesToShow: 3,
    speed: 500,
    adaptiveHeight: true,
    initialSlide: 2,
  };

  return (
    <SliderWrapper>
      <SliderSlick {...settings}>
        {children}
      </SliderSlick>
    </SliderWrapper>
  );
};

export default Slider;