import React, { Component } from 'react';

class MoreHikes extends Component {
  componentDidMount() {
    const hike = this.props.initialHikesData;
  }
  constructor(props) {
    super(props);

    this.state = {

    }
  };

render(){
  const hike = this.props.initialHikesData;
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
export default MoreHikes;
