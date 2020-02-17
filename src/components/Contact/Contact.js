import React, { Component } from "react";
import "./Contact.css";
import WOW from "wow.js";
import Swal from "sweetalert2";

import Emoji from "../Emoji/Emoji";
//semantic ui
import { Form, TextArea, Input, Button } from "semantic-ui-react";

class Contact extends Component {
  state = {
    feedback: "",
    name: "name",
    email: "example@test.com"
  };

  clearState = () => {
    this.setState({
      feedback: "",
      name: "",
      email: ""
    });
  };
  //handle input changes
  handleChangeFor = input => event => {
    this.setState({
      ...this.state,
      [input]: event.target.value
    });
  };

  handleSubmit = event => {
    const templateId = "template_w8sQUvWy";

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email
    });
  };

  sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("mkellenbaker_gmail_com", templateId, variables)
      .then(res => {
        this.clearState();
        this.handleSuccess();
      })
      .catch(err => {
        console.error("Error: ", err);
        this.handleError();
      });
  };

  handleSuccess = () => {
    Swal.fire({
      title: "Sent!",
      icon: "success",
      text: `I'll get back to you soon!`
    });
  };

  handleError = () => {
    Swal.fire({
      title: "Error",
      icon: "error",
      text: `Hmm, something went wrong. Sorry :(`
    });
  };

  render() {
    return (
      <div className="contactDiv">
        <h1>Contact me</h1>
        <h2 className="wow slideInLeft">Email Me:</h2>

        <form className="test-mailing">
          <input
            id="email"
            onChange={this.handleChangeFor("email")}
            value={this.state.email}
            placeholder="Your email"
          />
          <div>
            <textarea
              id="test-mailing"
              name="test-mailing"
              onChange={this.handleChangeFor("feedback")}
              placeholder="Write your message here..."
              required
              value={this.state.feedback}
              style={{ width: "100%", height: "150px" }}
            />
          </div>
        </form>
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    );
  }
}

export default Contact;
