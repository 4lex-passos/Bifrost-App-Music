import React, { useState } from "react";
import useStyles from "./styles";

import {
    Box,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    LinearProgress,
    Slider,
    Typography,
} from "@material-ui/core";

import {
    ShuffleTwoTone as RandomIcon,
    PlayCircleFilledWhiteTwoTone as PlayIcon,
    SkipPreviousTwoTone as ComebackIcon,
    SkipNextTwoTone as NextIcon,
    RepeatTwoTone as RepeatIcon,
    PlaylistPlayTwoTone as PlaylistIcon,
    VolumeDownTwoTone as VolumeIcon,
    FavoriteTwoTone as FavoriteIcon,
    FeaturedVideoTwoTone as FloatBoxIcon,
} from "@material-ui/icons";

function Footer() {
    const classes = useStyles();
    const [progress, setProgress] = useState(35);
    const [volume, setVolume] = useState(100);

    const handleChange = (event, newValue) => {
        setVolume(newValue);
    };

    return (
        <div className={classes.footer}>
            <div className={classes.footer_left}>
                <div>
                    <img
                        className={classes.player_cover}
                        src="https://cdn.crello.com/common/f3476718-c5ce-4685-9806-9152eb70c124.jpg?width=512"
                    />
                </div>

                <div className={classes.player_info}>
                    <Typography variant="subtitle2">Nome da musica</Typography>
                    <Typography variant="caption">Cantor</Typography>
                </div>

                <div>
                    <IconButton color="inherit" aria-label="random">
                        <FavoriteIcon fontSize="small" />
                    </IconButton>

                    <IconButton color="inherit" aria-label="random">
                        <FloatBoxIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>

            <div className={classes.footer_center}>
                <div className={classes.player_control_top}>
                    <IconButton color="inherit" aria-label="random">
                        <RandomIcon fontSize="small" />
                    </IconButton>

                    <IconButton color="inherit" aria-label="comeback">
                        <ComebackIcon fontSize="small" />
                    </IconButton>

                    <IconButton color="inherit" aria-label="play">
                        <PlayIcon fontSize="large" />
                    </IconButton>

                    <IconButton color="inherit" aria-label="next">
                        <NextIcon fontSize="small" />
                    </IconButton>

                    <IconButton color="inherit" aria-label="repeat">
                        <RepeatIcon fontSize="small" />
                    </IconButton>
                </div>

                <div className={classes.player_control_bottom}>
                    <MusicProgress color="secondary" value={progress} />
                </div>
            </div>

            <div className={classes.footer_right}>
                <IconButton color="inherit" aria-label="playlist">
                    <PlaylistIcon />
                </IconButton>

                <VolumeIcon />
                <Slider
                    aria-labelledby="volume-slider"
                    onChange={handleChange}
                    value={volume}
                    className={classes.player_volume_slider}
                    color="secondary"
                />
            </div>
        </div>
    );
}

function MusicProgress(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box minWidth={35}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                >{`${Math.round(props.value)}`}</Typography>
            </Box>

            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>

            <Box minWidth={35}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                >{`${Math.round(props.value)}`}</Typography>
            </Box>
        </Box>
    );
}

export default Footer;
