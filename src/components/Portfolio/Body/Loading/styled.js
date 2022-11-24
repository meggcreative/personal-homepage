import styled, { keyframes } from "styled-components";
import { ReactComponent as Loading } from "./loading.svg";

const rotate = keyframes`
to{
    transform: rotate(360deg);
}`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mineShaft};
`;

export const LoadingIcon = styled(Loading)`
  margin-top: 48px;
  animation: ${rotate} 1s linear infinite;
`;
