import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
        <h1>do you like this font fucktard? </h1>
        <div class = "blurb">
        <p> we design working pages for working folks who make products for the people. every step in our process ensures that the end user enjoys the experience of using your site. we do this by paying attention to the details and adhering to our primary principle that form must follow function. </p>
        </div>
    </div>

    );
  }
}

export default App;
