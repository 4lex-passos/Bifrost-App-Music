import { Typography, Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

function TrackRow({
    trackPosition,
    trackName,
    trackArtist,
    trackAlbum,
    trackAddedIn,
    trackDuration,
}) {
    const classes = useStyles();

    return (
        <Grid
            className={classes.playlist_track}
            container
            item
            xs={12}
            spacing={3}
        >
            <Grid item xs={.1}>
                <Typography variant="caption">{trackPosition}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography>{trackName}</Typography>
                <Typography variant="caption">{trackArtist}</Typography>
            </Grid>

            <Grid item xs={2}>
                <Typography variant="caption">{trackAlbum}</Typography>
            </Grid>

            <Grid item xs={2}>
                <Typography variant="caption">{trackAddedIn}</Typography>
            </Grid>

            <Grid container item justifyContent="flex-end" xs={2}>
                <Typography variant="caption">{trackDuration}</Typography>
            </Grid>
        </Grid>
    );
}

export default TrackRow;
