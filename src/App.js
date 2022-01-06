import { useEffect, useState } from "react";

import { useStateValue } from "./context/stateProvider";

import PlayerPage from "./pages/Player/Player";
import LoginPage from "./pages/Login/Login";

import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

import { getTokenFromResponse } from "./components/SpotifyAuth/Spotify";

import SpotifyWebApi from "spotify-web-api-js";
import Cookies from "js-cookie";

import { Routes, Route } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

import Playlist from "./components/Playlist/Playlist";

var spotify = new SpotifyWebApi();

function App() {
  const [{}, dispatch] = useStateValue();

  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    const hash = getTokenFromResponse();

    const _token = hash.access_token;
    const token = Cookies.get("token");

    if (_token !== undefined) {
      Cookies.set("token", _token);
      setIsLoading(true);
      window.location.reload();
    }

    if (token) {
      spotify.setAccessToken(token);

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
    }
  }, []);

  return !isLoading ? (
    <Routes> 
      <Route
        path="/"
        element={
          <PublicRoute redirectTo="/player">
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicRoute redirectTo="/player">
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/player"
        element={
          <PrivateRoute redirectTo="/login">
            <PlayerPage spotify={spotify} />
          </PrivateRoute>
        }
      >
        <Route path="/player/playlist/:id" element={<Playlist />} />
      </Route>

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  ) : (
    <div style={{ textAlign: "center" }}>
      <CircularProgress size={140} />
    </div>
  );
}

export default App;
