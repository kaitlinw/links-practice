import React from "react";

import { ArrowIcon } from "../../globalStyles/globalStyles.styled";

import {
  Accordion,
  MusicItem,
  DecorativeLine,
  MusicLogo,
  MusicText,
  Link,
} from "./MusicAccordion.styled.js";

const MusicAccordion = (props) => {
  if (props.isExpanded) {
    const results = props.data.results;
    return results.map((result, key) => {
      return (
        <Accordion key={key}>
          <MusicItem>
            <MusicLogo src={result.filePath} />
            <MusicText>{result.name}</MusicText>
            <Link target="_blank" href={result.url}>
              <ArrowIcon src={"/assets/icons/arrow.svg"} />
            </Link>
          </MusicItem>
          <DecorativeLine />
        </Accordion>
      );
    });
  } else return null;
};

export default MusicAccordion;
