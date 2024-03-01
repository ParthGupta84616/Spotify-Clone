import React from 'react';
import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';

export default function Home({ spotify }) {
  return (
    <div className="mainbody bg-black" style={{ Height: "85vh" }}>
      <div className="player flex flex-col sm:flex-row">
        <div className="sidebar w-full sm:w-1/4">
          <SideBar />
        </div>
        <div className="body w-full sm:w-3/4">
          <Body spotify={spotify}/>
        </div>
      </div>
      <div className="footer w-full rounded-2xl" style={{ height: "15vh",background: "#121212" }}>
        <Footer />
      </div>
    </div>
  );
}
