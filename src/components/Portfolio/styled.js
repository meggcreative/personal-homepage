import styled from "styled-components";
import { ReactComponent as GitIcon } from "./gitIcon.svg";

export const Section = styled.section`
  display: grid;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled(GitIcon)`
  margin-top: 0;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin-top: 13px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin-top: 0;
  margin-bottom: 24px;
`;

export const Body = styled.div`
  display: grid;
  color: black;
`;
