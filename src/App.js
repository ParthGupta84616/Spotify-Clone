import React, { useState, useEffect } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import SpotifyWebApi from 'spotify-web-api-js';
import { getAuthToken } from './Components/LoginAuth';

function App() {
  const [token, setToken] = useState(null);
  const spotify = new SpotifyWebApi();

  useEffect(() => {
    const Token = getAuthToken();
    const _token = Token.access_token;
    if (_token) {
      // Set the token state
      setToken(_token);

      // Set the access token for the Spotify API client
      spotify.setAccessToken(_token);

      // Fetch user information
      spotify.getMe().then(
        (user) => {
          console.log('User information', user);
        },
        (error) => {
          console.error('Error fetching user information', error);
        }
      );

      // Remove the access token from the URL hash
      window.location.hash = '';
    }
  }, []);

  return (
    <div>
      {token ? <Home /> : <Login />}
    </div>
  );
}

export default App;
