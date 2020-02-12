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
import Contact from '../Contact/Contact';

class SinglePageApp extends Component {
  render() {
    return (
      <div className="introDiv">
          <About/>
          <Profile/>  
          <Projects/>
          <Contact />
      </div>
    );
  }
}

export default SinglePageApp;
