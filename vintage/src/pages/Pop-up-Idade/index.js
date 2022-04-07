import { Link } from "react-router-dom";
import "./style.css";

export default function PopUpIdade() {
  return (
    <div id="background">
      <div id="container-popup">
        <img src={require("../../assets/images/VintAge.png")} alt="logo"></img>
        <h1>Bem vindo</h1>
        <h3>
          O nosso site é um “portfólio” de vinhos, para acessá-lo você deve ter a idade legal para
          beber no seu país ou região de residência.
        </h3>
        <h2>Você tem mais de 18 anos?</h2>
        <div>
          <Link to="/home">
            <button style={{ backgroundColor: "#64BC26", color: "#1A1A19" }}>Sim</button>
          </Link>
          <Link to="/aviso-idade">
            <button style={{ backgroundColor: "#C03818", color: "#FCFBF8" }}>Não</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
