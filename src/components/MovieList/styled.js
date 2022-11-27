import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 32px;
  margin-top: 0;
  margin-bottom: 72px;
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.colors.mineShaft};
  font-weight: 900;
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.iron};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px 16px;
  color: ${({ theme }) => theme.colors.scienceBlue};
  list-style: none;
  padding: 0;
  justify-content: start;
`;

export const Item = styled.li`
  color: ${({ theme }) => theme.colors.slateGrey};
`;