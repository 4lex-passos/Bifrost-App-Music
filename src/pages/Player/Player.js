import React from "react";
import useStyles from "./styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Player({ spotify }) {
    const classes = useStyles();

    return (
        <div className={classes.player}>
            <div className={classes.player_left}>
                <Sidebar />
            </div>

            <div className={classes.player_right}>
                <Header spotify={spotify} />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    );
}

export default Player;
