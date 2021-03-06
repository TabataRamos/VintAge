import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import BodyContato from '../../components/Body/Body-Contato/bodycontato'
import Footer from '../../components/Footer/Footer'

function Contato() {
  return (
    <>
      <div>
        <Header />
        <Banner imagem="contato" logo="logo-hidden" />
      </div>
      <div>
        <BodyContato />
      </div>
      <Footer />
    </>
  )
}

export default Contato
