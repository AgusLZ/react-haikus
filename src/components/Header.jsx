import React from 'react'
import "./Header.css";
const Header = () => {
    return (
        <header>
            <div id="cajaBuscar">
            <input type="text" name="buscar" id="buscar" placeholder="Buscar" /> 
            <img id="lupa" src="./iconos/search_icon.svg" alt="icono" width="24px" height="24px" />
            </div>
        </header>
    )
}

export default Header
