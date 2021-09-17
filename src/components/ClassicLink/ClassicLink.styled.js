import styled from "styled-components";

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  width: 327px;
  height: 48px;
  background: #39e09b;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  text-decoration: none;
`;

export const Text = styled.div`
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: -0.28px;
  color: #263238;
`;
