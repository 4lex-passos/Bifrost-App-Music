import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    body: {
        overflowY: "overlay",

        width: "100%",
        height: "100%",
        background: "linear-gradient(transparent, rgba(0, 0, 0, 1))",
        //backgroundColor: "rgb(33,33,33)",
    },

    body_top: {
        display: "flex",
        gap: theme.spacing(3),
        padding: theme.spacing(4),
    },

    playlist_box: {
        maxWidth: 232,
        maxHeight: 232,
    },

    playlist_cover: {
        width: "100%",
        height: "100%",
        boxShadow: "0 4px 60px rgba(0, 0, 0, 0.5)",
    },

    playlist_info: {
        display: "flex",
        flexDirection: "column",
        flex: 3,
        justifyContent: "flex-end",
    },

    body_center: {
        display: "flex",

        alignItems: "center",
        padding: theme.spacing(4),
        gap: theme.spacing(4),
    },

    playlist_play: {
        fontSize: 70,
    },

    playlist_more: {
        fontSize: 30,
    },

    body_bottom: {
        padding: theme.spacing(4),
    },

    divider: {
        backgroundColor: theme.palette.background.dark,
        margin: theme.spacing(1),
    },
}));
