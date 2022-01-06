import React from "react";
import useStyles from "./styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

function Player({ spotify }) {
  const classes = useStyles();

  return (
    <div className={classes.player}>
      <div className={classes.player_left}>
        <Sidebar spotify={spotify}/>
      </div>

      <div className={classes.player_right}>
        <Header spotify={spotify} />
        <Outlet spotify={spotify}/>
      </div>
      <Footer spotify={spotify}/>
    </div>
  );
}

export default Player;
