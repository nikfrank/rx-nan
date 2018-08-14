import React from 'react';
import Slider from 'react-slick';
import typewriter from './typewriter.jpg';
import record from './record.jpg';
import train from './train.jpg';
import feynman from './feynman.png';
import './Carousel.css';

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'carousel',
    };
    
    return (
      <Slider {...settings}>
          <div>
            <img src={typewriter} alt='typewriter'/>
          </div>
          <div>
            <img src={record} alt='record'/>
          </div>        
          <div>
            <img src={feynman} alt='Dr Richard Feynman'/>
          </div>
          <div>
            <img src={train} alt='train'/>
          </div>
      </Slider>
    );
  }
}

export default Carousel;
