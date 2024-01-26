import React from "react";
import './ResultArtists.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const ResultArtist = ({className}) => {
  return (
    <div id="result-artist" class={`${className}`}>
      <div class="grid-container">
        <div class="artist-card" id="">
          <div class="card-img">
            <img id="artist-img" class="artist-img" />
            <div class="play">
              <span><FontAwesomeIcon icon={faPlay} /></span>
            </div>
          </div>
          <div class="card-text">
            <a title="Foo Fighters" class="vst" href=""></a>
            <span class="artist-name" id="artist-name"></span>
            <span class="artist-categorie">Artista</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultArtist;