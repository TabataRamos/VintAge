import {
  Vinicola,
  VinicolaHeader1,
  VinicolaHeader2,
  VinicolaInfo1,
  VinicolaInfo2,
  Visitacao,
  VisitacaoContainer,
  ButtonAgendar,
  Eventos,
  EventosHeader,
  EventosContainer,
  ButtonDetalhes,
  Agendar,
  Formulario,
  ButtonFormVinicola
} from './styles'

function BodyVinicola() {
  return (
    <Vinicola>
      <VinicolaHeader1>
        <h1>A vinícola</h1>
      </VinicolaHeader1>
      <VinicolaHeader2>
        <h2>
          A vinícola Vintage está localizada na região serrana de Santa
          Catarina, no <br /> município de São Joaquim.
        </h2>
      </VinicolaHeader2>
      <VinicolaInfo1>
        <img></img>
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
      </VinicolaInfo1>
      <VinicolaInfo2>
        <img></img>
        <p>
          Nossos barris de maturação ficam em <br />
          uma construção subterrânea que se <br />
          estende desde o porão da casa da <br />
          família até próximo a estrada dos <br />
          vinhedos.
        </p>
      </VinicolaInfo2>
      <Visitacao>
        <h1>Visitação</h1>
        <VisitacaoContainer>
          <img></img>
          <p>
            Que tal observar <br />
            um lindo por-do- <br />
            sol enquanto <br />
            aprecia um bom <br />
            vinho?
          </p>
          <p>
            Nosso salão de jantar e jardim com <br />
            vista para o vinhedo estão abertos <br />
            para visitação agendada.
          </p>
          <ButtonAgendar></ButtonAgendar>
        </VisitacaoContainer>
      </Visitacao>
      <Eventos>
        <EventosHeader>
          <img></img>
          <h1>Eventos</h1>
          <h3>
            Sazonalmente nós promovemos eventos de degustação e cursos para
            <br />
            amantes de vinhos e futuros produtores.
          </h3>
        </EventosHeader>
        <EventosContainer>
          <h2>Próximos eventos</h2>
          <ul>
            <li>
              <h3>Jantar de aniversário do município - 07 de Maio</h3>
              <ButtonDetalhes></ButtonDetalhes>
            </li>
            <li>
              <h3>Lançamento Vintage Reserva - 14 de Maio</h3>
              <ButtonDetalhes></ButtonDetalhes>
            </li>
            <li>
              <h3>Dia nacional do vinho - 03 de Julho</h3>
              <ButtonDetalhes></ButtonDetalhes>
            </li>
          </ul>
        </EventosContainer>
      </Eventos>
      <Agendar>
        <h1></h1>
        <Formulario>
          <li>
            <input></input>
            <input></input>
            <input placeholder="Opcional"></input>
            <ButtonFormVinicola>Enviar</ButtonFormVinicola>
          </li>
        </Formulario>
      </Agendar>
    </Vinicola>
  )
}

export default BodyVinicola
