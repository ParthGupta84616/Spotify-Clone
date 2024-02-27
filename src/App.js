import React, { useState, useEffect } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import SpotifyWebApi from 'spotify-web-api-js';
import { getAuthToken } from './Components/LoginAuth';
import { useMarketValue } from './Datalayer';

function App() {
  // const [token, setToken] = useState(null);
  const spotify = new SpotifyWebApi();
  const [{ user, token }, dispatch ] = useMarketValue();

  useEffect(() => {
    const Token = getAuthToken();
    const _token = Token.access_token;
    if (_token) {
      dispatch({
        type:"SET_TOKEN",
        token:_token,
      })
      
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      window.location.hash = '';
      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type : "SET_PLAYLISTS",
          playlists : playlists,
        })
      })
    }
  }, []);

  return (
    <div>
      {token ? <Home spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
