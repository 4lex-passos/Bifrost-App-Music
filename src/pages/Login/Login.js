import React from "react";

import logotype from "../../images/logotipo.png";
import useStyles from "./styles";

import { Button } from "@material-ui/core";
import { accessUrl } from "../../components/SpotifyAuth/Spotify";

function Login() {
    var classes = useStyles();

    return (
        <div className={classes.container}>
            <img
                src={logotype}
                alt="logotype"
                className={classes.logotypeImage}
            />

            <Button
                variant="contained"
                className={classes.formBoxButton}
                href={accessUrl}
            >
                LOGIN WITH SPOTIFY
            </Button>
        </div>
    );
}

export default Login;
