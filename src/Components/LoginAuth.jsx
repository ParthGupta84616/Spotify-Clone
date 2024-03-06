
const Auth = "https://accounts.spotify.com/authorize";
const ClientId ="bcad4527ebb343d580e45ee802f78ac5";
const Redirect = "https://master--spotify-front-end-clone-pg.netlify.app/";

const scopes=[
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state",
];
export const getAuthToken= () =>{
    return window.location.hash.substring(1).split('&').reduce((initial,item) =>{
        let parts =item.split('=');
        initial[parts[0]] =decodeURIComponent(parts[1]);
        return initial;

    },{});
}

export const Spotify_Login = `${Auth}?client_id=${ClientId}&redirect_uri=${Redirect}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


