import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";

function App() {
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

export default App;
