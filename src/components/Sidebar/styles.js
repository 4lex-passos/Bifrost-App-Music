import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    sidebar: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: 230,
        height: "100vh",
        color: "white",
        backgroundColor: "#040404",

        paddingTop: theme.spacing(3),
    },

    logotype_sidebar: {
        width: 150,
    },

    logotype_container: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },

    sidebar_options: {
        display: "flex",
        alignItems: "center",

        color: theme.palette.text.secondary,
        height: 40,
        cursor: "pointer",
        borderRadius: 4,
        gap: theme.spacing(2),

        "&:hover": {
            color: theme.palette.text.primary,
        },
        "&:focus": {
            backgroundColor: theme.palette.background.dark,
        },
    },

    logotype_box: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },

    playlists: {
        marginTop: theme.spacing(3),
    },

    playlists_box: {
        marginTop: theme.spacing(2),
    },

    divider: {
        backgroundColor: theme.palette.background.dark,
        marginTop: theme.spacing(1),
    },
}));
