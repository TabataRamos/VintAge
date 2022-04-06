import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../services/api";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import Line2 from "../../components/Line2/Line2";
import Footer from "../../components/Footer/Footer";

export default function DetalheVinho() {
  const params = useParams();
  const [vinhos, setVinho] = useState([]);

  useEffect(() => {
    async function getVinho() {
      try {
        const response = await instance.get(`/vinho/${params.id}`);
        setVinho(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getVinho();
  }, [params.id]);
  return (
    <>
      <div>
        <Header />
        <Banner imagem={`${params.id}`} logo="logo-hidden"></Banner>
        <Body></Body>
        <Line2 lineNumber="line-100" />
      </div>
      <div className="__catalogo">
        {vinhos.map((vinho) => {
          return (
            <div className="__vinho">
              <div key={vinho.id}>
                <img src={vinho.link_foto} alt={vinho.Uva.nome_uva}></img>
                <h4>Vintage {vinho.Uva.nome_uva}</h4>
                <p>{vinho.Tipo.nome_tipo}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
