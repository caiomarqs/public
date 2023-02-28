import React from "react";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import { theme, themeOverrides } from "../mui";

export interface WrapperProps {
  children: React.ReactNode;
}

/**
 * Wrapper for material ui
 *
 * @component
 */
export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box width="20rem">{children}</Box>
    </ThemeProvider>
  );
};
/**
 * WrapperOverrides for material ui
 *
 * @component
 */
export const WrapperOverrides: React.FC<WrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={themeOverrides}>
      <CssBaseline />
      <Box width="40rem">{children}</Box>
    </ThemeProvider>
  );
};
