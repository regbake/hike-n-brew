import React, { Component } from 'react';
import './App.css';

class TrailAPI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      thumbnail: "",
      description: "",
      length: "",
      lat: "",
      lon: ""
    };
  }
  componentDidMount() {
    let trailAPI = "https://trailapi-trailapi.p.mashape.com/?limit=5&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Seattle"
    fetch(trailAPI)
    .then(response => response.json())
    .then(response => {
      this.setState({
        name: response.name,
        thumbnail: response.places.thumbnail,
        description: response.places.description,
        length: response.places.length,
        lat: response.places.lat,
        lon: response.places.lon
      })
    }).catch(ex => console.log("We got an error", ex));
  }

  render() {
    return (
      <div className="Trails">
        <h1>Trail:{this.state.name}</h1>
        <p>{this.state.thumbnail}</p>
        <p>{this.state.description}</p>
      </div>
    )
  }
}

export default TrailAPI;
