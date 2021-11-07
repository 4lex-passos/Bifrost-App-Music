import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    footer: {
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bottom: 0,
        padding: 20,
        height: 100,
        width: "100%",
        backgroundColor: "#282828",
    },

    footer_left: {
        flex: 1,

        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        gap: 14,
    },

    player_cover: {
        width: 56,
        height: 56,
    },

    footer_center: {
        flex: 1,
    },

    footer_right: {
        flex: 1,

        display: "flex",
        justifyContent: "right",
        alignItems: "center",
    },

    player_volume_slider: {
        width: 90,
    },

    player_control_top: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));
