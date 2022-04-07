import "./style.css";
export default function MenorIdade() {
  return (
    <div id="background">
      <div id="container-popup">
        <img src={require("../../assets/images/VintAge.png")} alt="logo"></img>
        <h4>Desculpe, o conteúdo do nosso site só está disponível para maiores de 18 anos.</h4>
        <h4>
          A venda e o consumo de álcool no Brasil é proibida para pessoas com menos de 18 anos.
        </h4>
      </div>
    </div>
  );
}
