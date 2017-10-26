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
import MoreBrews from "./MoreBrews";
import MoreHikes from "./MoreHikes"
// import MapContainer from './MapContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: MountainBeer,
      token: {},
      user: {}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  render() {
    return (
      <div>
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
                  <li><Link to="signup"><span className="glyphicon glyphicon-user"></span>Sign Up</Link></li>
                  <li><Link to="login"><span className="glyphicon glyphicon-log-in"></span>Login</Link></li>
                </ul>
              </div>
            </nav>

            <Route exact path="/"  render={(props) => <Landing />}/>
            <Route path="/profile" />
            <Route path="/about" />
            <Route path="/signup" render={(props) => <Signup  lift={this.liftTokenToState} />} />
            <Route path="/login" render={(props) => <Login  lift={this.liftTokenToState} />} />
            <Route path="/MoreBrews" render={(props) => <MoreBrews />} />
            <Route path="/MoreHikes" render={(props) => <MoreHikes />} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
