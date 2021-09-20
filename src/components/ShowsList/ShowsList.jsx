import React, { useState } from "react";
import { Button, LinkText } from "../../globalStyles/globalStyles.styled.js";
import ShowsAccordion from "./ShowsAccordion.jsx";

const ShowsList = (linkData) => {
  const [isExpanded, setExpanded] = useState(true);
  const data = linkData.linkData;

  const toggleSection = () => {
    setExpanded(!isExpanded);
  };

  return (
    <>
      <Button aria-expanded={isExpanded} onClick={toggleSection}>
        <LinkText>{data.title}</LinkText>
      </Button>
      <ShowsAccordion data={data} isExpanded={isExpanded} />
    </>
  );
};

export default ShowsList;
