import React from "react";
import useStyles from "./styles";

import { ListItem } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function SidebarOptions({ title, Icon, path }) {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <ListItem
      button
      className={classes.sidebar_options}
      onClick={() => {
        navigate(path);
      }}
    >
      {Icon && <Icon />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </ListItem>
  );
}

export default SidebarOptions;
