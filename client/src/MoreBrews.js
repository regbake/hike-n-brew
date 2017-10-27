import React, { Component } from 'react';
import beer from './images/beer.jpeg';

class MoreBrews extends Component {
  componentDidMount(){
    const brew = this.props.initialBrewData;
    console.log(this.state);
  }
  constructor(props) {
    super(props);
    const brew = this.props.initialBrewData;
    this.state = {
        image: beer,
        brew:brew
    }
  };
render(){
  const brew = this.props.initialBrewData;
  console.log(brew);
  return(
    <div className="beerImage section header backgroundImage img-reponsive container-fluid" style= {{backgroundImage: `url(${this.state.image})`}}>
      <div className="brewBox">
        <h1 className="name">{this.state.name}</h1>
        <h2 className="cityState">{this.state.city}{" "}{this.state.state}</h2>
          <p className="status">{this.state.status}</p>
          <p className="phone">{this.state.phone}</p>
          <p className="street">{this.state.street}</p>
        <div className="overall">
          <p>{"/100"}</p>
        </div>
      </div>
    </div>
  )
 }
}
export default MoreBrews;
