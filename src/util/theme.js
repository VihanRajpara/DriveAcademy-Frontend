import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e56a0", // Third color as primary
      light: "#d6e4f0", // Second color for lighter elements
      dark: "#163172", // Fourth color for darker elements
      contrastText: "#ffffff", // White text on primary background
    },
    secondary: {
      main: "#f6f6f6", // First color as secondary
      contrastText: "#1e56a0", // Blue text on the light background
    },
    background: {
      default: "#f6f6f6", // Set the global background to your first color
      paper: "#ffffff", // White background for paper components
    },
    text: {
      primary: "#163172", // Darker blue text on light backgrounds
      secondary: "#1e56a0", // Third color for secondary text or links
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 12, // Global font size
    h1: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 40, // h1 font size
    },
    h2: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 32, // h2 font size
    },
    h3: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 24, // h3 font size
    },
    h4: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 20, // h4 font size
    },
    h5: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 16, // h5 font size
    },
    h6: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14, // h6 font size
    },
  },
});

export default theme;
