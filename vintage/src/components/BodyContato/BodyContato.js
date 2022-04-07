import './BodyContato.css'
import { Icon } from '@iconify/react'
import Forms from '../Forms/Forms'
import Line2 from '../Line2/Line2'
import Title from '../Title/Title'

function BodyContato() {
  return (
    <div className="bodycontato">
      <div className="vinicolacontato">
        <h2>Vinícola Vintage</h2>
        <h3>
          Estrada Geral Boava/Fundo da Lamoa, <br />
          São Joaquim - SC, 88600-000
        </h3>
        <h3>(49) 99154 - 8682</h3>
        <h3 className="email">contato@vintage.com.br</h3>
      </div>
      <div className="lojacontato">
        <div className="confira">
          <h1>
            Quer saber onde comprar nosso
            <br /> vinho?
          </h1>
          <h2>Confira nossa lista de lojas parceiras:</h2>
          <Line2 lineNumber="line-50"></Line2>
        </div>
        <div className="localizacoes">
          <div className="estado">
            <div className="icon-title">
              <Icon icon="bx:map" color="#f6db8e" height="40" />
              <h1 className="nome-estado">Santa Catarina</h1>
            </div>
            <div className="lojas-estado">
              <div className="informacoes-loja">
                <h2 className="nome-loja">Casa do vinho</h2>
                <h3 className="local-loja">
                  R. Ismael Nunes, 07,
                  <br /> São Joaquim - SC,
                  <br /> 88600-000
                  <br />
                  www.casadovinho.net
                </h3>
              </div>
              <div className="informacoes-loja">
                <h2 className="nome-loja">Empório toscano</h2>
                <h3 className="local-loja">
                  R. Lauro Muller, 316 - Centro,
                  <br />
                  São Joaquim - SC,
                  <br />
                  88600-000
                </h3>
              </div>
              <div className="informacoes-loja">
                <h2 className="nome-loja">Empório Frozen</h2>
                <h3 className="local-loja">
                  R. João Pessoa, 2548 - Velha,
                  <br />
                  Blumenau - SC,
                  <br />
                  89036-003
                  <br />
                  www.emporiofrozen.com.br
                </h3>
              </div>
              <div className="informacoes-loja">
                <h2 className="nome-loja">Grappa Wine Bar</h2>
                <h3 className="local-loja">
                  R. Fernando de Souza e Silva, 1330
                  <br />
                  Itoupava Norte,
                  <br />
                  Blumenau - SC,
                  <br />
                  89052-475
                </h3>
              </div>
            </div>
          </div>
          <div className="estado">
            <div className="icon-title">
              <Icon icon="bx:map" color="#f6db8e" height="40" />
              <h1 className="nome-estado">Rio Grande do Sul</h1>
            </div>
            <div className="lojas-estado">
              <div className="informacoes-loja">
                <h2 className="nome-loja">House Wine Bebidas</h2>
                <h3 className="local-loja">
                  R. Jari, 539 - Passo d'Areia,
                  <br />
                  Porto Alegre - RS,
                  <br />
                  98802-825
                  <br />
                  www.housewine.com.br
                </h3>
              </div>
              <div className="informacoes-loja">
                <h2 className="nome-loja">Terrunyo Wine Store</h2>
                <h3 className="local-loja">
                  Av. Plínio Brasil Milano, 1085
                  <br />
                  Higienópolis,
                  <br />
                  Porto Alegre - RS,
                  <br />
                  90520-003
                </h3>
              </div>
              <div className="informacoes-loja">
                <h2 className="nome-loja">The Wine Pub</h2>
                <h3 className="local-loja">
                  R. João Petry, 45 - Centro,
                  <br />
                  Gramado - RS,
                  <br />
                  95670-000
                  <br />
                  www.thewinepub.com.br
                </h3>
              </div>
              <div className="informacoes-loja">
                <h2 className="nome-loja">Adega Cavicchioni</h2>
                <h3 className="local-loja">
                  Av. das Hortênsias, 1409 - Centro,
                  <br />
                  Gramado - RS,
                  <br />
                  95670-000
                </h3>
              </div>
            </div>
          </div>
          <div className="estado">
            <div className="icon-title">
              <Icon icon="bx:map" color="#f6db8e" height="40" />
              <h1 className="nome-estado">São Paulo</h1>
            </div>
            <div className="lojas-estado-sp">
              <div className="informacoes-loja">
                <h2 className="nome-loja">Rubi Wine Bar</h2>
                <h3 className="local-loja">
                  Alameda Jaú, 1595 - Jardins,
                  <br />
                  São Paulo - SP,
                  <br />
                  01420-002
                </h3>
              </div>
              <div className="informacoes-loja-sp">
                <h2 className="nome-loja">Ville du Vin - São Paulo</h2>
                <h3 className="local-loja">
                  R. Diogo Jacome, 361 - Moema,
                  <br />
                  São Paulo - SP,
                  <br />
                  04512-001
                  <br />
                  www.villeduvin.com.br/
                </h3>
              </div>
              <div className="informacoes-loja-sp-2">
                <h2 className="nome-loja">Bocca Nera</h2>
                <h3 className="local-loja">
                  R. Mourato Coelho, 1160 - Pinheiros,
                  <br />
                  São Paulo - SP,
                  <br />
                  05417-002
                  <br />
                  www.boccanerabar.com/reservas
                </h3>
              </div>
            </div>
          </div>
          <Line2 lineNumber="line-100"></Line2>
        </div>
      </div>
      <div className="parceria">
        <Title text="Seja uma loja parceira Vintage:"></Title>
        <Forms imagem="parceira"></Forms>
      </div>
    </div>
  )
}

export default BodyContato
