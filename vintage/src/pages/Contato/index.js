import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import BodyContato from '../../components/BodyContato/BodyContato'
import Body from '../../components/Body/Body'
import Footer from '../../components/Footer/Footer'

function Contato() {
  return (
    <div>
      <div>
        <Header />
        <Banner imagem="contato" logo="logo-hidden" />
      </div>
      <div>
        <Body></Body>
      </div>
      <BodyContato />
      <Footer />
    </div>
  )
}

export default Contato
