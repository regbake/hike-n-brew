import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";

class Landing extends Component{
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      hike: {

      },
      brew: {
        name: "",

      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
    axios.post("/search/", {
      location: this.state.location
    })

    //api call of trails based on input
    $.ajax({
        url: 'https://trailapi-trailapi.p.mashape.com/?limit=5&lon=-&q[activities_activity_type_name_eq]=hiking&q[city_cont]='+this.state.location+'&radius=25', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(hike) {
          console.log(hike)
          this.setState({

          })
            },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) { //what's the beforeSend call?
        xhr.setRequestHeader("X-Mashape-Authorization", "9TRm77y42fmshbKC8mhoJDbFf111p1mClnPjsn0iUmYlE5gzRa"); // Enter here your Mashape key
        }
    });

    $.ajax({
        url: 'http://beermapping.com/webservice/loccity/707deabe170541be2a9cba98e95e92f5/seattle&s=json',
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(brew) {
          console.log(brew)
          this.setState({
            
          })
            },
        error: function(err) { alert(err); },
    });
  }

  handleLocationChange = (e) => {
    this.setState({location: e.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="searchbox" type='text' placeholder="Search by city" value={this.state.location} onChange={this.handleLocationChange} />
          <input className="btn-success" type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

export default Landing;
