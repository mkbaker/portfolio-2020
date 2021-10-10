import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import WOW from "wow.js";
import "./Profile.css";
import animateScrollTo from "animated-scroll-to";

//components
import Headshot from "../Headshot/Headshot";
import Emoji from "../Emoji/Emoji";


class Profile extends Component {
  jumpToProjects = () => {
    animateScrollTo(document.querySelector(".projectsContainerDiv"));
  };
  jumpToContact = () => {
    animateScrollTo(document.querySelector(".contactDiv"));
  };

  render() {
    return (
      <div className="profileDiv wow fadeInUpBig">
        <div className="colorPopLeft"></div>
        <div className="headshotDiv">
          <Headshot />
        </div>
        <div className="profileTextOuterDiv">
          <h1>Me</h1>
          <div className="profileTextInnerDiv">
            <p>
              I'm a full stack software developer and a lifelong musician. I
              live in the Twin Cities, but I'm originally from Nome, Alaska. I'm
              fluent in many languages and frameworks. I enjoy developing
              beautiful, thoughtful applications, and I love writing the logic
              that makes them work. More broadly, I'm interested in the
              intersection of art, music, and technology. I'm an avid reader and
              listener, and I try to visit a new place every year. I love techno
              and punk music, and I'm a dog person.
            </p>
            <a
              target="_blank"
              href="https://kellenbakerdotcom.s3.amazonaws.com/kellenBakerResume2021.pdf"
            >
              <button>Resume</button>
            </a>
            <button onClick={this.jumpToProjects}>Projects</button>
            <button onClick={this.jumpToContact}>Contact me</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
