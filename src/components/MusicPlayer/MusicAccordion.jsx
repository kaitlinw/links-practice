import React from "react";

import {
  Accordion,
  MusicItem,
  DecorativeLine,
  MusicLogo,
  MusicText,
  Link,
} from "./MusicAccordion.styled.js";

// TODO: get the svg icon import working here in the MusicLogo component. Priority has been given to completing other parts of this project.

const MusicAccordion = (props) => {

  if (props.isExpanded) {
    const results = props.data.results;
    return results.map((result, key) => {
      return (
        <Accordion key={key}>
          <MusicItem>
            <MusicLogo src={result.filePath}/>
            <Link target="_blank" href={result.url}>
            <MusicText>{result.name}</MusicText>
            </Link>
          </MusicItem>
          <DecorativeLine/>
        </Accordion>
      );
    });
  } else return null;
};

export default MusicAccordion;
