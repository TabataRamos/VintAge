function BodyVinicola() {
  return (
    <div>
      <div>
        <h1>A vinícola</h1>
        <h2>
          A vinícola Vintage está localizada na região serrana de Santa
          Catarina, no <br /> município de São Joaquim.
        </h2>
      </div>
      <div>
        <src />
        <p className="vinicola-info">
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
      </div>
      <div>
        <src />
        <p className="vinicola-info">
          Nossos barris de maturação ficam em <br />
          uma construção subterrânea que se <br />
          estende desde o porão da casa da <br />
          família até próximo a estrada dos <br />
          vinhedos.
        </p>
      </div>
      <div>
        <h1></h1>
        <div>
          <src />
          <p className="visitacao-container-um">
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
          <button></button>
        </div>
      </div>
      <div className="eventos">
        <div className="eventos-header">
          <src />
          <h1>Eventos</h1>
          <h3 className="container-dois">
            Sazonalmente nós promovemos eventos de degustação e cursos para
            <br />
            amantes de vinhos e futuros produtores.
          </h3>
        </div>
        <div>
          <h2 className="eventos">Próximos eventos</h2>
          <ul>
            <li>
              <h3 className="eventos-container">
                Jantar de aniversário do município - 07 de Maio
              </h3>
              <button>Detalhes</button>
            </li>
            <li>
              <h3 className="eventos-container">
                Lançamento Vintage Reserva - 14 de Maio
              </h3>
              <button>Detalhes</button>
            </li>
            <li>
              <h3 className="eventos-container">
                Dia nacional do vinho - 03 de Julho
              </h3>
              <button>Detalhes</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="agendar">
        <h1>Agende sua visita</h1>
        <div>
          <ul>
            <li>
              <input></input>
              <input></input>
              <input></input>
              <button>Enviar</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BodyVinicola
