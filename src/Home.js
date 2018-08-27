import React, { Component } from 'react';
import Carousel from './Carousel';

class Home extends Component{
  render(){
    return(
      <div>
        <Carousel className='home-carousel'/>
        <h1>RX-nan</h1>
        <div className = "blurb" style={{backgroundColor:'black'}}>
          <div style={{color:'#C3C3E6'}}>#C3C3E6</div>
          <div style={{color:'#A93F55'}}>#A93F55</div>
          <div style={{color:'#13505B'}}>#13505B</div>
          <div style={{color:'#dddddd'}}>#dddddd</div>
          <div style={{color:'#F3F7F0'}}>#F3F7F0</div>
        </div>
      </div>
    );
  }
}
export default Home;
