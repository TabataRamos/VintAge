import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import Line2 from "../../components/Line2/Line2";
import Sobre from "../../components/Sobre/Sobre";
import VinhosReserva from "../../components/VinhosReserva/VinhosReserva";
import Forms from "../../components/Forms/Forms";

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
      <Title text="Vinhos Reserva"></Title>
      <VinhosReserva></VinhosReserva>
      <Line2 lineNumber="line-40"></Line2>
      <Title text="Sobre"></Title>
      <Sobre></Sobre>
      <Line2 lineNumber="line-100"></Line2>
      <Title text="Assine o nosso Newsletter"></Title>
      <Forms imagem="newsletter"></Forms>
      <Footer />
    </>
  );
}

export default Home;
