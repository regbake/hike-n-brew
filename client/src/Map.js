import React, { Component } from 'react';
/* global google */

class Map extends Component {
  componentDidMount() {
    const { lat, lng } = this.props.initialPosition;
    console.log(lat, lng, "From maps")
    this.map = new google.maps.Map(this.refs.map, {
      center: {
        lat,
        lng
      },
      zoom: 10
    });
  }

  goToSearch = () => {
    const { lat, lng } = this.props.initialPosition;
    console.log(lat, lng)
    this.map.panTo({lat, lng})

    var infoWindow = new google.maps.InfoWindow({
      content: "hi"
    })

    var marker = new google.maps.Marker({
      position: {lat: 48, lng: -122},
      map: this.map,
      title: 'Hello World!'
    });

    marker.addListener('click', function(){
      infoWindow.open(this.map, marker);
    });
  }

  render() {
    return (
      <div className="MapContainer" ref="map" style={{width: 800, height: 400, border: '1px solid black'}}>
      </div>
    )
  }
}

export default Map;
