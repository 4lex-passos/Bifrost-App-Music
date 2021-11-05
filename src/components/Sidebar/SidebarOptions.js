import React from "react";
import useStyles from "./styles";

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

function SidebarOptions({ title, Icon }) {
    const classes = useStyles();

    return (
        <ListItem button className={classes.sidebar_options}>
            {Icon && <Icon />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </ListItem>
    );
}

export default SidebarOptions;
