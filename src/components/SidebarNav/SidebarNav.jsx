import React from "react";
import './SidebarNav.css';
import logotipo from '../../assets/icons/logo-spotify.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSearch} from "@fortawesome/free-solid-svg-icons";

const SidebarNav = () => {
  return(
    <nav className="sidebar__navigation">
      <div className="logo">
        <a href="">
          <img src={logotipo} alt="Logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="">
            <span><FontAwesomeIcon icon={faHouse} /></span>
            Início
          </a>
        </li>
        <li>
          <a href="">
            <span><FontAwesomeIcon icon={faSearch} /></span>
            <span>Buscar</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SidebarNav