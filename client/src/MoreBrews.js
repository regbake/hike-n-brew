import React, { Component } from 'react';

class MoreBrews extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  };

render(){
  return(
    <div>
      <h1 className="name">{this.state.name}</h1>
      <h2 className="cityState">{this.state.city}{" "}{this.state.state}</h2>
        <p className="status">{this.state.status}</p>
        <p className="phone">{this.state.phone}</p>
        <p className="street">{this.state.street}</p>

      <div className="overall">
        <p>{this.state.overall}{"/100"}</p>
      </div>

    </div>
  )
 }
}
export default MoreBrews;
