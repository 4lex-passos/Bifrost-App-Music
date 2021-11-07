import React from "react";
import useStyles from "./styles";

import { useStateValue } from "../../context/stateProvider";
import { Divider, Grid, Typography } from "@material-ui/core";
import TrackRow from "../Track_Table/TrackRow";
import TrackColumn from "../Track_Table/TrackColumn";

import {
    PlayCircleFilledWhiteTwoTone as PlayIcon,
    MoreHorizTwoTone as MoreIcon,
} from "@material-ui/icons";

function Body({ spotify }) {
    const classes = useStyles();
    const [{ discover_weekly }, dispatch] = useStateValue();
    console.log(discover_weekly);

    return (
        <div className={classes.body}>
            <div className={classes.body_top}>
                <div className={classes.playlist_box}>
                    <img
                        className={classes.playlist_cover}
                        src={discover_weekly?.images[0]?.url}
                    />
                </div>

                <div className={classes.playlist_info}>
                    <Typography variant="subtitle2">
                        <strong>PLAYLIST</strong>
                    </Typography>
                    <Typography variant="h2">
                        <strong>{discover_weekly?.name}</strong>
                    </Typography>
                    <Typography variant="caption">
                        {discover_weekly?.description}
                    </Typography>
                </div>
            </div>
            <div className={classes.body_center}>
                <PlayIcon className={classes.playlist_play} />
                <MoreIcon className={classes.playlist_more} />
            </div>

            <div className={classes.body_bottom}>
                <div className={classes.body_bottom}>
                    <Grid container spacing={2}>
                        <TrackColumn />

                        <Divider className={classes.divider} />

                        {discover_weekly?.tracks?.items.map((item) => (
                            <TrackRow
                                trackPosition={item?.index}
                                trackName={item?.track?.name}
                                trackArtist={item?.track?.artists[0].name}
                                trackAlbum={item?.track?.album.name}
                                trackAddedIn={item?.added_at}
                                trackDuration={item?.track?.duration_ms}
                            />
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Body;
