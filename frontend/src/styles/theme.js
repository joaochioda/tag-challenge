import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const theme = {
  colors: {
    brown: "#B77763",
    lightBrown: "#E9C9C3",
    darkBlue: "#36364C",
  },
  fonts: {
    primary: "Montserrat, sans-serif",
  },
  screen: {
    ultraLarge: "1700px",
    largeDesktop: "1366px",
    desktop: "1024px",
    tablet: "768px",
    mobile: "480px",
  },
  fontSizes: {
    size51: "51px",
    size37: "37px",
    size23: "23px",
  },
  lineHeight: {
    size20: "20px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
