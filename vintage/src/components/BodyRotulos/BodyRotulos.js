import Line2 from "../Line2/Line2";
import Title from "../Title/Title";
import "./BodyRotulos.css";

function BodyRotulos(props) {
  return (
    <div>
      <Title text="Rótulos"></Title>
      <div className="__Rotulos-text">
        <p>Nossos vinhos possuem 4 cores de rótulos diferentes:</p>
        <ul>
          <li>
            <p>
              Vermelho: Usado para os tintos finos, representam nossos vinhos
              mais tradicionais, que produzimos desde o início da vinícola.
            </p>
          </li>
          <li>
            <p>
              Bege: Usado para todos os produtos que possuem uma cor suave
              amarelada, como é o caso dos vinhos brancos e alguns espumantes.
            </p>
          </li>
          <li>
            <p>
              Rosa: Usado para todos os produtos de coloração rosada delicada,
              como é o caso dos vinhos rosé e alguns espumantes.
            </p>
          </li>
          <li>
            <p>
              Preto: O rótulo preto é reservado para nossos vinhos super
              preemium ou reserva, todos os vinhos com esse rótulo possuem
              quantidade limitada e só são envasados uma vez no ano. Passam por
              processos de maturação mais longos que os demais vinhos, sua
              produção e armazenamento também são diferenciados.
            </p>
          </li>
        </ul>
      </div>
      <Line2 lineNumber="line-40"></Line2>
      <Title text="Selos"></Title>
      <div className="__Rotulos-text">
        <div className="selos">
          <img
            src={require("../../assets/images/logo-vermelha.png")}
            alt="logo"
          ></img>
          <img
            src={require("../../assets/images/logo-preta.png")}
            alt="logo"
          ></img>
        </div>
        <div className="selos-paragrafo">
        <p>
          O selo fica no topo do vinho, por cima do lacre de cera ou de
          alúminio. O selo é um costume antigo da vinícola, a necessidade de sua
          utilização surgiu para proteger a rolha de cortiça do ataque de
          insetos e evitar a entrada de oxigênio nas garrafas. Os selos
          vermelhos são colocados nas garrafas de produção constante na vinícola
          e o selo preto (geralmente numerado) é colocado nos vinhos de produção
          limitada, como os vinhos reserva.
        </p>
        </div>
      </div>
    </div>
  );
}

export default BodyRotulos;
