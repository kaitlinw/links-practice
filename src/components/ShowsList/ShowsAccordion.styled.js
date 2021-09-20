import styled from "styled-components";

// TODO: Far more detail can be done here to make it exactly like the Figma template. I have given priority to other functions.

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f7f8;
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

export const ShowItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin: 16px;
`;

export const DateText = styled.div`
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 175% */
  letter-spacing: -0.32px;
  color: #263238;
`;

export const LocationText = styled.p`
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: -0.24px;
  margin: 9px 0;
  color: #263238;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const SongKickLogo = styled.img``;
