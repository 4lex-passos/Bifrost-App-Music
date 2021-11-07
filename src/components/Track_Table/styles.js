import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    track_play: {
        color: "white",
        fontSize: 20,
    },

    playlist_track: {
        "&:hover": {
            background: "rgba(255,255,255,.1)",
            borderRadius: 4,
        },
    },
}));
