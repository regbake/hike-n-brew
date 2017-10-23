import React, { Component } from "react";
import axios from "axios";

class Landing extends Component{
  constructor(props) {
    super(props);

    this.state = {
      location: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
    axios.post("/search/", {
      location: this.state.location
    })
  }

  handleLocationChange = (e) => {
    this.setState({location: e.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.location} onChange={this.handleLocationChange} />
          <input type="submit" value="search!" />
        </form>
      </div>
    )
  }
}

export default Landing;
