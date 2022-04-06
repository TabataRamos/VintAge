import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../services/api";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import Title from "../../components/Title/Title";
import Line2 from "../../components/Line2/Line2";
import Footer from "../../components/Footer/Footer";
import FilterDrop from "../../components/FilterDrop/FilterDrop";
import { Link } from "react-router-dom";

export default function DetalheVinho() {
  const [selected, setSelected] = useState("Filtrar por Tipo");
  const params = useParams();
  const [vinhos, setVinho] = useState([]);

  useEffect(() => {
    async function getVinho() {
      try {
        const response = await instance.get(`/vinhos/${params.id}`);
        setVinho(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getVinho();
  }, [params]);
  return (
    <>
      <div>
        <Header />
        <Banner imagem={`${params.id}`} logo="logo-hidden"></Banner>
        <Body></Body>
        <Title text={params.id} />
        <div>
          <FilterDrop selected={selected} setSelected={setSelected} />
        </div>
        <Line2 lineNumber="line-100" />
      </div>

      <div className="__catalogo">
        {vinhos.map((vinho) => {
          return (
            <div className="__vinho">
              <div key={vinho.id}>
                <Link to={`/nossos-vinhos/${vinho.id}`}>
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
