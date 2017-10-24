import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";

class Brewery extends Component{
  constructor(props){
    super(props);
    this.state= {
      brewery: ""
    };
  }

  handleBrewSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)

    $.ajax({
      url: 'http://api.brewerydb.com/v2/?brewery/:breweryId/locationskey=416479e4e04b0fa92513cb3c272e7fb3',
      type: "GET",
      data: {},
      dataType: 'json',
      success: function(data) {
        console.log(data);
      },
      error: function(err) {alert(err); }
    });
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}



export default Brewery;
