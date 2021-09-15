import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import "./styles/App.css";
import img from "./assets/profile-picture.png";
import { userData } from "./data/userData.js";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          {userData.map((data, key) => {
            return (
              <div key={key}>
                <img src={img} alt="" />
                <h1>{data.userName}</h1>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default hot(App);
