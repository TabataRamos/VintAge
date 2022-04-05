import ButtonOpen from "../ButtonOpen/ButtonOpen";
import ButtonFull from "../ButtonFull/ButtonFull";
import Title from "../Title/Title";
import "./Filter.css";
import { Icon } from "@iconify/react";

function Filter(props) {
  return (
    <div>
      <Title text="Filtrar por tipo:"></Title>
      <div className="filtro-tipo">
        <ButtonOpen
          text="Tinto"
          icon={<Icon icon="bxs:wine" color="#c03818" height="24" />}
        ></ButtonOpen>
        <ButtonOpen
          text="Branco"
          icon={
            <Icon icon="fa6-solid:wine-glass" color="#f6db8e" height="24" />
          }
        >
          <Icon icon="fa6-solid:wine-glass" color="#f6db8e" height="24" />
        </ButtonOpen>
        <ButtonOpen
          text="Rosé"
          icon={<Icon icon="mdi:glass-wine" color="#f68e8e" height="24" />}
        ></ButtonOpen>
        <ButtonOpen
          text="Espumante"
          icon={<Icon icon="mdi:glass-flute" color="#fff3d0" height="24" />}
        ></ButtonOpen>
      </div>
      <div>
        <ButtonFull text="Ver Todos"></ButtonFull>
      </div>
    </div>
  );
}

export default Filter;
