import React, { Component } from "react";
import { linkData } from "../../data/linkData.js";
import ClassicLink from "../ClassicLink/ClassicLink.jsx";
import MusicPlayer from "../MusicPlayer/MusicPlayer.jsx";
import ShowsList from "../ShowsList/ShowsList.jsx";
import styled from "styled-components";

export default class DisplayLinks extends Component {
  render() {
    const LinkWrapper = styled.div`
      position: absolute;
      top: 156px;
      left: 24px;
      max-width: 327px; 
    `;

    const linksArray = linkData.links.map((parentLink, key) => {
      switch (parentLink.linkType) {
        case "classic":
          return <ClassicLink key={key} linkData={parentLink} />;
        case "musicPlayer":
          return <MusicPlayer key={key} linkData={parentLink} />;
        case "showsList":
          return <ShowsList key={key} linkData={parentLink} />;
      }
    });

    return <LinkWrapper>{linksArray}</LinkWrapper>;
  }
}
