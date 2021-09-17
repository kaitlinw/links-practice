import React, { Component } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile/UserProfile.jsx"
import DisplayLinks from "./components/DisplayLinks/DisplayLinks";

class App extends Component {
  render() {
    return (
      <>
      <UserProfile />
      <DisplayLinks />
      </>
    )
  }
}

export default App;
