import React, { Component } from 'react';
import Carousel from './Carousel';

class Home extends Component{
  render(){
    return(
      <div>
        <Carousel className='home-carousel'/>
        <h1>CapsLok</h1>

        <div className = "blurb">
          <p className="company-blurb"> we design working pages for working
            folks who make products for the people. every step in our process
            ensures that the end user enjoys the experience of using your site.
            we do this by paying attention to the details and adhering to our
            primary principle that form must follow function. </p>
        </div>
      </div>
    );
  }
}
export default Home;
