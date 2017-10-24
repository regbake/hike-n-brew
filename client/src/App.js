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
      <div className="App">
      <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Hike & Brew</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </nav>

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
    );
  }
}

export default App;
