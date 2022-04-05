import ButtonFull from "../ButtonFull/ButtonFull";
import "./TesteVinho.css";

function TesteVinho(props) {
  return (
    <section className="__section">
      <div className="__TesteVinho">
        <div className="__TesteVinho-text">
          <h3>Em dúvida sobre Qual vinho escolher?</h3>
          <h2>Descubra o Vintage ideal para você</h2>
          <a href="https://quiz.tryinteract.com/#/preview/623c93170a68cc001815c926">
            <ButtonFull className="__btn-test" text="Faça o teste" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default TesteVinho;
