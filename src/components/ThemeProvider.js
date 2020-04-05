import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { deepPurple, blue, blueGrey } from "@material-ui/core/colors";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[600]
        },
        secondary: {
            main: blue[800]
        }
    },
    typography: {
        button: {
            fontFamily: "'Montserrat', sans-serif"
        }
    },
    overrides: {
        MuiTextField: {
            root: {
                marginBottom: '2rem',
            }
        },
        MuiFormLabel: {
            root: {
                color: blueGrey[200],
                fontSize: '1.6rem',
                "&$focused": {
                    color: deepPurple[600],
                    fontWeight: "bold",
                }
            }
        },
        MuiInputBase: {
            input: {
                color: blueGrey[200],
                fontSize: '1.6rem',
            }
        } 
    }
});

const ThemeProvider = props => (
    <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
);

export default ThemeProvider;
