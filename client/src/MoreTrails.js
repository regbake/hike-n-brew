import React, { Component } from 'react';

class MoreTrails extends Component {
  componentDidMount() {
    const { hike } = this.props.initialTrailsData;
  }
  constructor(props) {
    super(props);

    this.state = {

    }
  };

render(){
  return(
    <div>
      <h1 className="name">{this.state.name}</h1>
      <h2 className="cityState">{this.state.city}{", "}{this.state.state}</h2>
      <p className="description">{this.state.description}</p>
      <p className="miles">{"The trail is "}{this.state.length}{" miles"} </p>
      <div className="morePic">{this.state.thumbnail}</div>
    </div>
  )
 }
}
export default MoreTrails;
