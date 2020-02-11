import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import WOW from "wow.js";
import "./About.css";
import animateScrollTo from "animated-scroll-to";

//components 
import Headshot from "../Headshot/Headshot";
import Emoji from "../Emoji/Emoji";

//material-ui
import Grid from "@material-ui/core/Grid";

class About extends Component {
  jumpToProfile = () => {
    animateScrollTo(document.querySelector('.profileDiv'));
  }
  render() {
    return (
      <div className="introDiv wow fadeIn">
        <div className="introText">
          <h1 className="wow fadeIn">
            Hi, I'm <span className="myName">Kellen</span>.
          </h1>
          <p className="wow fadeIn">
            I'm a software engineer, musician, and artist. <br />
            I love to learn and explore every day. <br />
            Let's make something cool together.{" "}
            <Emoji symbol="🤘" label="the horns" />
          </p>
        </div>
        <button onClick={this.jumpToProfile}>Nice to meet you</button>
        <div className="colorPopLow"></div>
      </div>
    );
  }
}

export default About;