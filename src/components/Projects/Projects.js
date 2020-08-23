import React, { Component } from "react";
import './Projects.css';
//photos 
import githubDrive from "../images/githubDrive.jpeg";
import silentAction from "../images/silentAction.png";
import whatToSay from "../images/fiveHealthyPhrases.png";
import lightbulb from '../images/lightbulb.png';
import ilhanSite from '../images/ilhanSite.png';

class Projects extends Component {
  handleGithub = () => {
    window.open("http://www.github.com/mkbaker", "_blank");
  };

  handleDogBlog = () => {
    window.open("https://nameless-spire-70677.herokuapp.com/", "_blank");
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

  handleilhanSite = () => {
    window.open("https://congressional-art-competition.herokuapp.com/#/", "_blank");
  }

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
            <h3>Congressional Art Competition</h3>
            <p>Custom application built for Congresswoman Ilhan Omar.</p>
            <button onClick={this.handleilhanSite}>Click here</button> 
          </div>
          <img src ={ilhanSite} />
        </div>

        <div className="project">
          <div className="projectText">
            <h3>Blog for Dogs</h3>
            <p>
              A silly blog I made to explore routing and data management with
              Laravel.
            </p>
            <button onClick={this.handleDogBlog}>Click here</button>
          </div>
          <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
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

        <div className="colorPopRight"></div>
      </div>
    );
  }
}

export default Projects;