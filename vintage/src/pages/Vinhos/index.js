import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Catalogo from "../../components/Catalogo/Catalogo";
import { useEffect, useState } from "react";
import { instance } from "../../services/api";
import "./styles.css";
import Title from "../../components/Title/Title";
import Line2 from "../../components/Line2/Line2";
import Filter from "../../components/Filter/Filter";

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
        <Banner imagem="todosVinhos" logo="logo-hidden" />
      </div>
      <Body></Body>
      <Title text="Todos" />
      <div>
        <Filter />
      </div>
      <Line2 />
      <div className="__catalogo">
        {vinhos.map((vinho) => {
          return (
            <div className="__vinho">
              <div key={vinho.id}>
                <a href="#">
                  <img src={vinho.link_foto} alt={vinho.Uva.nome_uva}></img>
                  <h4>Vintage {vinho.Uva.nome_uva}</h4>
                  <p>{vinho.Tipo.nome_tipo}</p>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default Vinhos;
