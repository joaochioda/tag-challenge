import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const theme = {
  text: {
    title: {
      fontSize: {
        default: "54px",
        minimum: "32px",
      },
      color: "#36364C",
      fontWeight: "700",
    },

    paragraph: {
      fontSize: {
        default: "37px",
        minimum: "22px",
      },
      color: "#E9C9C3",
      fontWeight: "500",
    },

    span: {
      fontSize: {
        default: "12px",
        minimum: "12px",
      },
      color: "#E9C9C3",
      fontWeight: "300",
    },
  },
  colors: {
    brown: "#B77763",
    lightBrown: "#E9C9C3",
    darkBlue: "#36364C",
  },
  screen: {
    ultraLarge: "1700px",
    largeDesktop: "1366px",
    desktop: "1024px",
    tablet: "768px",
    mobile: "480px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node,
};

export default Theme;
