import React from "react";

import { ArrowIcon } from "../../globalStyles/globalStyles.styled";

import {
  Accordion,
  ShowItem,
  DecorativeLine,
  LocationText,
  DateText,
  Link,
  FlexColumn,
  FlexRow,
} from "./ShowsAccordion.styled.js";

const ShowsAccordion = (props) => {
  if (props.isExpanded) {
    const results = props.data.results;
    return results.map((result, key) => {
      return (
        <Accordion key={key}>
          <ShowItem>
            <Link target="_blank" href={result.url}>
              <FlexRow>
                <FlexColumn>
                  <DateText>{result.formattedDate}</DateText>
                  <LocationText>{result.location}</LocationText>
                </FlexColumn>
                <ArrowIcon src={"/assets/icons/arrow.svg"} />
              </FlexRow>
            </Link>
            <DecorativeLine />
          </ShowItem>
        </Accordion>
      );
    });
  } else return null;
};

export default ShowsAccordion;
