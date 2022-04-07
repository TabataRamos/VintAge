import "./Footer.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="__footer">
      <div className="linha">
        <div className="__footer-logo">
          <ul>
            <li>
              <img src={require("../../assets/images/VintAge.png")} alt="logo"></img>
            </li>

            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">Termos de Uso</a>
            </li>
          </ul>
        </div>
        <div className="list-footer">
          <ul>
            <li className="__title">
              <Link to="/home">Home</Link>
            </li>
          </ul>
          <ul>
            <li className="__title">
              <Link to="/nossos-vinhos">Nossos Vinhos</Link>
            </li>
            <li>
              <Link to="/nossos-vinhos/tintos">Tintos</Link>
            </li>
            <li>
              <Link to="/nossos-vinhos/brancos">Brancos</Link>
            </li>
            <li>
              <Link to="/nossos-vinhos/roses">Rosés</Link>
            </li>
            <li>
              <Link to="/nossos-vinhos/espumantes">Espumantes</Link>
            </li>
          </ul>
          <ul>
            <li className="__title">
              <Link to="/vinicola">A Vinícola</Link>
            </li>
          </ul>
          <ul>
            <li className="__title">
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <p id="redes">Redes Socias:</p>
          <ul>
            <li>
              <a href="https://www.instagram.com/vintage.vinic/">
                <Icon icon="akar-icons:instagram-fill" color="#fcfbf8" height="32" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/VintageVinicola">
                <Icon icon="icon-park-outline:twitter" color="#fcfbf8" height="32" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@vintage.vinic?lang=pt-BR">
                <Icon icon="bi:tiktok" color="#fcfbf8" height="32" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
