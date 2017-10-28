import React, { Component } from 'react';

class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Favorites</h3>
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
    )
  }
}

export default Favorites;
