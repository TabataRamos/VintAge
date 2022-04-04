import {
  NossoVinho,
  Filtro,
  FacaTeste,
  ParagrafoDescubra,
  ButtonFTeste,
  AnatomiaVintage,
  Rotulos,
  Selos,
  SeloContainer,
  SelosImagens,
  SeloParagrafo
} from './styles'

function BodyNossoVinho() {
  return (
    <NossoVinho>
      <Filtro>
        <p>Filtrar por tipo:</p>
      </Filtro>
      <FacaTeste>
        <img></img>
        <ParagrafoDescubra>
          <p className="p1">
            Em dúvida sobre <br />
            Qual vinho <br />
            escolher?
          </p>
          <p className="p2">
            Descubra o <br />
            Vintage ideal para <br />
            você.
          </p>
        </ParagrafoDescubra>
        <ButtonFTeste>Faça o teste</ButtonFTeste>
      </FacaTeste>
      <AnatomiaVintage>
        <h1>Anatomia dos vinhos Vintage</h1>
        <Rotulos>
          <h2>Rótulos</h2>
          <li>
            <h3>Nossos vinhos possuem 4 cores de rótulos diferentes:</h3>
            <ul>
              Vermelho: Usado para os tintos finos, representam nossos vinhos
              mais <br />
              tradicionais, que produzimos desde o início da vinícola.
            </ul>
            <ul>
              Bege: Usado para todos os produtos que possuem uma cor suave{' '}
              <br />
              amarelada, como é o caso dos vinhos brancos e alguns espumantes.
            </ul>
            <ul>
              Rosa: Usado para todos os produtos de coloração rosada delicada,
              como é o caso dos vinhos rosé e alguns espumantes.
            </ul>
            <ul>
              Preto: O rótulo preto é reservado para nossos vinhos super premium
              ou <br />
              reserva, todos os vinhos com esse rótulo possuem quantidade
              limitada, <br />e só são envasados uma vez no ano. Passam por
              processos de <br />
              maturação mais longos que os demais vinhos, sua produção e <br />
              armazenamento também são diferenciados.
            </ul>
          </li>
        </Rotulos>
        <Selos>
          <h2>Selos</h2>
          <SeloContainer>
            <SelosImagens></SelosImagens>
            <SeloParagrafo>
              O selo fica na parte de cima do vinho, por cima do <br />
              lacre de cera ou no encaixe do lacre de alúminio,
              <br />É um costume antigo da vinícola, a necessidade de <br />
              sua utilização surgiu para proteger a rolha de <br />
              cortiça do ataque de insetos e evitar a entrada de <br />
              oxigênio nas garrafas.
              <br />
              Os selos vermelhos são colocados nas garrafas de <br />
              produção constante na vinícola e o selo preto <br />
              (geralmente numerado) é colocado nos vinhos de <br />
              produção limitada, como os vinhos reserva.
            </SeloParagrafo>
          </SeloContainer>
        </Selos>
      </AnatomiaVintage>
    </NossoVinho>
  )
}

export default BodyNossoVinho
