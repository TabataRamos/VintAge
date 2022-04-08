import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="__header">
      <ul className="list">
        <Link to="/home">
          <li id="home">Home</li>
        </Link>
        <Link to="/nossos-vinhos">
          <li id="nossosVinhos">Nossos Vinhos</li>
        </Link>

        <li id="logo"></li>

        <Link to="/vinicola">
          <li id="vinicola">A Vinícola</li>
        </Link>
        <Link to="/contato">
          <li id="contato">Contato</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
