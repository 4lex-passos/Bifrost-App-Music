import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    player: {
        display: "flex",
        
    },

    player_left: {
        display: "flex",
        flex: 1,
    },

    player_right: {
        display: "flex",
        flexDirection: "column",
        flex: 8,
    },
}));
