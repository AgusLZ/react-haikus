import React from "react";
import "./Footer.css";


const Marcas = [
  {
    textoAlternativo: "Logo Estrenos",
    srcDelIcono: "./assets/estrenos.cine.ar.svg",
  },
  {
    textoAlternativo: "Logo TV",
    srcDelIcono: "./assets/tv.cine.ar.svg",
  },
  {
    textoAlternativo: "Icono Play",
    srcDelIcono: "./assets/play.cine.ar.svg",
  },
];

const logomarcas = Marcas.map(
  ({ textoAlternativo, srcDelIcono }) => (
    <li>
      <a>
        <svg
          src={srcDelIcono}
          alt={textoAlternativo}
        />
      </a>
    </li>
  )
);



const Footer = () => {
  return <footer>
    <div className="LinksFooter">
        <div className="IconosLink">

          <img alt="Mail" src="./assets/mail_icon.svg" />

          <img alt="Share" src="./assets/share_icon.svg" />
        </div>
      </div>
  </footer>
};

export default Footer;