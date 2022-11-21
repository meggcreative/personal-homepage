import styled from "styled-components";
import { ReactComponent as GitHub } from "./icons/Github.svg";
import { ReactComponent as Facebook } from "./icons/Facebook.svg";
import { ReactComponent as Instagram } from "./icons/Instagram.svg";
import { ReactComponent as LinkedIN } from "./icons/LinkedIN.svg";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  margin-bottom: 109px;
`;

export const LetsTalk = styled.p`
  color: ${({ theme }) => theme.colors.slateGrey};
  font-weight: 700;
  font-size: 12px;
  margin-top: 96px;
  margin-bottom: 24px;
`;

export const Mail = styled.a`
  color: ${({ theme }) => theme.colors.mineShaft};
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
  margin-bottom: 24px;
`;

export const Summary = styled.p`
  color: ${({ theme }) => theme.colors.mineShaft};
  font-weight: 400;
  font-size: 18px;
  max-width: 670px;
  margin-top: 0;
  margin-bottom: 56px;
`;

export const Icons = styled.div`
  display: flex;
`;

export const GitHubIcon = styled(GitHub)`
  margin-right: 24px;
`;

export const FacebookIcon = styled(Facebook)`
  margin-right: 24px;
`;
export const InstagramIcon = styled(Instagram)`
  margin-right: 24px;
`;
export const LinkedINIcon = styled(LinkedIN)`
  margin-right: 24px;
`;
