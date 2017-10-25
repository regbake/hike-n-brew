import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import Map from "./Map";


class Landing extends Component{
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      hike: {
        city: "",
        state: "",
        description: "",
        lat: "",
        lon: "",
        length: "",
        thumbnail: "",
      },
      brew: {
        name: "",
        city: "",
        overall: "",
        phone: "",
        status: "",
        street: "",
        zip: "",
        lat: "",
        lon: "",
      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/search/", {
      location: this.state.location
    })

    //api call of trails based on input
    $.ajax({
        url: 'https://trailapi-trailapi.p.mashape.com/?limit=5&lon=-&q[activities_activity_type_name_eq]=hiking&q[city_cont]='+this.state.location+'&radius=25', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(hike) {
          console.log(hike)
            },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) { //what's the beforeSend call?
        xhr.setRequestHeader("X-Mashape-Authorization", "9TRm77y42fmshbKC8mhoJDbFf111p1mClnPjsn0iUmYlE5gzRa"); // Enter here your Mashape key
        }
    });

    $.ajax({
        url: 'http://beermapping.com/webservice/loccity/707deabe170541be2a9cba98e95e92f5/'+this.state.location+'&s=json',
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(brew) {
          console.log(brew)
            },
        error: function(err) { alert(err); },
    });

    //google geocoding url
    //https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key='+'AIzaSyAZR0AqjyaFpY5WK2P7Labc62Jb-lExXNw',
      type: "GET",
      data: {},
      dataType: 'json',
      success: function(latLon) {
        console.log(latLon)
        latLon.results
      },
      error: function(err) { alert(err); },
    });

  }

  handleLocationChange = (e) => {
    this.setState({location: e.target.value});
  }

  render() {
    return (
      <div className="cover">

        <h1>Hike & Brew</h1>
        <h2>Hike & Brew with your crew!</h2>

        <form onSubmit={this.handleSubmit}>
          <input className="searchbox" type='text' placeholder="Search by city..." value={this.state.location} onChange={this.handleLocationChange} />
          <input className="btn-success" type="submit" value="Search" />
        </form>
        <div className="MapContainer">
          <Map initialPosition={{lat: 47.6, lng: -122.33}} />
        </div>
      </div>
    )
  }
}

export default Landing;
