import React from "react";
import useStyles from "./styles";
import logotype from "../../images/logotipo.png";
import SidebarOptions from "./SidebarOptions";
import { Divider, List } from "@material-ui/core";

import { useStateValue } from "../../context/stateProvider";

import {
    HomeTwoTone as HomeIcon,
    ExploreTwoTone as SearchIcon,
    LibraryMusicTwoTone as LibraryIcon,
    AddBoxTwoTone as AddPlaylistIcon,
    FavoriteTwoTone as FavoriteIcon,
} from "@material-ui/icons";

function Sidebar() {
    const classes = useStyles();
    const [{ playlists }, dispatch] = useStateValue();

    console.log("PLAYLISTS >>> ", playlists);

    return (
        <div className={classes.sidebar}>
            <div className={classes.logotype_box}>
                <img
                    className={classes.logotype_sidebar}
                    src={logotype}
                    alt="logotype"
                />
            </div>

            <List component="nav" className={classes.nav_box}>
                <SidebarOptions title="Home" Icon={HomeIcon} />
                <SidebarOptions title="Search" Icon={SearchIcon} />
                <SidebarOptions title="Your Library" Icon={LibraryIcon} />
            </List>

            <List component="nav" className={classes.playlists}>
                <SidebarOptions
                    title="Create playlist"
                    Icon={AddPlaylistIcon}
                />

                <SidebarOptions title="Liked songs" Icon={FavoriteIcon} />

                <Divider className={classes.divider} variant="middle" />

                <div className={classes.playlists_box}>
                    {playlists?.items?.map((playlist) => (
                        <SidebarOptions title={playlist.name} />
                    ))}
                </div>
            </List>
        </div>
    );
}

export default Sidebar;
