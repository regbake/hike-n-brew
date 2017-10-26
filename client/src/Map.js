import React, { Component } from 'react';
/* global google */

class Map extends Component {
  componentDidMount() {
    const { lat, lng } = this.props.initialPosition;

    new google.maps.Map(this.refs.map, {
      center: {
        lat,
        lng
      },
      zoom: 8
    });
  }

  render() {
    return (
      <div className="MapContainer" ref="map" style={{width: 500, height: 500, border: '1px solid black'}}>
      </div>
    )
  }
}

export default Map;
