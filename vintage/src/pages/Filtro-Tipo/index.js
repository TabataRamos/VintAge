import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../../services/api";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Body from "../../components/Body/Body";
import Line2 from "../../components/Line2/Line2";
import Footer from "../../components/Footer/Footer";
import FilterDrop from "../../components/FilterDrop/FilterDrop";
import Title from "../../components/Title/Title";

export default function FiltroTipo() {
  const [selected, setSelected] = useState("Filtrar por Tipo");

  const params = useParams();
  const [vinhos, setVinho] = useState([]);

  useEffect(() => {
    async function getVinho() {
      try {
        const response = await instance.get(`/vinhos/${params.tipo}`);
        setVinho(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getVinho();
  }, [params.tipo]);
  return (
    <>
      <div>
        <Header />
        <Banner imagem={params.tipo} logo="logo-hidden"></Banner>
      </div>
      <Body></Body>
      <div>
        <Title text={params.tipo}></Title>
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
