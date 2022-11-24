import styled from "styled-components";
import { ReactComponent as Warning } from "./warning.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  text-align: center;
`;

export const WarningIcon = styled(Warning)`
  align-items: center;
`;

export const WarningTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.mineShaft};
`;

export const WarningInfo = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin-bottom: 0;
`;

export const Button = styled.a`
  width: 168px;
  height: 49px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.anakiwa};
  border: 1px solid rgba(209, 213, 218, 0.1);
  font-weight: 600;
  font-size: 21px;
  border-radius: 4px;
  margin-top: 32px;
  margin-bottom: 44px;
  align-items: center;
  padding: 12px 16px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dodgerBlue};
  }
`;
