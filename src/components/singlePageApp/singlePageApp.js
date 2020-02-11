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
import Projects from '../Projects/Projects';

class SinglePageApp extends Component {
  render() {
    return (
      <div className="introDiv">
          <About/>
          <Profile/>  
          <Projects/>
      </div>
    );
  }
}

export default SinglePageApp;
