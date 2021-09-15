import styled from "styled-components";

export const UserProfileCard = styled.div`
  position: absolute;
  width: 87px;
  height: 100px;
  left: 144.5px;
  top: 32px;
`;

export const ProfilePicture = styled.div`
  position: absolute;
  left: 13.22%;
  right: 13.22%;
  top: 0%;
  bottom: 36%;
  background: url(${(props) => props.imageUrl});
`;
// I have made the font style global for this small project.
export const Username = styled.h1`
  position: absolute;
  height: 28px;
  left: 0%;
  right: 0%;
  top: calc(50% - 28px / 2 + 36px);

  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.32px;
`;
