import React, { Component } from "react";
import { Link, Text } from "./ClassicLink.styled.js";

export default class ClassicLink extends Component {
  render() {
    const { url, title } = this.props.linkData;
    return (
        <Link target="_blank" href={url}><Text>{title}</Text></Link>
    );
  }
}
