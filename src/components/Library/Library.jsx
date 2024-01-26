import React from "react";
import './Library.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPlus, faGlobe} from "@fortawesome/free-solid-svg-icons";

const Library = () => {
  return (
    <div className="library">
      <div className="library__content">
        <button className="library__button">
          <span className="fa">
            <FontAwesomeIcon icon={faBook} />
          </span>
          Sua biblioteca
        </button>
        <span className="fa-plus">
          <FontAwesomeIcon icon={faPlus}/>
        </span>
      </div>

      <section className="section-playlist">
        <div className="section-playlist__content">
          <span className="text title">Crie sua primeira playlist</span>
          <span className="text subtitle">É fácil, vamos te ajudar.</span>
          <button className="section-playlist__button">
            <span>Criar playlist</span>
          </button>
        </div>
      </section>

      <div className="cookies">
        <a href="">Cookies</a>
      </div>

      <div className="languages">
        <button className="languages__button">
          <span>
            <FontAwesomeIcon icon={faGlobe} />
            Português do Brasil
          </span>
        </button>
      </div>
    </div>
  )
}

export default Library;