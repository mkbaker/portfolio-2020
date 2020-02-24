import React, { Component } from "react";
import './Projects.css';
//photos 
import githubDrive from "../images/githubDrive.jpeg";
import silentAction from "../images/silentAction.png";
import whatToSay from "../images/fiveHealthyPhrases.png";
import lightbulb from '../images/lightbulb.png';

class Projects extends Component {
  handleGithub = () => {
    window.open("http://www.github.com/mkbaker", "_blank");
  };

  handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/kellen-baker/", "_blank");
  };

  handleSilentAction = () => {
    window.open("https://silent-action.herokuapp.com/#/home", "_blank");
  };

  handleWithAll = () => {
    window.open("https://withall-kellen.herokuapp.com/#/home", "_blank");
  };

  handleLightbulb = () => {
    window.open("https://pedantic-bardeen-ad4f37.netlify.com/", "_blank");
  };

  render() {
    return (
      <div className="projectsContainerDiv">
        <div className="projectsTitle">
          <h1>Projects</h1>
        </div>
        <div className="project">
          <div className="projectText">
            <h3>GitHub Portfolio</h3>
            <p>Check out my projects on GitHub.</p>
            <button onClick={this.handleGithub}>Click here</button>
          </div>
          <img src={githubDrive} />
        </div>

        <div className="project">
          <div className="projectText">
            <h3>Silent Action</h3>
            <p>
              A crowdfunding platform where users can host online auctions to
              benefit community members facing medical expenses.
            </p>
            <button onClick={this.handleSilentAction}>Click here</button>
          </div>
          <img src={silentAction} />
        </div>

        <div className="project">
          <div className="projectText">
            <h3>What To Say Now</h3>
            <p>
              Automated content distribution and data collection for Minneapolis
              nonprofit WithAll. This link brings you to a copy of the code I
              helped build.
            </p>
            <button onClick={this.handleWithAll}>Click here</button>
          </div>
          <img src={whatToSay} />
        </div>

        <div className="project">
          <div className="projectText">
            <h3>Lightbulb Calculator</h3>
            <p>
              A simple calculator app to estimate yearly costs for different
              types of lightbulbs. Built with AngularJS.
            </p>
            <button onClick={this.handleLightbulb}>Click here</button>
          </div>
          <img src={lightbulb} />
        </div>
        <div className="colorPopRight"></div>
      </div>
    );
  }
}

export default Projects;