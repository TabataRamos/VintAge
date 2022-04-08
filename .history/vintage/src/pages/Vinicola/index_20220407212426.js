import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Body from '../../components/Body/Body'
import BodyVInicola from '../../components/BodyVinicola/BodyVinicola'
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
      <BodyVInicola />
      <Footer />
    </>
  )
}

export default Vinicola
