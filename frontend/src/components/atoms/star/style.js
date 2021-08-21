import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .MuiRating-decimal {
    color: ${(props) => props.theme.colors.lightBrown};
  }
`;
