import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#6aa6fb",
            light: "#a1c8ff",
            dark: "#2e4b75",
        },
        secondary: {
            main: "#db86eb",
            dark: "#83478e",
        },

        warning: {
            main: "#fcf379",
            dark: "#a08640",
        },

        text: {
            primary: "#ffffff",
            secondary: "#aeaeae",
            hint: "#cad0d9",
        },

        background: {
            default: "#282828",
            light: "#F3F5FF",
            dark: "#282828",
        },
    },

    overrides: {
        MuiFormLabel: {
            root: {
                "&:before": {
                    borderBottomColor: "primary",
                },
                "&:after": {
                    borderBottomColor: "primary",
                },
                "&:hover:before": {
                    borderBottomColor: "primary",
                },
            },
        },
    },
});
export default theme;
