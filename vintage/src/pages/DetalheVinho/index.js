import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../services/api";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import Line2 from "../../components/Line2/Line2";
import Footer from "../../components/Footer/Footer";
import { Icon } from "@iconify/react";

export default function DetalheVinho() {
  const params = useParams();
  const [vinhos, setVinho] = useState([]);
  const harmonizacoes = {
    1: "tabler:meat",
    2: "icon-park-outline:chicken-leg",
    3: "tabler:meat",
    4: "tabler:meat",
    5: "tabler:meat",
    7: "tabler:sausage",
    8: "bx:cheese",
    9: "bx:cheese",
    10: "mdi:pasta",
    11: "la:pepper-hot",
    12: "ion:fish-outline",
    13: "fa6-solid:shrimp",
    14: "tabler:mushroom",
    15: "tabler:mushroom",
    17: "ri:cake-3-line",
  };
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
      <div>
        {vinhos.map((vinho) => {
          return (
            <div>
              <div key={vinho.id}>
                <img src={vinho.link_foto} alt={vinho.Uva.nome_uva}></img>
                <h5>Descrição:</h5>
                <p>{vinho.descricao}</p>
                <h4>Harmonizações:</h4>
                {vinho.Pratos.map((prato) => {
                  return (
                    <>
                      <Icon
                        icon={harmonizacoes[prato.Vinhos_Pratos.prato_id]}
                        color="#f6db8e"
                        height="60"
                      />
                      <h5>{prato.nome_prato}</h5>
                    </>
                  );
                })}
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
