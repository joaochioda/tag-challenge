import styled from "styled-components";

export const EmptyDiv = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
  border-radius: 45px;
`;

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  img {
    border-radius: 45px;
  }
  overflow: hidden;

  .verse {
    position: absolute;
    top: 400px;
    left: 0;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-radius: 45px;
    background-color: ${(props) => props.theme.colors.darkBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 1.5s;
    z-index: -1;
    gap: 5px;
  }

  &:hover {
    .verse {
      top: 0;
      z-index: 10;
    }
  }

  .padding {
    padding-top: 15px;
  }
`;
