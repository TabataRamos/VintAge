import "./Header.css";

function Header() {
  return (
    <header className="__header">
      <ul className="list">
        <a href="#">
          <li> Home</li>
        </a>
        <a href="#">
          <li>Nossos Vinhos</li>
        </a>

        <li id="logo"></li>

        <a href="#">
          <li>A Vinícola</li>
        </a>
        <a href="#">
          <li>Contato</li>
        </a>
      </ul>
    </header>
  );
}

export default Header;
