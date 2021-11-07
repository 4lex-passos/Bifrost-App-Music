import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

function TrackColumn() {
    const classes = useStyles();

    return (
        <Grid
            className={classes.playlist_columns}
            container
            item
            xs={12}
            spacing={3}
        >
             <Grid item xs={.1}>
                <Typography variant="caption">#</Typography>
            </Grid>

            <Grid item xs={2}>
                <Typography variant="caption">TITLE</Typography>
            </Grid>

            <Grid item xs={2}>
                <Typography variant="caption">ALBUM</Typography>
            </Grid>

            <Grid item xs={2}>
                <Typography variant="caption">ADDED IN</Typography>
            </Grid>

            <Grid container item justifyContent="flex-end" xs={2}>
                <Typography>DURATION</Typography>
            </Grid>
        </Grid>
    );
}

export default TrackColumn;
