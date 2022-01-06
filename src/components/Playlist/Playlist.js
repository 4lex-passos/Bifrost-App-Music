import React, { useEffect, useState } from "react";
import useStyles from "./styles";

import { useStateValue } from "../../context/stateProvider";
import { Divider, Grid, Typography } from "@material-ui/core";

import TrackRow from "../Track_Table/TrackRow";
import TrackColumn from "../Track_Table/TrackColumn";

import {
  PlayCircleFilledWhiteTwoTone as PlayIcon,
  MoreHorizTwoTone as MoreIcon,
} from "@material-ui/icons";

import { useParams } from "react-router-dom";

function Playlist({ spotify }) {
  const classes = useStyles();
  const { id } = useParams();
  const [{ playlists }, dispatch] = useStateValue();

  var selectedPlaylist;

  selectedPlaylist = playlists?.items.find((item) => item?.id == id);
  
  useEffect(() => {}, []);

  return (
    <>
      <div className={classes.body}>
        <div className={classes.body_top}>
          <div className={classes.playlist_box}>
            <img
              className={classes.playlist_cover}
              src={selectedPlaylist?.images[0]?.url}
            />
          </div>

          <div className={classes.playlist_info}>
            <Typography variant="subtitle2">
              <strong>PLAYLIST</strong>
            </Typography>
            <Typography variant="h2">
              <strong>{selectedPlaylist?.name}</strong>
            </Typography>
            <Typography variant="caption">
              {selectedPlaylist?.description}
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
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default Playlist;
