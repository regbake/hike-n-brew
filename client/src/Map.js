import React, { Component } from 'react';
/* global google */

// let testLat = this.props.dataPoints.brews[0].lat;
// let testLng = this.props.dataPoints.brews[0].lng;

class Map extends Component {
  componentDidMount() {
    const { lat, lng } = this.props.initialPosition;

    this.map = new google.maps.Map(this.refs.map, {
      center: {
        lat,
        lng
      },
      zoom: 10
    });
  }

  goToSearch = () => {
    let localHikes = this.props.dataPoints.hikes;
    let localBrews = this.props.dataPoints.brews;

    const { lat, lng } = this.props.initialPosition;
    this.map.panTo({lat, lng})

    var infoWindow = new google.maps.InfoWindow({
      content: "hi"
    })

    var hike = new google.maps.Marker({
      position: {
        lat: localHikes[0].lat,
        lng: localHikes[0].lng
      },
      map: this.map,
      title: localHikes[0].name
    });
    hike.addListener('click', function(){
      infoWindow.open(this.map, hike);
    });

    var hike1 = new google.maps.Marker({
      position: {
        lat: localHikes[1].lat,
        lng: localHikes[1].lng
      },
      map: this.map,
      title: localHikes[1].name
    });
    hike1.addListener('click', function(){
      infoWindow.open(this.map, hike1);
    });

    var hike2 = new google.maps.Marker({
      position: {
        lat: localHikes[2].lat,
        lng: localHikes[2].lng
      },
      map: this.map,
      title: localHikes[2].name
    });
    hike2.addListener('click', function(){
      infoWindow.open(this.map, hike2);
    });

    var hike3 = new google.maps.Marker({
      position: {
        lat: localHikes[3].lat,
        lng: localHikes[3].lng
      },
      map: this.map,
      title: localHikes[3].name
    });
    hike3.addListener('click', function(){
      infoWindow.open(this.map, hike3);
    });

    var hike4 = new google.maps.Marker({
      position: {
        lat: localHikes[4].lat,
        lng: localHikes[4].lng
      },
      map: this.map,
      title: localHikes[4].name
    });
    hike4.addListener('click', function(){
      infoWindow.open(this.map, hike4);
    });

    var brew = new google.maps.Marker({
      position: {
        lat: parseInt(localBrews[0].lat),
        lng: parseInt(localBrews[0].lng)
      },
      map: this.map,
      title: localBrews[0].name
    });
    brew.addListener('click', function(){
      infoWindow.open(this.map, brew);
    });

    var brew1 = new google.maps.Marker({
      position: {
        lat: localBrews[1].lat,
        lng: localBrews[1].lng
      },
      map: this.map,
      title: localBrews[1].name
    });
    brew1.addListener('click', function(){
      infoWindow.open(this.map, brew1);
    });

    var brew2 = new google.maps.Marker({
      position: {
        lat: localBrews[2].lat,
        lng: localBrews[2].lng
      },
      map: this.map,
      title: localBrews[2].name
    });
    brew2.addListener('click', function(){
      infoWindow.open(this.map, brew2);
    });

    var brew3 = new google.maps.Marker({
      position: {
        lat: localBrews[3].lat,
        lng: localBrews[3].lng
      },
      map: this.map,
      title: localBrews[3].name
    });
    brew3.addListener('click', function(){
      infoWindow.open(this.map, brew3);
    });

    var brew4 = new google.maps.Marker({
      position: {
        lat: localBrews[4].lat,
        lng: localBrews[4].lng
      },
      map: this.map,
      title: localBrews[4].name
    });
    brew4.addListener('click', function(){
      infoWindow.open(this.map, brew4);
    });


  }

  render() {

    return (
      <div className="map-container" ref="map" style={{width: 600, height: 600, border: '1px solid black'}}>
      </div>
    )
  }
}

export default Map;
