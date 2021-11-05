import React from "react";
import useStyles from "./styles";

import { useStateValue } from "../../context/stateProvider";
import { Avatar, Typography } from "@material-ui/core";
import { PlayCircleFilledTwoTone as SkipIcon } from "@material-ui/icons";

function Header({ spotify }) {
    const [{ user }, dispatch] = useStateValue();
    console.log(user);
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.header_left}>
                <SkipIcon fontSize="large" className={classes.header_comeback}/>
                <SkipIcon fontSize="large" className={classes.header_next}/>
            </div>

            <div className={classes.header_right}>
                <Avatar className={classes.header_avata} alt={user?.display_name} src={user?.images[0]?.url} />
                <Typography>{user?.display_name}</Typography>
            </div>
        </div>
    );
}

export default Header;
