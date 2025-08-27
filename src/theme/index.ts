import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00393B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#007071",
      contrastText: "#222",
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
    h2: {
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h4: {
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 600,
        },
      },
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#00393B",
        },
      },
    },
  },
});

export default theme;
