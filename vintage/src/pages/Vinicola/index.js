import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
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
        <BodyVinicola />
      </div>
      <Footer />
    </>
  )
}

export default Vinicola
