import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

//components
import About from '../About/About';

class SinglePageApp extends Component {
  render() {
    return (
      <div className="introDiv">
          <About/>
      </div>
    );
  }
}

export default SinglePageApp;
