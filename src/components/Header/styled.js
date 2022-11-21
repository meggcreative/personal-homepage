import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "./envelope.svg";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 398px;
  height: 398px;
  margin: 115px 66px 63px 0;
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Introduction = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.slateGrey};
  margin-bottom: 12px;
`;

export const AboutPerson = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.slateGrey};
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
  margin: 0 0 35px 0;
  color: ${({ theme }) => theme.colors.mineShaft};
`;

export const ButtonWork = styled.button`
  display: flex;
  margin-top: 32px;
  width: 154px;
  height: 49px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  border: ${({ theme }) => theme.colors.iron};
  border-radius: 4px;
  font-weight: 600;
  font-size: 20.0584px;
  align-items: center;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dodgerBlue};
  }
`;

export const ButtonIcon = styled(EnvelopeIcon)`
  justify-content: center;
  margin-left: 16px;
`;

export const LinkToMail = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.white};
`;
