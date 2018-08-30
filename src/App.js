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
import Logo from './imgs/capslok-nobg.png';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App page">
          <nav>
            <NavLink to="/home"><div className="logo">Pharmacist Nanci</div></NavLink>
            <NavLink to="/issues"><div>The Issues</div></NavLink>            
            <NavLink to="/contact"><div>Contact</div></NavLink>
          </nav>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/work" component={Work}/>
            <Route exact path="/issues" component={Issues}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect from='/' to='/home'/>
          </Switch>

          <div className="foot">
            <h2 className="credits">Nanci Frank</h2>
            <div><img src={Logo} className="logo-cap"/></div>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
