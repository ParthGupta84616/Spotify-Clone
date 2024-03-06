import React from 'react';
import LoginCard from './LoginCard';
import { Spotify_Login } from './LoginAuth';


function Login() {
  return (
    <div className='bg-black'>
      <div className="bg-black">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
          alt="logo"
          className="h-28 p-8 mx-auto"
        />
      </div>

      <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen flex flex-col justify-center items-center">
      <div className="bg-black rounded-xl w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 py-8 shadow-lg sm:-mt-24 md:-mt-32 lg:-mt-36 xl:-mt-40">

          <h1 className="text-white text-5xl mt-12 mb-8 text-center">Login To Spotify</h1>
          <div className="flex flex-col items-center justify-center">
            <a href={Spotify_Login}><button className="flex items-center mt-6 text-gray-200 border border-gray-400 rounded-full px-6 py-3 w-full sm:w-auto">
              <img  src="https://imgs.search.brave.com/FWYqjPRsmfaqI8KA4mH0smF0wTT_0pJZM02GYh9_2dY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL0dvb2dsZV8l/MjJHJTIyX2xvZ28u/c3Zn.svg" alt="google_logo" className="w-8 h-8 mr-2 ml-4" />
              <strong className='ml-8'>Continue With Google</strong>
            </button></a>
            <a href={Spotify_Login}><button className="flex items-center mt-6 text-gray-200 border border-gray-400 rounded-full px-6 py-3 w-full sm:w-auto">
              <img src="https://imgs.search.brave.com/nWZqJGV2j3TkAAV_rtOHoln4Ubcw4TysMJHaJstkLfI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA5L2ZhY2Vib29r/LWxvZ28tMC5wbmc" alt="facebook_logo" className=" h-8  ml-4" />
              <strong className='ml-8'>Continue With Facebook</strong>
            </button>
            </a>
            <a href={Spotify_Login}><button className="flex items-center mt-6 text-gray-200 border border-gray-400 rounded-full px-6 py-3 w-full sm:w-auto">
              <img src="https://imgs.search.brave.com/ZTv1oUE2KsDXhW_aHlarrebRDCprtzFdVxIGpPmKcmI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vaW1hZ2Vz/L2xhcmdlLzJ4L2Fw/cGxlLWxvZ28td2hp/dGUucG5n" alt="apple_logo" className="w-8 h-8 mr-2 ml-4" />
              <strong className='ml-8'>Continue With Apple</strong>
            </button>
            </a>
            <a href={Spotify_Login}>
            <button className="mt-6 text-gray-200 border border-gray-400 rounded-full px-6 py-3 w-full sm:w-auto"><strong  >Continue With Phone Number</strong></button>
            </a>
          </div>
        </div>
      </div>
      <div className="-mt-24">
        <LoginCard />
      </div>
    </div>
  );
}

export default Login;



