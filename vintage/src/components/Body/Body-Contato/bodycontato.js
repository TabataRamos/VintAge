import { Contato } from './styles'
import { VinicolaContato } from './styles'
import { LojasContato } from './styles'
import { HeaderContatoLoja } from './styles'
import { Localizacoes } from './styles'
import { Estado } from './styles'
import { Parceria } from './styles'
import { Formulario } from '../Body-Vinicola/styles'
import { ButtonFormContato } from './styles'

function BodyContato() {
  return (
    <Contato>
      <VinicolaContato>
        <h2>Vinícola Vintage</h2>
        <h3>
          Estrada Geral Boava/Fundo da Lamoa, <br />
          São Joaquim - SC, 88600-000
        </h3>
        <h3>(49) 99154 - 8682</h3>
        <h3 className="email">contato@vintage.com.br</h3>
      </VinicolaContato>
      <LojasContato>
        <HeaderContatoLoja>
          <h1>Quer saber onde comprar nosso vinho?</h1>
          <h2>Confira nossa lista de lojas parceiras:</h2>
        </HeaderContatoLoja>
        <Localizacoes>
          <Estado>
            <h1>Santa Catarina</h1>
            <li>
              <h2>Casa do vinho</h2>
              <h3></h3>
            </li>
            <li>
              <h2>Empório toscano</h2>
              <h3></h3>
            </li>
            <li>
              <h2>Empório Frozen</h2>
              <h3></h3>
            </li>
            <li>
              <h2>Grappa Wine Bar</h2>
              <h3></h3>
            </li>
          </Estado>
          <Estado>
            <h1>Rio Grande do Sul</h1>
            <li>
              <h2>House Wine Bebidas</h2>
              <h3></h3>
            </li>
            <li>
              <h2>Terrunyo Wine Store</h2>
              <h3></h3>
            </li>
            <li>
              <h2>The Wine Pub</h2>
              <h3></h3>
            </li>
            <li>
              <h2>Adega Cavicchioni</h2>
              <h3></h3>
            </li>
          </Estado>
          <Estado>
            <h1>São Paulo</h1>
            <li>
              <h2>Rubi Wine Bar</h2>
              <h3></h3>
            </li>
            <li>
              <h2>Ville du Vin - São Paulo</h2>
              <h3></h3>
            </li>
            <li>
              <h2>Bocca Nera</h2>
              <h3></h3>
            </li>
          </Estado>
        </Localizacoes>
      </LojasContato>
      <Parceria>
        <h1>Seja uma loja parceira Vintage:</h1>
        <Formulario>
          <li>
            <input></input>
            <input></input>
            <input></input>
            <ButtonFormContato>Enviar</ButtonFormContato>
          </li>
        </Formulario>
      </Parceria>
    </Contato>
  )
}
export default BodyContato
