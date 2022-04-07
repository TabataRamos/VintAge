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
import { Link } from "react-router-dom";
import Filter from "../../components/Filter/Filter";
import FilterDrop from "../../components/FilterDrop/FilterDrop";

function Vinhos() {
  const [selected, setSelected] = useState("Filtrar por Tipo");
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
  }, []);

  return (
    <>
      <div>
        <Header />
        <Banner imagem="todosVinhos" logo="logo-hidden" />
      </div>
      <Body></Body>
      <Title text="Todos" />
      <div>
        <FilterDrop selected={selected} setSelected={setSelected} />
      </div>
      <Line2 lineNumber="line-100" />
      <div className="__catalogo">
        {vinhos.map((vinho) => {
          return (
            <div className="__vinho">
              <div key={vinho.id}>
                <Link to={`/vinho/${vinho.id}`}>
                  <img src={vinho.link_foto} alt={vinho.Uva.nome_uva}></img>
                  <h4>Vintage {vinho.Uva.nome_uva}</h4>
                  <p>{vinho.Tipo.nome_tipo}</p>
                </Link>
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
