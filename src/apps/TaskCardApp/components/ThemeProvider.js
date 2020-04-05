import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { deepPurple, blue } from "@material-ui/core/colors";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[900]
        },
        secondary: {
            main: blue[800]
        }
    },
});

const ThemeProvider = props => (
    <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
);

export default ThemeProvider;
