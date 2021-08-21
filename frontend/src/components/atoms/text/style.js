import styled from "styled-components";

export const Container = styled.span`
  color: ${(props) => props.theme.text[props.type].color};
  font-size: ${(props) => props.theme.text[props.type].fontSize};
  font-weight: ${(props) => props.theme.text[props.type].fontWeight};

  @media (max-width: ${(props) => props.theme.screen.tablet}) {
    font-size: 22px;
  }
`;
