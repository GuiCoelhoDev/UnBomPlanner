import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  darkerBrown: "#43382C",
  darkBrown: "#704A1E",
  softBrown: "#B48650",
  softerBrown: "#C09C70",
  clearBrown: "#C5A682",
};

const ColorsProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ColorsProvider;
