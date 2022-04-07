import "./style.css";

export default function PopUpIdade() {
  return (
    <div id="background">
      <div id="container-popup">
        <h1>Bem vindo</h1>
        <h3>
          O nosso site é um “portfólio” de vinhos, para acessá-lo você deve ter a idade legal para
          beber no seu país / região de residência.
        </h3>
        <h2>Você tem mais de 18 anos?</h2>
        <div>
          <button>Sim</button>
          <button>Não</button>
        </div>
      </div>
    </div>
  );
}
