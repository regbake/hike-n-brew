import React, { Component } from 'react';
import hike from './images/hike.jpeg';

class MoreHikes extends Component {
  componentDidMount() {
    const hike = this.props.initialHikesData;
  }
  constructor(props) {
    super(props);

    this.state = {
      image: hike
    }
  };

render(){
  const hike = this.props.initialHikesData;
  return(
    <div className="hikeImage section header backgroundImage img-reponsive container-fluid" style= {{backgroundImage: `url(${this.state.image})`}}>
      <div className="hikeBox">
        <h1 className="name">{this.state.name}</h1>
        <h2 className="cityState">{this.state.city}{", "}{this.state.state}</h2>
        <p className="description">{this.state.description}</p>
        <p className="miles">{"The trail is "}{this.state.length}{" miles"} </p>
      </div>
    </div>
  )
 }
}
export default MoreHikes;
