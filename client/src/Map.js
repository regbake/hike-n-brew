import React, { Component } from 'react';
/* global google */

class Map extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      center: {
        lat: this.props.initialPosition.lat,
        lng: this.props.initialPosition.lng
      },
      zoom: 8
    });
  }
  render() {
    return (
      <div className="MapContainer">
        <h1 className="map-header">Map</h1>
        <div ref="map" style={{width: 500, height: 500, border: '1px solid black'}}>
          I should be map!
        </div>
      </div>
    )
  }
}

export default Map;
