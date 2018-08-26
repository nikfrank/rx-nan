import React, { Component } from 'react';
import Slider from 'react-slick';
import typewriter from './typewriterFix.jpg';
import record from './recordFix.jpg';
import train from './trainFix.jpg';
import feynman from './feynmanFix.jpg';
import './Carousel.css';

class Carousel extends Component {
  static defaultProps = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'carousel',
  };

  render() {
    const { ...sliderProps } = this.props;
    
    return (
      <Slider {...sliderProps}>

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
