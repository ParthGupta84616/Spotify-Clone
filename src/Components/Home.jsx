import React from 'react';
import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';

export default function Home({ spotify }) {
  return (
    <div className="mainbody bg-black" style={{ minHeight: "80vh" }}>
      <div className="player flex flex-col sm:flex-row">
        <div className="sidebar w-full sm:w-1/4">
          <SideBar />
        </div>
        <div className="body w-full sm:w-3/4">
          <Body spotify={spotify}/>
        </div>
      </div>
      <div className="footer w-full bg-white" style={{ minHeight: "20vh" }}>
        <Footer />
      </div>
    </div>
  );
}
