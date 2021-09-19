import React, { Component } from "react";
import { Link, LinkText } from "../../globalStyles/globalStyles.styled.js";

export default class ClassicLink extends Component {
  render() {
    const { url, title } = this.props.linkData;
    return (
        <Link target="_blank" href={url}><LinkText>{title}</LinkText></Link>
    );
  }
}
