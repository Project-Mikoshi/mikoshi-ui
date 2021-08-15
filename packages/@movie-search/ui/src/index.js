import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette:
  {
    primary: {
    main: "#6C9FF8"
    },
    secondary: {
    main: "#ffffff",
    },
  },

  overrides: {
    MuiOutlinedInput: {
      root: {
        position: "relative",
        marginTop: "5%",
        "& $notchedOutline": {
          borderColor: "#fff"
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#6C9FF8",

          "@media (hover: none)": {
            marginTop: "5%",
            borderColor: "#6C9FF8"
          }
        },
        "&$focused $notchedOutline": {
          borderColor: "#6C9FF8",
          borderWidth: 1
        }
      }
    },
    MuiFormLabel: {
      root: {
        marginTop: "5%",
        color: "#fff"
      }
    }
  }
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>      
        <App />           
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

