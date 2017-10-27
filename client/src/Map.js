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

    console.log(typeof localHikes[0].lat, "sup")

    const { lat, lng } = this.props.initialPosition;
    this.map.panTo({lat, lng})

    console.log("from SEARCH", this.props.dataPoints.brews, this.props.dataPoints.brews[0])
    console.log(localHikes, localBrews, " :Local data")

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

    var hike1 = new google.maps.Marker({
      position: {
        lat: localHikes[1].lat,
        lng: localHikes[1].lng
      },
      map: this.map,
      title: localHikes[1].name
    });

    var hike2 = new google.maps.Marker({
      position: {
        lat: localHikes[2].lat,
        lng: localHikes[2].lng
      },
      map: this.map,
      title: localHikes[2].name
    });

    var hike3 = new google.maps.Marker({
      position: {
        lat: localHikes[3].lat,
        lng: localHikes[3].lng
      },
      map: this.map,
      title: localHikes[3].name
    });

    var hike4 = new google.maps.Marker({
      position: {
        lat: localHikes[4].lat,
        lng: localHikes[4].lng
      },
      map: this.map,
      title: localHikes[4].name
    });

    var brew = new google.maps.Marker({
      position: {
        lat: parseInt(localBrews[0].lat),
        lng: parseInt(localBrews[0].lng)
      },
      map: this.map,
      title: localBrews[0].name
    });

    var brew1 = new google.maps.Marker({
      position: {
        lat: localBrews[1].lat,
        lng: localBrews[1].lng
      },
      map: this.map,
      title: localBrews[1].name
    });
    //
    // var brew2 = new google.maps.Marker({
    //   position: {
    //     lat: localBrews[2].lat,
    //     lng: localBrews[2].lng
    //   },
    //   map: this.map,
    //   title: localBrews[2].name
    // });
    //
    // var brew3 = new google.maps.Marker({
    //   position: {
    //     lat: localBrews[3].lat,
    //     lng: localBrews[3].lng
    //   },
    //   map: this.map,
    //   title: localBrews[3].name
    // });
    //
    // var brew4 = new google.maps.Marker({
    //   position: {
    //     lat: localBrews[4].lat,
    //     lng: localBrews[4].lng
    //   },
    //   map: this.map,
    //   title: localBrews[4].name
    // });


  }

  render() {

    return (
      <div className="map-container" ref="map" style={{width: 600, height: 600, border: '1px solid black'}}>
      </div>
    )
  }
}

export default Map;
