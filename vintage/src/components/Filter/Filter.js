import ButtonOpen from "../ButtonOpen/ButtonOpen";
import ButtonFull from "../ButtonFull/ButtonFull";
import Title from "../Title/Title";
import "./Filter.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Filter(props) {
  return (
    <div>
      <Title text="Filtrar por tipo:"></Title>
      <div className="filtro-tipo">
        <Link to="/nossos-vinhos/tintos">
          <ButtonOpen
            text="Tinto"
            icon={<Icon icon="bxs:wine" color="#c03818" height="24" />}
          ></ButtonOpen>
        </Link>
        <Link to="/nossos-vinhos/brancos">
          <ButtonOpen
            text="Branco"
            icon={<Icon icon="fa6-solid:wine-glass" color="#f6db8e" height="24" />}
          >
            <Icon icon="fa6-solid:wine-glass" color="#f6db8e" height="24" />
          </ButtonOpen>
        </Link>
        <Link to="/nossos-vinhos/roses">
          <ButtonOpen
            text="Rosé"
            icon={<Icon icon="mdi:glass-wine" color="#f68e8e" height="24" />}
          ></ButtonOpen>
        </Link>
        <Link to="/nossos-vinhos/espumantes">
          <ButtonOpen
            text="Espumante"
            icon={<Icon icon="mdi:glass-flute" color="#fff3d0" height="24" />}
          ></ButtonOpen>
        </Link>
      </div>
      <div className="filtro-tipo">
        <Link to="/nossos-vinhos/todos">
          <ButtonFull text="Ver Todos"></ButtonFull>
        </Link>
      </div>
    </div>
  );
}

export default Filter;
