import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import Map from "./Map";
import MountainBeer from "./images/mountainbeer.jpg";
import MoreBrews from "./MoreBrews";
import MoreTrails from "./MoreTrails";


class Landing extends Component{
  constructor(props) {
    super(props);

    this.state = {
      image: MountainBeer,
      location: "",
      locationLat: 47.6,
      locationLng: -122.33,
      hike: {},
      brew: {
        name: "",
        city: "",
        overall: "",
        phone: "",
        state: "",
        status: "",
        street: "",
        zip: "",
        lat: "",
        lng: ""
      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/search/", {
      location: this.state.location
    }).then(
      $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.state.location+'&key='+'AIzaSyAZR0AqjyaFpY5WK2P7Labc62Jb-lExXNw',
        type: "GET",
        data: {},
        dataType: 'json',
        success: function(latLng) {
          this.setState({
            locationLat: latLng.results[0].geometry.location.lat,
            locationLng: latLng.results[0].geometry.location.lng
          });
          this.map.goToSearch(); //send the search lat/lng to Map
        }.bind(this),
        error: function(err) { alert(err); },
      })
    )

    //api call of trails based on input
    $.ajax({
        url: 'https://trailapi-trailapi.p.mashape.com/?limit=5&lng=-&q[activities_activity_type_name_eq]=hiking&q[city_cont]='+this.state.location+'&radius=25', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(hike){
          console.log(hike)
          this.setState({
            hike: hike.places
          })
        }.bind(this),
        error: function(err) { alert(err); },

        beforeSend: function(xhr) { //what's the beforeSend call?
        xhr.setRequestHeader("X-Mashape-Authorization", "9TRm77y42fmshbKC8mhoJDbFf111p1mClnPjsn0iUmYlE5gzRa"); // Enter here your Mashape key
        }
    }).then(console.log("hey"));

    $.ajax({
        url: 'http://beermapping.com/webservice/loccity/707deabe170541be2a9cba98e95e92f5/'+this.state.location+'&s=json',
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(brew){
          console.log(brew)
          this.setState({
            name: brew.name,
            city: brew.city,
            overall: brew.overall,
            phone: brew.phone,
            street: brew.street,
            zip: brew.zip,
            lat: brew.lat,
            lng: brew.lng
          })
        }.bind(this),
        error: function(err) { alert(err); },

    });

//*****The stuff below is working but just put elsewhere
    //google geocoding url
    //https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=
    // $.ajax({
    //   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key='+'AIzaSyAZR0AqjyaFpY5WK2P7Labc62Jb-lExXNw',
    //   type: "GET",
    //   data: {},
    //   dataType: 'json',
    //   success: function(latLng) {
    //     console.log(latLng)
    //     latLng.results
    //   },
    //   error: function(err) { alert(err); },
    // });

  }

  handleLocationChange = (e) => {
    this.setState({location: e.target.value});
  }



  render() {
    return (
      <div>
        <div className="header">

          <h1>Hike & Brew</h1>
          <h2>Hike & Brew with your crew!</h2>

          <form onSubmit={this.handleSubmit}>
            <input className="searchbox" type='text' placeholder="Search by city..." value={this.state.location} onChange={this.handleLocationChange} />
            <input className="btn-success" type="submit" value="Search" />
          </form>
          <div className="MapContainer">
            <Map initialPosition={{lat: this.state.locationLat, lng: this.state.locationLng}} ref={instance => { this.map = instance; }} />
          </div>
        </div>
        <div className="MoreBrews">
          <MoreBrews initialBrewData=
            {{overall: this.state.overall,
              street: this.state.street,
              phone: this.state.phone,
              status: this.state.status,
              city: this.state.city,
              state: this.state.state,
              name: this.state.name }}/>
        </div>
        <div className="MoreTrails">
          <MoreTrails initialTrailsData=
            {{name: this.state.name,
              city: this.state.city,
              state: this.state.state,
              description: this.state.description,
              length: this.state.length,
              thumbnail: this.state.thumbnail }} />
        </div>

      </div>
    )
  }
}

export default Landing;
