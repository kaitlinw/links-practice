import styled from "styled-components";
import { userData } from "../data/userData.js";

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  width: 327px;
  height: 48px;
  border-radius: 4px;
  text-decoration: none;
  background: ${userData.stylePreferences.primaryColor};

  &:hover {
    background: ${userData.stylePreferences.secondaryColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  width: 327px;
  height: 48px;
  border-radius: 4px;
  border: none;
  background: ${userData.stylePreferences.primaryColor};

  &:hover {
    background: ${userData.stylePreferences.secondaryColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  `;

export const LinkText = styled.div`
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
  letter-spacing: -0.28px;
  color: ${userData.stylePreferences.secondaryColor};

  ${Button}:hover & {
    color: ${userData.stylePreferences.primaryColor};
  }

  ${Link}:hover & {
    color: ${userData.stylePreferences.primaryColor};
  }
`;
