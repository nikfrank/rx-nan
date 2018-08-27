import React, { Component } from 'react';
import './App.css';
import {
Route,
NavLink,
BrowserRouter as Router,
Switch,
Redirect,
} from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink to="/home"><div className="logo">CapsLok</div></NavLink>
            <NavLink to="/work"><div>work</div></NavLink>
            <NavLink to="/about"><div>about</div></NavLink>
            <NavLink to="/contact"><div>contact</div></NavLink>
          </nav>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/work" component={Work}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect from='/' to='/home'/>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
