import "./BodyVinicola.css";
import Forms from "../Forms/Forms";
import Line2 from "../Line2/Line2";
import Title from "../Title/Title";

function BodyVinicola() {
  return (
    <div>
      <div className="vinicola-inicio">
        <Title text="A Vinícola"></Title>
        <h2>
          A vinícola Vintage está localizada na região serrana de Santa Catarina, no <br />{" "}
          município de São Joaquim.
        </h2>
        <Line2 lineNumber="line-50"></Line2>
      </div>
      <div className="vinicola-info">
        <img src={require("../../assets/images/vinicola-1.png")} alt="Foto da Vinícola"></img>

        <p>
          Ao norte dos vinhedos está o casarão. A antiga casa da família foi tombada como patrimônio
          histórico do estado de Santa Catarina em 2016. Essa belíssima construção em pedra,
          pertence à família há 12 gerações e guarda memórias de nossos descendentes imigrantes
          italianos. Mais que o DNA, o amor pela vitivinicultura de nossos antepassados foi passado
          de geração em geração.
        </p>
      </div>
      <Line2 lineNumber="line-60-end"></Line2>
      <div className="vinicola-info-dois">
        <p>
          Nossos barris de maturação ficam em uma construção subterrânea que se estende desde o
          porão da casa da família até próximo a estrada dos vinhedos.
        </p>
        <img
          className="img-end"
          alt="Foto da Vinícola"
          src={require("../../assets/images/vinicola-2.png")}
        ></img>
      </div>
      <Line2 lineNumber="line-100"></Line2>
      <div className="visitacao">
        <h1>Visitação</h1>
        <div className="visitacao-container-um">
          <img src={require("../../assets/images/vinicola-3.png")} alt="Foto da Vinícola"></img>

          <div>
            <p className="container-um">
              Que tal observar um lindo por-do-sol enquanto aprecia um bom vinho?
            </p>
            <p className="container-dois">
              Nosso salão de jantar e jardim com <br />
              vista para o vinhedo estão abertos <br />
              para visitação agendada.
            </p>
            <a href="#scroll">
              <button className="button-agende">
                {" "}
                <p>Agende sua visita</p>
              </button>
            </a>
          </div>
        </div>
        <Line2 lineNumber="line-100"></Line2>
      </div>
      <div className="eventos">
        <div className="eventos-header">
          <img
            className="img-evento"
            alt="Foto da Vinícola"
            src={require("../../assets/images/vinicola-4.png")}
          ></img>
          <h1>Eventos</h1>
          <h2>
            Sazonalmente nós promovemos eventos de degustação e cursos para
            <br />
            amantes de vinhos e futuros produtores.
          </h2>
        </div>
        <div className="eventos-datas">
          <h2>Próximos eventos</h2>
          <div className="detalhes-datas">
            <h3>Jantar de aniversário do município - 07 de Maio</h3>
            <button className="button-detalhes">Em Breve</button>
          </div>
          <div className="detalhes-datas">
            <h3>Lançamento Vintage Reserva - 14 de Maio</h3>
            <button className="button-detalhes">Em Breve</button>
          </div>
          <div className="detalhes-datas">
            <h3>Dia nacional do vinho - 03 de Julho</h3>
            <button className="button-detalhes">Em Breve</button>
          </div>
          <Line2 lineNumber="line-100"></Line2>
        </div>
      </div>
      <div id="scroll" className="agendar">
        <Title text="Agende sua visita:"></Title>
        <Forms imagem="visita"></Forms>
      </div>
    </div>
  );
}

export default BodyVinicola;
