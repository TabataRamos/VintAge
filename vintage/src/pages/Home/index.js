import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import BodyHome from '../../components/Body/Body-Home/BodyHome'
function Home() {
  return (
    <>
      <div>
        <Header />
        <Banner imagem="home" logo="logo-visible" />
      </div>
      <div>
        <BodyHome />
      </div>
      <Footer />
    </>
  )
}

export default Home
