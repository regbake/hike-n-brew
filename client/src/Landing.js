import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import Map from "./Map";
import MountainBeer from "./images/mountainbeer.jpg";
import MoreBrews from "./MoreBrews";
import MoreHikes from "./MoreHikes";


class Landing extends Component{
  constructor(props) {
    super(props);

    this.state = {
      image: MountainBeer,
      location: "", //set state location on search
      locationLat: 47.6, //seattle lat/lng to start
      locationLng: -122.33,
      //store the first 5 hikes, 0 index naming
      hikes: [],
      brews: []
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
          //convert lat/lng of search location
          this.setState({
            locationLat: latLng.results[0].geometry.location.lat,
            locationLng: latLng.results[0].geometry.location.lng
          });
          this.map.goToSearch(); //send the search lat/lng to Map
        }.bind(this),
        error: function(err) { alert(err); },
      }));

    //assign some temp data before setting state
    let tempHikes= [{}, {}, {}, {}, {}];

    //api call of trails based on input
    $.ajax({
        url: 'https://trailapi-trailapi.p.mashape.com/?limit=5&lng=-&q[activities_activity_type_name_eq]=hiking&q[city_cont]='+this.state.location+'&radius=25', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(hike){

          // for loop to set the state for each hike
          for (let i = 0; i<hike.places.length; i++) {
            tempHikes[i] = {
              name: hike.places[i].name,
              state: hike.places[i].state,
              city: hike.places[i].city,
              lat: hike.places[i].lat,
              lng: hike.places[i].lon,
              description: hike.places[i].description,
              length: hike.places[i].length
            };
          }
        }.bind(this),
        error: function(err) { alert(err); },

        beforeSend: function(xhr) { //what's the beforeSend call?
        xhr.setRequestHeader("X-Mashape-Authorization", "9TRm77y42fmshbKC8mhoJDbFf111p1mClnPjsn0iUmYlE5gzRa"); // Enter here your Mashape key
        }
    }).then(console.log("searched for hikes"));

    let tempBrews = [{}, {}, {}, {}, {}];

    $.ajax({
        url: 'http://beermapping.com/webservice/loccity/707deabe170541be2a9cba98e95e92f5/'+this.state.location+'&s=json',
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(brew){
          console.log("brew response: ", brew);

          if(brew.length > 5){
            for (let i=0; i<5; i++) {
              tempBrews[i] = {
                name: brew[i].name,
                city: brew[i].city,
                overall: brew[i].overall,
                phone: brew[i].phone,
                state: brew[i].state,
                status: brew[i].status,
                street: brew[i].street,
                zip: brew[i].zip
              }
            }
          } else {
            for (let i = 0; i<brew.length; i++) {
              tempBrews[i] = {
                name: brew[i].name,
                city: brew[i].city,
                overall: brew[i].overall,
                phone: brew[i].phone,
                state: brew[i].state,
                status: brew[i].status,
                street: brew[i].street,
                zip: brew[i].zip
              }
            }
          }

          console.log("after the brew loop ", tempBrews)

          for (let i=0; i<tempBrews.length; i++){
            //convert addresses to lat/lng
            $.ajax({
              url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+tempBrews[i].street+ "," +tempBrews[i].zip+'&key='+'AIzaSyAZR0AqjyaFpY5WK2P7Labc62Jb-lExXNw',
              type: "GET",
              data: {},
              dataType: 'json',
              success: function(latLng) {
                //CONVERT THE ADDRESS TO LAT/LNG HERE
                tempBrews[i].lat = latLng.results[0].geometry.location.lat;
                tempBrews[i].lng = latLng.results[0].geometry.location.lng;

                // console.log("lat/lng converstion here ", i, latLng, tempBrews)
                this.setState({brews: tempBrews});
                this.setState({hikes: tempHikes});
              }.bind(this),
              error: function(err) { alert(err); },
            })
          }
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
        <div className="header section backgroundImage img-reponsive container-fluid"  style = {{backgroundImage: `url(${this.state.image})`}}>
          <h1>Hike & Brew</h1>
          <h2>Hike & Brew with your crew!</h2>
          <form onSubmit={this.handleSubmit}>
            <input className="searchbox" type='text' placeholder="Search by city..." value={this.state.location} onChange={this.handleLocationChange} />
            <input className="btn-success" type="submit" value="Search" />
          </form>

        </div>

        <div className="second-fold section container-fluid">
          <div className="map-container col-lg-6 col-sm-10">
            <Map initialPosition={{lat: this.state.locationLat, lng: this.state.locationLng}} ref={instance => { this.map = instance; }} />
          </div>
          <div className="fav-container col-lg-4 col-sm-8">
            <h3>Favorited</h3>
            <div className="fav"><p>Dummy data</p></div>
            <div className="fav"><p>Dummy data</p></div>
            <div className="fav"><p>Dummy data</p></div>
            <div className="fav"><p>Dummy data</p></div>
            <div className="fav"><p>Dummy data</p></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
