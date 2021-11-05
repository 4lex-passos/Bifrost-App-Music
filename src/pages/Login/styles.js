import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    container: {
        display: "flex",
        flexFlow: "wrap column",

        alignItems: "center",
    },

    logotypeImage: {
        width: 200,
        marginBottom: theme.spacing(4),
    },

    formBoxButton: {
        "&:hover": {
            background: `#2ce36d`,
        },
        background: `#1db954`,
        fontWeight: "bolder",
        borderRadius: 100,
    },
}));
