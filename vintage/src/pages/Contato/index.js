import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";

function Contato() {
  return (
    <>
      <div>
        <Header />
        <Banner imagem="contato" logo="logo-hidden" />
      </div>
      <div>
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default Contato;
