import React from "react";

import {
  Accordion,
  ShowItem,
  DecorativeLine,
  LocationText,
  DateText,
  Link,
} from "./ShowsAccordion.styled.js";

const ShowsAccordion = (props) => {
  if (props.isExpanded) {
    const results = props.data.results;
    return results.map((result, key) => {
      return (
          <Accordion key={key}>
            <ShowItem>
              <Link target="_blank" href={result.url}>
                <DateText>{result.formattedDate}</DateText>
                <LocationText>{result.location}</LocationText>
              </Link>
              <DecorativeLine />
            </ShowItem>
          </Accordion>
      );
    });
  } else return null;
};

export default ShowsAccordion;
