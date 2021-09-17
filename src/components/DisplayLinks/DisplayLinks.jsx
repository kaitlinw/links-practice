import React, { Component } from "react";
import { linkData } from "../../data/linkData.js";
import ClassicLink from "../ClassicLink/ClassicLink.jsx";
import styled from "styled-components";

export default class DisplayLinks extends Component {
  render() {
    const LinkWrapper = styled.div`
      position: absolute;
      top: 156px;
      left: 24px;
    `;

    const linksArray = linkData.links.map((parentLink, key) => {
      switch (parentLink.linkType) {
        case "classic":
          console.log("inside switch");
          return <ClassicLink key={key} linkData={parentLink} />;
      }
    });

    return <LinkWrapper>{linksArray}</LinkWrapper>;
  }
}
