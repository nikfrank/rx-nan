import React, {Component} from 'react';
import './Issues.css';

class Issues extends Component {
  render() {
    return(
      <div className='page'>
        <div className='about-tiles'>

          <div className='about-jacob about-tile'>
            <div className='about-img-div'>
            </div>
            <ul>
              <li><h2>Jacob Mirrage</h2></li>
              <li><h3>Senior Head of Accounts</h3></li>

            </ul>
          </div>

          <div className='about-page-border-1' />

          <div className='about-moran about-tile'>
            <ul>
              <li><h2>Moran Errad</h2></li>
              <li><h3>VP Human Resources</h3></li>
              </ul>
            <div className='about-img-div'>
            </div>
          </div>

          <div className='about-page-border-2'/>

          <div className='about-ferkin about-tile'>
            <div className='about-img-div'>
            </div>
            <ul>
              <li><h2>Fadi Ishmael</h2></li>
              <li><h3>CTO</h3></li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default Issues;
