import React from 'react';
import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';

export default function Home({ spotify }) {
  return (
    <div className="mainbody bg-black" style={{height:"80vh"}}>
      <div className="player flex">
        <div className="sidebar w-1/4 h-3/4">
          <SideBar />
        </div>
        <div className="body w-3/4 h-3/4">
          <Body />
        </div>
      </div>
      <div className="footer h-1/4 w-full bg-w">
        <Footer />
      </div>
    </div>
  );
}
