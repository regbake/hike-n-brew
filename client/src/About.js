import React, { Component } from "react";
import './App.css';
class About extends Component {
    render(){
        return (
            <div className="about">
                <h1>About</h1>
                <div className="well about-insp col-lg-10">
                  <h2 className="about-name">The Inspiration </h2>
                  <h4>  The idea for Hike-n-Brew  came together with the desire to be able to discover new trails to explore and to enjoy flavorful beers
                  at local breweries afterwards; columnating in a great way to spend a day. After researching the idea, we discoverd we were
                  not alone in this desire, as we found a Meetup Group called, "Hikes and Hops", that has over 1,500 active users. With this
                  we got right down to wireframing and building our idea. </h4>
                </div>
                <div className="row">
                <div className="well about-me col-lg-3">
                <img src="https://placeimg.com/100/100/animals" className="img-thumbnail" />
                  <h2 className="about-name">Reggie Baker</h2>
                  <p> Reggies primary role in creating Hike-n-Brew was being the git master and making
                  things to happen on the backend. He carefully used AJAX calls to get all of our APIs to talk with eachother
                  and give us accurate data that we could plug into our map. </p>
                </div>
                <div className="well about-me col-lg-3">
                <img src="https://placeimg.com/100/100/animals" className="img-thumbnail" />
                  <h2 className="about-name">Chase Deger</h2>
                  <p> Chase, after much trail and error, found a usable trail API to give us the proper data
                  to have the hikes render on the map. He also worked with Reggie to properly format the Brewery
                  API and get data we could use. </p>
                </div>
                </div>
                <div className="row">
                <div className="well about-me col-lg-3">
                  <img src="https://placeimg.com/100/100/animals" className="img-thumbnail" />
                  <h2 className="about-name">Erik Robinson</h2>
                  <p>Erik was the project manager and kept the team on track
                  with deadlines and progress made. He utilized white boarding as a way to map
                  out our direction and progress made. Addtionally he put together our layout utilizing bootstrap. </p>
                </div>
                <div className="well about-me col-lg-3">
                <img src="https://placeimg.com/100/100/animals" className="img-thumbnail" />
                  <h2 className="about-name">Tony Bricca</h2>
                  <p>Tony worked to get the Google Maps API to render into a format to later put the APIs into. Additionally,
                  he formatted the markers to be able to have multiple of them on the map along with unqiue points to distinguish
                  the hikes from the breweries. </p>
                </div>
                </div>
                <div className="well col-lg-10 tech-used">
                    <h2 className="tech-header">
                        Technologies Utilized
                    </h2>
                    <ul>
                        <li className="tech-text">Hike-n-Brew was built utitlizing the React library.  Big shoutout to
                            Mark Z. for that one. </li>
                        <li className="tech-text">Data gathered from three separate APIs: Google Maps, Hiking API, Brewery List API.</li>
                        <li className="tech-text">Calls to the APIs using AJAX</li>
                        <li className="tech-text">Bootstrap</li>
                        <li className="tech-text">MongoDB & Mongoose</li>
                        <li className="tech-text">Javascript</li>
                        <li className="tech-text">HTML, CSS & JSX</li>
                        <li className="tech-text">Github Group Collaboration</li>
                        <li className="tech-text">Some Good ol' Elbow Grease</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;
