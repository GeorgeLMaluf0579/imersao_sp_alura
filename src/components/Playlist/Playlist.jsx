import React, {useState, useEffect} from "react";
import './Playlist.css';

const Playlist = () => {
  const [greetings, setGreetings] = useState("");

  useEffect(() => {
    const localTime = new Date();
    const hours = localTime.getHours();

    if (hours >= 6 && hours < 12) {
        setGreetings("Bom dia!");
    } else if (hours >= 12 && hours < 18) {
        setGreetings("Boa tarde!");
    } else {
        setGreetings("Boa noite!");
    }
  },[])

  return (
    <div class="playlist">
      <h1 id="greeting">{greetings}</h1>
      <h2 class="session">Navegar por todas as seções</h2>
    </div>
  )
}

export default Playlist