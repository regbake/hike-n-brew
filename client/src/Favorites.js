import React, { Component } from 'react';

class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("From Favorites", this.props.dataPoints)

    var hikeList = this.props.dataPoints.hikes.map((hike) =>
      <div className="fav well">
        <img src="https://placeimg.com/100/100/nature" className="img-thumbnail fav-img pull-left" />
        <h4>{hike.name}</h4>
        <p className="address">{hike.description}</p>
      </div>
    )

    var brewList = this.props.dataPoints.brews.map((brew) =>
      <div className="fav well">
        <img src="https://placeimg.com/100/100/nature" className="img-thumbnail fav-img pull-left" />
        <h4>{brew.name}</h4>
        <p>Rating out of 100: {brew.overall}</p>
        <p className="address">{brew.street}</p>
      </div>
    )

    return (
      <div>
        <h3>Results</h3>
        {hikeList}
        {brewList}
      </div>
    )
  }
}

export default Favorites;
