import React from "react";
import './MainContainer.css';
import Header from "../Header/Header";
import PlayListContainer from "../PlaylistContainer/PlaylistContainer";

const MainContainer = () => {
  return(
    <main>
      <div className="main-container">
        <Header />
        <PlayListContainer />
      </div>
    </main>
  )
}


export default MainContainer;