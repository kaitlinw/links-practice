import React, { useState } from "react";
import { Button, LinkText } from "../../globalStyles/globalStyles.styled.js";
import MusicAccordion from "./MusicAccordion.jsx";

const MusicPlayer = (linkData) => {
  const [isExpanded, setExpanded] = useState(false);
  const data = linkData.linkData;

  const toggleSection = () => {
    setExpanded(!isExpanded);
  };

  return (
    <>
      <Button aria-expanded={isExpanded} onClick={toggleSection}>
        <LinkText>{data.title}</LinkText>
      </Button>
      <MusicAccordion data={data} isExpanded={isExpanded} />
    </>
  );
};

export default MusicPlayer;


function sum(a, b) {
  return a + b;
}
module.exports = sum;