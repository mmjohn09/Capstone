import React, { Component } from "react";
import Navbar from "./nav/Navbar"
import ApplicationViews from "./ApplicationViews";
import "./SuperShelf.css";

class SuperShelf extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ApplicationViews />
      </>
    );
  }
}

export default SuperShelf;