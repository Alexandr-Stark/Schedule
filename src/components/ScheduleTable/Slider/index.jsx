// Absolute import
import React from 'react';
import SliderSlick from 'react-slick';

//Styles
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { SliderWrapper } from './styled';

const Slider = ({ children }) => {

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    adaptiveHeight: true,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1169,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 857,
        settings: {
          className: '',
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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