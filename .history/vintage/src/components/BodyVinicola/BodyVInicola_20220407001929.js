import './BodyVinicola.css'
import Forms from '../Forms/Forms'
import Line2 from '../Line2/Line2'
import Title from '../Title/Title'

function BodyVinicola() {
  return (
    <div>
      <div className="vinicola-inicio">
        <h1>A vinícola</h1>
        <h2>
          A vinícola Vintage está localizada na região serrana de Santa
          Catarina, no <br /> município de São Joaquim.
        </h2>
        <Line2 lineNumber="line-50"></Line2>
      </div>
      <div className="vinicola-info">
        <img src={require('../../assets/images/vinicola_2.svg')}></img>
        <p>
          Ao norte dos vinhedos está o <br />
          casarão. A antiga casa da família foi <br />
          tombada como patrimônio histórico <br />
          do estado de Santa Catarina em <br />
          2016. Essa belíssima construção em <br />
          pedra, pertence à família há 12 <br />
          gerações e guarda memórias de <br />
          nossos descendentes imigrantes <br />
          italianos. Mais que o DNA, o amor <br />
          pela vitivinicultura de nossos <br />
          antepassados foi passado de <br />
          geração em geração.
        </p>
        <Line2 lineNumber="line-50-end"></Line2>
      </div>
      <div className="vinicola-info-dois">
        <src />
        <p>
          Nossos barris de maturação ficam em <br />
          uma construção subterrânea que se <br />
          estende desde o porão da casa da <br />
          família até próximo a estrada dos <br />
          vinhedos.
        </p>
      </div>
      <Line2 lineNumber="line-100"></Line2>
      <div className="visitacao">
        <h1>Visitação</h1>
        <div className="visitacao-container-um">
          <src />
          <p className="container-um">
            Que tal observar <br />
            um lindo por-do- <br />
            sol enquanto <br />
            aprecia um bom <br />
            vinho?
          </p>
          <p className="container-dois">
            Nosso salão de jantar e jardim com <br />
            vista para o vinhedo estão abertos <br />
            para visitação agendada.
          </p>
          <button className="button-agende">
            {' '}
            <p>Agende sua visita</p>
          </button>
        </div>
        <Line2 lineNumber="line-100"></Line2>
      </div>
      <div className="eventos">
        <div className="eventos-header">
          <src />
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
            <button className="button-detalhes">Detalhes</button>
          </div>
          <div className="detalhes-datas">
            <h3>Lançamento Vintage Reserva - 14 de Maio</h3>
            <button className="button-detalhes">Detalhes</button>
          </div>
          <div className="detalhes-datas">
            <h3>Dia nacional do vinho - 03 de Julho</h3>
            <button className="button-detalhes">Detalhes</button>
          </div>
          <Line2 lineNumber="line-100"></Line2>
        </div>
      </div>
      <div className="agendar">
        <Title text="Agende sua visita:"></Title>
        <Forms imagem="visita"></Forms>
      </div>
    </div>
  )
}

export default BodyVinicola
