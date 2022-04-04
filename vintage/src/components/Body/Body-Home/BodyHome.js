import {
  Home,
  Sobre,
  VinhosReservaContainer,
  ImagensVinhos,
  SobreContainer,
  Newsletter,
  ButtonNewsletter
} from './styles'
import { Formulario } from '../Body-Vinicola/styles'

function BodyHome() {
  return (
    <Home>
      <VinhosReservaContainer>
        <h1>Vinhos Reserva</h1>
        <ImagensVinhos>
          <img></img>
          <img></img>
          <img></img>
        </ImagensVinhos>
        <Sobre>
          <h1>Sobre</h1>
          <SobreContainer>
            <img></img>
            <p>
              Os vinhos Reserva são o mais novo <br />
              lançamento da vinícola Vintage, sua <br />
              produção é totalmente diferente dos <br />
              demais vinhos da marca.
              <br />
              Os vinhos reserva passam por um <br />
              processo de envelhecimento em <br />
              barris de carvalho e levam pelo <br />
              menos 10 anos para ficarem prontos, <br />
              por isso sua produção é limitada a <br />
              100 garrafas de cada tipo, sendo <br />
              eles tinto, branco, rosê e espumante.
              <br />
              Nossos vinhos acompanham uma <br />
              embalagem exclusiva de couro <br />
              ecológico, feita artesanalmente a <br />
              embalagem é lacrada com um selo <br />
              de cera com o brasão da família, <br />
              seguindo a tradição que surgiu a <br />
              mais de 100 anos atrás.
            </p>
          </SobreContainer>
        </Sobre>
      </VinhosReservaContainer>
      <Newsletter>
        <h1>Assine o nosso newsletter:</h1>
        <Formulario>
          <input></input>
          <input></input>
          <input></input>
          <ButtonNewsletter>Enviar</ButtonNewsletter>
        </Formulario>
      </Newsletter>
    </Home>
  )
}

export default BodyHome
