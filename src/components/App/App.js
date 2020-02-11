import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

//components
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Work from "../Work/Work";
import Play from "../Play/Play";
import Contact from "../Contact/Contact";
import SinglePageApp from '../singlePageApp/singlePageApp';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* PORTFOLIO 1.0 ROUTES
          <Navbar />
          <Route exact path='/' component={About} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/play' component={Play} />
          <Route exact path='/contact' component={Contact} />  */}
          <Route exact path='/' component={SinglePageApp}/>
        </Router>
      </div>
    );
    
  }
}

export default App;
