import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="__header">
      <ul className="list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/nossos-vinhos">
          <li>Nossos Vinhos</li>
        </Link>

        <li id="logo"></li>

        <Link to="/vinicola">
          <li>A Vinícola</li>
        </Link>
        <Link to="/contato">
          <li>Contato</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
