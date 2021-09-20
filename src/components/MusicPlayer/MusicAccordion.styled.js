import styled from "styled-components";

// TODO: Far more detail can be done here to make it exactly like the Figma template. I have given priority to other functions.

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f7f8;
  padding: 16px;
  margin-top: -16px;
`;

export const DecorativeLine = styled.div`
  align-self: center;
  background: #dadee0;
  height: 1px;
  width: 311px;
  margin-left: 16px;
  border-radius: 2px;
`;

export const MusicItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 9px;
`;

export const MusicText = styled.div`
  width: 100%;

  left: 17.13%;
  right: 43.73%;
  top: 42.08%;
  bottom: 52.08%;

  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  display: flex;
  align-items: center;
  letter-spacing: -0.32px;

  color: #263238;
`;

export const MusicLogo = styled.img`
  min-width: 24px;
  min-height: 24px;
  margin-right: 16px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #263238;
  `;
