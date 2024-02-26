import React from 'react';
import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';

export default function Home({ spotify }) {
  return (
    <div className="mainbody flex flex-col h-screen bg-black">
      <div className="player flex">
        <div className="sidebar w-1/4 h-full">
          <SideBar />
        </div>
        <div className="body w-3/4 h-full">
          <Body />
        </div>
      </div>
      {/* <div className="footer">
        <Footer />
      </div> */}
    </div>
  );
}
