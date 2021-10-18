import React from "react";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div id="cajaBuscador">
        <input type="text" name="buscar" id="buscar" placeholder="Buscar" />
        <FontAwesomeIcon icon={faSearch} id="IconoBuscador" />
      </div>
    </header>
  );
};

export default Header;