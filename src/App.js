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
import Issues from './Issues';
import Contact from './Contact';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App page">
          <nav>
            <NavLink to="/home"><div className="logo">RX-nan</div></NavLink>
            <NavLink to="/issues"><div>The Issues</div></NavLink>
            
            <NavLink to="/contact"><div>Contact</div></NavLink>
            <NavLink to="/contact"><div>Doctors</div></NavLink>
          </nav>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/work" component={Work}/>
            <Route exact path="/issues" component={Issues}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect from='/' to='/home'/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
