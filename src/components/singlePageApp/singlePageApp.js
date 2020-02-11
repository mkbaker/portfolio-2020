import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

//components
import About from '../About/About';
import Profile from '../Profile/Profile';

class SinglePageApp extends Component {
  render() {
    return (
      <div className="introDiv">
          <About/>
          <Profile/>  
      </div>
    );
  }
}

export default SinglePageApp;
