import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then(result => {
      console.log("submit handled")
      localStorage.setItem('mernToken', result.data.token)
      this.props.lift(result.data)
    })
  }

  render() {
    return (
      <div>
      <h3>Log in</h3>
      <form onSubmit={this.handleSubmit}>
        Email: <input className="log-in-text" type='text' value={this.state.email} onChange={this.handleEmailChange} /><br />
        Password: <input className="log-in-text" type='password' value={this.state.password} onChange={this.handlePasswordChange} /><br />
        <input type='submit' value='Log in' />
      </form>
      </div>

    );
  }
}

export default Login;
