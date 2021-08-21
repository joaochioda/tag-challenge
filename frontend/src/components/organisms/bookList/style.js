import styled from "styled-components";

export const Container = styled.div`
  padding-top: 50px;
  justify-self: center;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 40px;

  @media (min-width: ${(props) => props.theme.screen.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.screen.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${(props) => props.theme.screen.largeDesktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${(props) => props.theme.screen.ultraLarge}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
