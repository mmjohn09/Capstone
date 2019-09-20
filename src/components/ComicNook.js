import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import Navbar from "./nav/Navbar";

class ComicNook extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ApplicationViews />
      </>
    );
  }
}

export default ComicNook;