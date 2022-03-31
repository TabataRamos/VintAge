import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { instance } from "../../services/api";

function Vinhos() {
  const [vinhos, setVinhos] = useState([]);

  useEffect(() => {
    async function getVinhos() {
      try {
        const response = await instance.get("/vinhos/lista");
        setVinhos(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getVinhos();
  });

  return (
    <>
      <div>
        <Header />
        <Banner imagem="nossosVinhos" logo="logo-hidden" />
      </div>
      <Body></Body>
      <div>
        {vinhos.map((vinho) => {
          return (
            <div key={vinho.id}>
              <img src={vinho.link_foto} alt={vinho.Uva.nome_uva}></img>
              <h4>{vinho.Uva.nome_uva}</h4>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default Vinhos;
