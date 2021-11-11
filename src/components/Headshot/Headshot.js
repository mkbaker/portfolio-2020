import React, { Component } from "react";
import kellenbaker from "../images/552A5746-2.jpg";


class Headshot extends Component {
    render() {
        return (
        <div className="imageCropper">
        <img src={kellenbaker} alt="Me" className="homeHeadshot" />
        </div>
        )
    }
}

export default Headshot;
