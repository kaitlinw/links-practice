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
      <MusicAccordion data-testid="music-accordion" data={data} isExpanded={isExpanded} />
    </>
  );
};

export default MusicPlayer;

