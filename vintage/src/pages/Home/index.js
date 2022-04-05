import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <div>
        <Header />
        <Banner imagem="home" logo="logo-visible" />
      </div>
      <div>
        <Body />
      </div>

      <Footer />
    </>
  );
}

export default Home;
