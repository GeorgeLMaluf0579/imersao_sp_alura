import React, { useEffect } from "react";
import './PlayListContainer.css';
import Playlist from "../Playlist/Playlist";
import OfferContainer from "../OfferContainer/OfferContainer";
import ResultArtist from "../ResultArtists/ResultArtists";

const PlayListContainer = () => {
  return (
    <div className="playlist-container">
      <div className="result-playlists">
        <Playlist />
        <OfferContainer />
        <ResultArtist className="hidden" />
      </div>
    </div>
  )
}

export default PlayListContainer;