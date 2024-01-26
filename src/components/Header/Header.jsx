import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Header.css'

const Header = () => {
  return(
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </button>
        <button className="arrow-right">
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
            </span>
        </button>

        <div className="header__search">
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            id="search-input"
            maxLength="800"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="O que você quer ouvir?"
          />
        </div>
      </div>

      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  )
}

export default Header;