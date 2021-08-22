import styled from "styled-components";

export const Container = styled.div`
  padding: 150px 10px 50px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.screen.tablet}) {
    flex-direction: column;
    text-align: center;
    padding-top: 100px;
  }
  img {
    border-radius: 40px;
    @media (max-width: ${(props) => props.theme.screen.tablet}) {
      width: 250px;
      height: 400px;
    }
  }
  padding-bottom: 50px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  gap: 10px;
  @media (max-width: ${(props) => props.theme.screen.desktop}) {
  }
  @media (max-width: ${(props) => props.theme.screen.tablet}) {
    padding-left: 0px;
    padding-top: 20px;
  }
`;
