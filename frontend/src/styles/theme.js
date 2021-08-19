import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const theme = {
  colors: {
    black: "#000000",
  },
  fonts: ["Nunito", "RoboLatoto"],
  fontSizes: {
    size12: "12px",
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
