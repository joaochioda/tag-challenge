import styled from "styled-components";

export const Container = styled.span`
  color: ${(props) => props.theme.text[props.type].color};
  font-size: ${(props) => props.theme.text[props.type].fontSize.default};
  font-weight: ${(props) => props.theme.text[props.type].fontWeight};

  @media (max-width: ${(props) => props.theme.screen.desktop}) {
    font-size: ${(props) => props.theme.text[props.type].fontSize.minimum};
  }

  @media (max-width: ${(props) => props.theme.screen.tablet}) {
    font-size: ${(props) => props.theme.text[props.type].fontSize.minimum};
  }
`;
