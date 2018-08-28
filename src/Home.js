import React, { Component } from 'react';
import './Home.css';
import Blood from './imgs/blood.svg';
import Group from './imgs/group.svg';
import Perscription from './imgs/prescription.svg';
import Syringe from './imgs/syringe (1).svg';
import Correct from './imgs/correct.svg'
import X from './imgs/letter-x.svg'

class Home extends Component{
  render(){
    return(
      
      <div className='page'>
        <div className='home-tiles'>
          <div className='home-jacob home-tile'>
            <h1 style={{color:'black'}}>Help for coverage</h1>
            <div className='home-img-div'>

            </div>
          </div>

          <div className='home-page-border-1' />
          
          <div className='home-moran home-tile'>
            <img src={Perscription}/>
            <img src={Blood}/>
            <img src={Syringe}/>
            <img src={Group}/>
          </div>

          <div className='home-page-border-2'/>
          
          <div className='home-ferkin home-tile'>
            <img src={Correct}/>
            <img src={Correct}/>
            <img src={X}/>
            <img src={Correct}/>
          </div>
          
          <div className='home-page-border-1'/>
          
          <div className='home-moran home-tile'>
            <h1 className='home-h1-covered'><br/>Covered</h1>
            <h1 className='home-h1-covered'><br/>Covered</h1>
            <h1 className='home-h1-not-covered'>Not<br/>Covered</h1>
            <h1 className='home-h1-2'>2<br/>per day</h1>
          </div>
          

        </div>

        
        <div className = "blurb" >
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
