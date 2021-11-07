import { useEffect } from "react";

import { useStateValue } from "./context/stateProvider";

import PlayerPage from "./pages/Player/Player";

import LoginPage from "./pages/Login/Login";

import { getTokenFromResponse } from "./components/SpotifyAuth/Spotify";

import SpotifyWebApi from "spotify-web-api-js";

var spotify = new SpotifyWebApi();

function App() {
    const [{ token }, dispatch] = useStateValue();

    useEffect(() => {
        const hash = getTokenFromResponse();

        const _token = hash.access_token;

        if (_token) {
            spotify.setAccessToken(_token);

            dispatch({
                type: "SET_TOKEN",
                token: _token,
            });

            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user,
                });
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                });
            });

            spotify
                .getPlaylist("1JnGYTfDZKBznWrY0arWjh")
                .then((reponse) => {
                    dispatch({
                        type: "SET_DISCOVER_WEEKLY",
                        discover_weekly: reponse,
                    });
                });
        }
    }, []);

    return (
        <div>{token ? <PlayerPage spotify={spotify} /> : <LoginPage />}</div>
    );
}

export default App;
