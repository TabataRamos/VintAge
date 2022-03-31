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
              <img
                src={require("../../assets/images/VintAge.png")}
                alt="logo"
              ></img>
            </li>

            <li>
              <a href="#">Politica de Privacidade</a>
            </li>
            <li>
              <a href="#">Termos de Uso</a>
            </li>
          </ul>
        </div>
        <div className="list-footer">
          <ul>
            <li className="__title">
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li className="__title">
              <Link to="/vinho">Nossos Vinhos</Link>
            </li>
            <li>
              <a href="#">Tintos</a>
            </li>
            <li>
              <a href="#">Brancos</a>
            </li>
            <li>
              <a href="#">Rosés</a>
            </li>
            <li>
              <a href="#">Espumantes</a>
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
          <ul>
            <li id="redes">Redes Socias:</li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <Icon
                  icon="akar-icons:instagram-fill"
                  color="#fcfbf8"
                  height="32"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon
                  icon="icon-park-outline:twitter"
                  color="#fcfbf8"
                  height="32"
                />
              </a>
            </li>
            <li>
              <a href="#">
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
