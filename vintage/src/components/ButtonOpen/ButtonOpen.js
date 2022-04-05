import "./ButtonOpen.css";
import { Icon } from "@iconify/react";

function ButtonOpen(props) {
  return (
    <button className="__ButtonOpen">
      <a>{props.icon}</a>

      <p id="button-text">{props.text}</p>
    </button>
  );
}

export default ButtonOpen;
