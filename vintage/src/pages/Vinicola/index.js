import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Body from '../../components/Body/Body'
import BodyVinicola from '../../components/BodyVinicola/BodyVInicola'
import Footer from '../../components/Footer/Footer'

function Vinicola() {
  return (
    <>
      <div>
        <Header />
        <Banner imagem="vinicola" logo="logo-hidden" />
      </div>
      <div>
        <Body></Body>
      </div>
      <BodyVinicola />
      <Footer />
    </>
  )
}

export default Vinicola
