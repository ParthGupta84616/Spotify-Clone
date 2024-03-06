import React from 'react';
import Menu from './Menu';
import { useMarketValue } from '../Datalayer';
import Playlist from './Playlist';
import Playlistnames from './Playlistnames';

function SideBar() {
  const [{ playlists }] = useMarketValue()
  return (
    <div className='flex flex-col' style={{ minHeight: "85vh" }}>
      <div className='p-8 m-2 rounded-xl' style={{ background: "#121212" }}>
        <img src="https://imgs.search.brave.com/cPKolPr_yP_pEg-CWqU3HZSSu88xf_2yzR9PqAuNq5I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9TcG90aWZ5/LUxvZ28tcG5nLVJH/Qi1XaGl0ZS03NTB4/MjI1LnBuZw" alt="" className='w-4/5' />
      </div>
      <div className="menu m-2 rounded-xl" style={{ background: "#121212" }}>
        <Menu 
          icon={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgklEQVR4nO3Xv2tTURgG4JMiSsFfCHYoDt3iIri4CQ6C4OZmt3ZydtM/wdXR1UkQRBBHEaIihBYnF3FxKaIIFiSDxj4SuMGQRHJzc3O9l34PhAwh5/By3vPdJKUwGzbwMnttpCbCdXzz13fcSE2BFu7gt0kHuIeVVGc4iSdme44zqY5wER/l9wmXxtaYqsoQW+iZ3+A7WyPr3MbPyoPgGO5b3EOsZmtexl5lQXAOb5VndziicRYvlh4EV/BZ+b7iWrbHkWzCHSxztPYtTx93B3tle94sO8QJPFadZzhddojzeK96H3ChrBCb+OH/6WF7kQDDy1YXD3B03hBro+OvRl5jPW+IiQdSzXzB1Vkhbk37iVBDv7LHQGs8wHE80jxPcWo0SDf7YF9z7Gfv3dEgb/AObc3Rxg46/7onjZByTK1GSBGkZlKcSM2kOJHDdCJpThFEnEg+Ua0CUlz2HKJaBaSoVg5RrQJSVCuHqFYBKaqVQ1RrSdV61YA/Vp159wohFfMHXKeS5oE9eZwAAAAASUVORK5CYII="}
          option={"Home"}
        />
        <Menu 
          icon={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuklEQVR4nO2Zy05TURSGNwNx6oTWcBmgj+AAxMsrmCiYQk2I+gAmqLEhAZ0BL2DiSB2YkMaBWsJYixNvb+DEqTrCiEKrn1l0nbg9aaAb1ml76vmTk5708v/rb/dae+1V5zJk6D4Ax4FrwGPgA/AV2NHrC/BeX7sK5F23ATgPVIAarUPe+wI41w0GTgLrXnB14BUwB4wBOeCIXnI/DtwEqvreCGvAiU6ZKALfNJDvwBIwEPB5MbYMbCnHJjCdbNQxAIvet7kKDLkDAhgGyh7fwkG5ggDcU8Hfet9nxHsD+NUWMzSWEyo4mQD/lGemYM3vJ3aUE3cSEWnolLycGU1CIKpOq+bk/+r0eTlTSWKfQCvMiCl5c70hrYSCs5bEstkJlsxI99eU0ix4btl21HQDa3mfMNCVfaau7U3OgvC6fjMvTSIM095Q7VkLMmnyBHMm0YVp31LthxZk0sUKxkyiC9OeUO23FmTSitPO/PC086r92YJsW8n6TaIL0z6q2j97xchmryytj5bJPm4SXZj2GdXe6JXy+8CCTIYJgqpJdGHar1X7otU6jVqUw7cK4S1KDThmRSrTDsGyCWFrmiuqWbYkPa2kPzrQxp+yJo9a+bLVOX2Pg9VT1XqWhMCoHj8FJXOBvzrzqiGTycGkRKZVRAYEUwnwX/aGDxes+eNiC56ZksUy0+U075mQx6JNxK2ZiXJm+BBcI15O+JDSO2MbefMACl7ObOkZOxe4T6xoJdxtDGPz4MhM8mNULQCVmHBVW4sJ3Uz79crrc7f1CFuPjV0H5RfomBmBjGxk2hH4t4IcD57Em9E9zBRcu6DLZRZ4BLzTErqtm9sn4A1wX5flwD7VsbNmjOfAtSZmrrgeMlN0aQM9ZmbyfzAz41JqZiczk5ICsOjSCOCSt8zuujSDRs605+/sDBncLv4AqVXBkihc3DUAAAAASUVORK5CYII="}
          option={"Search"}
        />
      </div>
      <Playlist />
      <div className='m-2 rounded-xl' style={{ background: "#121212", maxHeight: "37vh", overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
        <style>
          {`
            ::-webkit-scrollbar {
              background-color: gray;
            }
          `}
        </style>
        {playlists?.items?.map((playlist) => (
          <Playlistnames key={playlist.id} playlist_name={playlist.name} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
