import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import Map from "./Map";
import MountainBeer from "./images/mountainbeer.jpg";


class Landing extends Component{
  constructor(props) {
    super(props);

    this.state = {
      image: MountainBeer,
      location: "", //set state location on search
      locationLat: 47.6, //seattle lat/lng to start
      locationLng: -122.33,
      //store the first 5 hikes, 0 index naming
      hike0: {
        name: "",
        state: "",
        city: "",
        lat: "",
        lng: "",
        description: "",
        length: ""
      },
      hike1: {
        name: "",
        state: "",
        city: "",
        lat: "",
        lng: "",
        description: "",
        length: ""
      },
      hike2: {
        name: "",
        state: "",
        city: "",
        lat: "",
        lng: "",
        description: "",
        length: ""
      },
      hike3: {
        name: "",
        state: "",
        city: "",
        lat: "",
        lng: "",
        description: "",
        length: ""
      },
      hike4: {
        name: "",
        state: "",
        city: "",
        lat: "",
        lng: "",
        description: "",
        length: ""
      },
      //store the first 5 brews, 0 index naming
      brew0: {
        name: "",
        city: "",
        overall: "",
        phone: "",
        state: "",
        status: "",
        street: "",
        zip: ""
      },
      brew0Location: {
        lat: "",
        lng: ""
      },
      brew1: {
        name: "",
        city: "",
        overall: "",
        phone: "",
        state: "",
        status: "",
        street: "",
        zip: ""
      },
      brew1Location: {
        lat: "",
        lng: ""
      },
      brew2: {
        name: "",
        city: "",
        overall: "",
        phone: "",
        state: "",
        status: "",
        street: "",
        zip: ""
      },
      brew2Location: {
        lat: "",
        lng: ""
      },
      brew3: {
        name: "",
        city: "",
        overall: "",
        phone: "",
        state: "",
        status: "",
        street: "",
        zip: ""
      },
      brew3Location: {
        lat: "",
        lng: ""
      },
      brew4: {
        name: "",
        city: "",
        overall: "",
        phone: "",
        state: "",
        status: "",
        street: "",
        zip: ""
      },
      brew4Location: {
        lat: "",
        lng: ""
      }
    };

  }

//this is where all the APIs queries and AJAX calls are
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
      }));

    //assign some temp data before setting state
    let hikes= [{}, {}, {}, {}, {}];
    // let hikes= [hike0, hike1, hike2, hike3, hike4];

    //api call of trails based on input
    $.ajax({
        url: 'https://trailapi-trailapi.p.mashape.com/?limit=5&lng=-&q[activities_activity_type_name_eq]=hiking&q[city_cont]='+this.state.location+'&radius=25', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(hike){
          // console.log("hike response: ", hike0);
          // for loop to set the state for each hike
          for (let i = 0; i<hike.places.length; i++) {

            hikes[i] = {
              name: hike.places[i].name,
              state: hike.places[i].state,
              city: hike.places[i].city,
              lat: hike.places[i].lat,
              lng: hike.places[i].lon,
              description: hike.places[i].description,
              length: hike.places[i].length
            };
          }

          console.log("checking to see the hike states", hikes);
        }.bind(this),
        error: function(err) { alert(err); },

        beforeSend: function(xhr) { //what's the beforeSend call?
        xhr.setRequestHeader("X-Mashape-Authorization", "9TRm77y42fmshbKC8mhoJDbFf111p1mClnPjsn0iUmYlE5gzRa"); // Enter here your Mashape key
        }
    }).then(console.log("searched for hikes"));

    $.ajax({
        url: 'http://beermapping.com/webservice/loccity/707deabe170541be2a9cba98e95e92f5/'+this.state.location+'&s=json',
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(brew){
          console.log("brew response: ", brew)

          this.setState({ //update state from brew api call
            brew0: {
              name: brew[0].name,
              street: brew[0].street,
              zip: brew[0].zip,
              city: brew[0].city,
              overall: brew[0].overall,
              phone: brew[0].phone
            }
          });
          console.log("this.state.brew: ", this.state.brew0)
          //convert addresses to lat/lng
          $.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.state.brew0.street+ "," +this.state.brew0.zip+'&key='+'AIzaSyAZR0AqjyaFpY5WK2P7Labc62Jb-lExXNw',
            type: "GET",
            data: {},
            dataType: 'json',
            success: function(latLng) {
              // console.log("at the converted address/latLng: ", latLng.results[0].geometry.location);
              this.setState({ //update state brew/latLng
                brew0Location: {
                  lat: latLng.results[0].geometry.location.lat,
                  lng: latLng.results[0].geometry.location.lng
                }
              });
              console.log("this.state.brew: ", this.state.brew0Location)
            }.bind(this),
            error: function(err) { alert(err); },
          })

        }.bind(this),
        error: function(err) { alert(err); },
    });
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

      </div>
    )
  }
}

export default Landing;
