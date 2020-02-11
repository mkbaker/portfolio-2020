import React, { Component } from "react";
import "./Contact.css";
import WOW from "wow.js";


import Emoji from "../Emoji/Emoji";
//semantic ui
import { Form, TextArea, Input, Button } from "semantic-ui-react";

class Contact extends Component {
 

  //handle input changes
  handleChangeFor = input => event => {
    this.setState({
      ...this.state,
      [input]: event.target.value
    });
  };

  render() {
    return (
      <div className="contactDiv">
        <center>
          <h1 className="wow slideInLeft">Email Me:</h1>
          <h3 className="wow slideInRight">mkellenbaker@gmail.com</h3>
        </center>
      </div>
    );
  }
}



export default (Contact);