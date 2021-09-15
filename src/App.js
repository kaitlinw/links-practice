import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import "./styles/App.css";
import img from './assets/preview.png'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <img src={img} alt="" />
      </div>
    );
  }
}

export default hot(App);