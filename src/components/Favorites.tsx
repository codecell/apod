import React from 'react';
import ReactPlayer from "react-player/lazy";

import Toolbar from './Navbar';
import { 
  FavoritesCanvas,  ApodImage,  ApodVideo
 } from "./App.styles";

const Favorites = ():JSX.Element => {
  const favsString = localStorage.getItem("favorites");
  const favorites = favsString && JSON.parse(favsString);
  
    return (
      <>
        <Toolbar />
        <FavoritesCanvas>
          {(favorites && favorites.length > 0) ? (favorites.map((item: string) => (item.includes("youtube") ? (
            <ApodVideo fav="true">
              <ReactPlayer
                muted={true}
                url={item}
                width="100%"
                height="100%"
                playing={false}
                controls={true}
              />
            </ApodVideo>) : (<ApodImage fav="true" src={item} />)))) : 
            (<h2>You have not added any image(s) to favorites list</h2>)}
        </FavoritesCanvas>
      </>
    );
}

export default Favorites;
