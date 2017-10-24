import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Landing from "./Landing";
import Brewery from "./Brewery";
import Map from "./Map";
import AuthenticatedRoute from './AuthenticatedRoute';
import MountainBeer from "./images/mountainbeer.jpg";
// import MapContainer from './MapContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: {}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
  }

  liftTokenToState(token) {
    this.setState({token: token})
  }

  render() {
    return (
      <Router>
      <div className="App">


      <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Hike & Brew</Link>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              <li><Link to="login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </ul>
          </div>
        </nav>

        <Router exact path="/" />
        <Router path="/profile" />
        <Router path="/about" />
        <Router path="/signup" />
        <Router path="/login" />


        <div className="cover">
          <h1>Hike & Brew</h1>
          <h2>Hike & Brew with your crew!</h2>
        </div>

        <div>
          <Landing />
        </div>

        <div className="SignupBox">
          <Signup lift={this.liftTokenToState} />
        </div>
        <div className="LoginBox">
          <Login lift={this.liftTokenToState} />
        </div>

        <div className="MapContainer">
          <Map initialPosition={{lat: 48, lng: 2.2}} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
