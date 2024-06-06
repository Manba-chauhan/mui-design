import React from 'react';
import { createTheme } from '@mui/material'

const Theme = createTheme({
  palette: {
    primary: {
      main: "#99dfff",
    },
    secondary: {
      main: "#d32f2f",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    
  },
});
export default Theme;
