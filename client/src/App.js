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
import AuthenticatedRoute from './AuthenticatedRoute';
import MapContainer from './MapContainer';
import TrailAPI from './TrailAPI';

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
<nav>
<ul className="nav-bar">
<li><a href="/">Home</a></li>
<li><a href="#">Sign Up</a></li>
<li><a href="#">Login</a></li>
<li><a href="#">About us bois</a></li>
</ul>
</nav>


      <div>
        <h1>Hike & Brew</h1>
        <h2>Hike & Brew with your crew!</h2>
      </div>



        <div className="SignupBox">
          <Signup lift={this.liftTokenToState} />
        </div>
        <div className="LoginBox">
          <Login lift={this.liftTokenToState} />
        </div>

        <div>
          <Landing />

        <div className="MapContainer">
          < this.state.MapContainer />
        </div>
        <div>
          <TrailAPI />

        </div>
      </div>
    );
  }
}

export default App;
