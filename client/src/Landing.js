import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import Map from "./Map";
import MountainBeer from "./images/mountainbeer.jpg";
import MoreBrews from "./MoreBrews";
import MoreHikes from "./MoreHikes";
import Scrollchor from 'react-scrollchor';

var counter = 0;
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

//********** OG CODE HERE *********////////
//this is where all the APIs queries and AJAX calls are
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //
  //   //assign some temp data before setting state
  //   let tempHikes= [{}, {}, {}, {}, {}];
  //   let tempBrews = [{}, {}, {}, {}, {}];
  //   let tempLocationLat = "";
  //   let tempLocationLng = "";
  //
  //   axios.post("/search/", {
  //     location: this.state.location
  //   }).then(
  //     $.ajax({
  //       url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.state.location+'&key='+'AIzaSyAZR0AqjyaFpY5WK2P7Labc62Jb-lExXNw',
  //       type: "GET",
  //       data: {},
  //       dataType: 'json',
  //       success: function(latLng) {
  //         //convert lat/lng of search location
  //         tempLocationLat = latLng.results[0].geometry.location.lat;
  //         tempLocationLng = latLng.results[0].geometry.location.lng;
  //       }.bind(this),
  //       error: function(err) { alert(err); },
  //     }));
  //
  //   //api call of trails based on input
  //   $.ajax({
  //       url: 'https://trailapi-trailapi.p.mashape.com/?limit=5&lng=-&q[activities_activity_type_name_eq]=hiking&q[city_cont]='+this.state.location+'&radius=25', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
  //       type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
  //       data: {}, // Additional parameters here
  //       dataType: 'json',
  //       success: function(hike){
  //
  //         // for loop to set the state for each hike
  //         for (let i = 0; i<hike.places.length; i++) {
  //           tempHikes[i] = {
  //             name: hike.places[i].name,
  //             state: hike.places[i].state,
  //             city: hike.places[i].city,
  //             lat: hike.places[i].lat,
  //             lng: hike.places[i].lon,
  //             description: hike.places[i].description,
  //             length: hike.places[i].length
  //           };
  //         }
  //       }.bind(this),
  //       error: function(err) { alert(err); },
  //
  //       beforeSend: function(xhr) { //what's the beforeSend call?
  //       xhr.setRequestHeader("X-Mashape-Authorization", "9TRm77y42fmshbKC8mhoJDbFf111p1mClnPjsn0iUmYlE5gzRa"); // Enter here your Mashape key
  //       }
  //   }).done(console.log("searched for hikes", "-1-1-1-1-1-1-1"));
  //
  //
  //   $.ajax({
  //       url: 'http://beermapping.com/webservice/loccity/707deabe170541be2a9cba98e95e92f5/'+this.state.location+'&s=json',
  //       type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
  //       data: {}, // Additional parameters here
  //       dataType: 'json',
  //       success: function(brew){
  //         console.log("brew response: ", brew);
  //
  //         if(brew.length > 5){
  //           for (let i=0; i<5; i++) {
  //             tempBrews[i] = {
  //               name: brew[i].name,
  //               city: brew[i].city,
  //               overall: brew[i].overall,
  //               phone: brew[i].phone,
  //               state: brew[i].state,
  //               status: brew[i].status,
  //               street: brew[i].street,
  //               zip: brew[i].zip
  //             }
  //           }
  //         } else {
  //           for (let i = 0; i<brew.length; i++) {
  //             tempBrews[i] = {
  //               name: brew[i].name,
  //               city: brew[i].city,
  //               overall: brew[i].overall,
  //               phone: brew[i].phone,
  //               state: brew[i].state,
  //               status: brew[i].status,
  //               street: brew[i].street,
  //               zip: brew[i].zip
  //             }
  //           }
  //         }
  //
  //         console.log("after the brew loop ", tempBrews, "0000000")
  //         for (let i=0; i<tempBrews.length; i++){
  //           //convert addresses to lat/lng
  //           $.ajax({
  //             url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+tempBrews[i].street+ "," +tempBrews[i].zip+'&key='+'AIzaSyAZR0AqjyaFpY5WK2P7Labc62Jb-lExXNw',
  //             type: "GET",
  //             data: {},
  //             dataType: 'json',
  //             success: function(latLng) {
  //               //CONVERT THE ADDRESS TO LAT/LNG HERE
  //               tempBrews[i].lat = latLng.results[0].geometry.location.lat.toFixed(5);
  //               tempBrews[i].lng = latLng.results[0].geometry.location.lng.toFixed(5);
  //               console.log("1111111111")
  //             }.bind(this),
  //             error: function(err) { alert(err); },
  //           })
  //         }
  //       }.bind(this),
  //       error: function(err) { alert(err); },
  //   }).done(function(){
  //     this.setState({
  //       brews: tempBrews,
  //       hikes: tempHikes,
  //       locationLat: tempLocationLat,
  //       locationLng: tempLocationLng
  //     });
  //     console.log('22222');
  //     this.map.goToSearch(); //send the search lat/lng to Map
  //
  //   }.bind(this));
  // }

  handleSubmit = (e) => {
      e.preventDefault();

      //assign some temp data before setting state
      let tempHikes= [{}, {}, {}, {}, {}];
      let tempBrews = [{}, {}, {}, {}, {}];
      let tempLocationLat = "";
      let tempLocationLng = "";

      // axios.post("/search/", {
      //   location: this.state.location
      // })

      var getLocation = axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+this.state.location+'&key='+'AIzaSyAZR0AqjyaFpY5WK2P7Labc62Jb-lExXNw')
        .then((latLng) => {
          console.log("latLng: ", latLng);
          tempLocationLat = latLng.data.results[0].geometry.location.lat;
          tempLocationLng = latLng.data.results[0].geometry.location.lng;
          counter++;
        });

        //api call of trails based on input
      var getTrails = $.ajax({
            url: 'https://trailapi-trailapi.p.mashape.com/?limit=5&lng=-&q[activities_activity_type_name_eq]=hiking&q[city_cont]='+this.state.location+'&radius=25', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
            data: {}, // Additional parameters here
            dataType: 'json',
            success: function(hike){
              console.log("hike: ", hike);
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
              counter++;
            }.bind(this),
            error: function(err) { alert(err); },
            beforeSend: function(xhr) { //what's the beforeSend call?
            xhr.setRequestHeader("X-Mashape-Authorization", "9TRm77y42fmshbKC8mhoJDbFf111p1mClnPjsn0iUmYlE5gzRa"); // Enter here your Mashape key
            }
        })

      var getBrews = axios.get('http://beermapping.com/webservice/loccity/707deabe170541be2a9cba98e95e92f5/'+this.state.location+'&s=json')
          .then((brew) => {
              // console.log("brew: ", brew);
              if(brew.data.length > 5){
                for (let i=0; i<5; i++) {
                  tempBrews[i] = {
                    name: brew.data[i].name,
                    city: brew.data[i].city,
                    overall: brew.data[i].overall,
                    phone: brew.data[i].phone,
                    state: brew.data[i].state,
                    status: brew.data[i].status,
                    street: brew.data[i].street,
                    zip: brew.data[i].zip
                  }
                }
              } else {
                for (let i = 0; i<brew.data.length; i++) {
                  tempBrews[i] = {
                    name: brew.data[i].name,
                    city: brew.data[i].city,
                    overall: brew.data[i].overall,
                    phone: brew.data[i].phone,
                    state: brew.data[i].state,
                    status: brew.data[i].status,
                    street: brew.data[i].street,
                    zip: brew.data[i].zip
                  }
                }
              }

              console.log("tempBrews: ", tempBrews);

              for (let i = 0; i<tempBrews.length; i++) {
                axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+tempBrews[i].street+ "," +tempBrews[i].zip+'&key='+'AIzaSyAZR0AqjyaFpY5WK2P7Labc62Jb-lExXNw')
                    .then((latLng) => {
                      console.log("brew iteration #", i, " ,", tempBrews.length);
                      tempBrews[i].lat = latLng.data.results[0].geometry.location.lat;
                      tempBrews[i].lng = latLng.data.results[0].geometry.location.lng;
                      counter++;

                      if (i === (tempBrews.length-1)) {
                        setTimeout(() => {
                          this.setState({
                            brews: tempBrews,
                            hikes: tempHikes,
                            locationLat: tempLocationLat,
                            locationLng: tempLocationLng
                          });
                          this.map.goToSearch(); //send the search lat/lng to Map
                        }, 1000)
                      }
                    })
              } //end of for loop

          })
          .then(() => {
            console.log("tempBrews: ", tempBrews);

          })

          //********OG FROM STEVE***** ////////
          // axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+this.state.location+'&key='+'AIzaSyAZR0AqjyaFpY5WK2P7Labc62Jb-lExXNw')
          //   .then((latLng) => {
          //     console.log(latLng)
          //     //convert lat/lng of search location
          //     tempLocationLat = latLng.results[0].geometry.location.lat;
          //     tempLocationLng = latLng.results[0].geometry.location.lng;
          //     axios.get('')
          //     .then((result) => {
          //       axios.get
          //     })
          //   })
          //   .then(() => console.log("arrow function console log"))

      // axios.all([getLocation, getTrails, getBrews])
      //   .then(console.log("get all done"))
  }


  handleLocationChange = (e) => {
    this.setState({location: e.target.value});
  }

  render() {
    if (counter === 7) {
      console.log("there's seven")
    }
    return (
      <div>
        <div className="header section backgroundImage img-reponsive container-fluid"  style = {{backgroundImage: `url(${this.state.image})`}}>
          <h1>Hike & Brew</h1>
          <h2>Hike & Brew with your crew!</h2>
          <form onSubmit={this.handleSubmit}>
            <input className="searchbox" type='text' placeholder="Search by city..." value={this.state.location} onChange={this.handleLocationChange} />
            <div><Scrollchor to="#map">
            <input className="btn-success" type="submit" value="Search" />
          </Scrollchor>
          </div>
          </form>
        </div>

        <div className="second-fold section container-fluid">
          <div id="map" className="map-container col-lg-6 col-sm-10">
          <Map initialPosition={{lat: this.state.locationLat, lng: this.state.locationLng}}
          dataPoints = {{hikes: this.state.hikes, brews: this.state.brews}}
          ref={instance => { this.map = instance; }}
          />

          </div>
          <div className="fav-container col-lg-4 col-sm-8 well">
            <h3>Favorited</h3>

            <div className="fav well">
              <img src="https://placeimg.com/100/100/nature" className="img-thumbnail fav-img pull-left" />
              <h4>Name of place</h4>
              <p className="address">Address</p>
              <p className="hours">9am-5pm</p>
            </div>
            <div className="fav well">
              <img src="https://placeimg.com/100/100/nature" className="img-thumbnail fav-img pull-left" />
              <h4>Name of place</h4>
              <p className="address">Address</p>
              <p className="hours">9am-5pm</p>
            </div>
            <div className="fav well">
              <img src="https://placeimg.com/100/100/nature" className="img-thumbnail fav-img pull-left" />
              <h4>Name of place</h4>
              <p className="address">Address</p>
              <p className="hours">9am-5pm</p>
            </div>
            <div className="fav well">
              <img src="https://placeimg.com/100/100/nature" className="img-thumbnail fav-img pull-left" />
              <h4>Name of place</h4>
              <p className="address">Address</p>
              <p className="hours">9am-5pm</p>
            </div>
            <div className="fav well">
              <img src="https://placeimg.com/100/100/nature" className="img-thumbnail fav-img pull-left" />
              <h4>Name of place</h4>
              <p className="address">Address</p>
              <p className="hours">9am-5pm</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
