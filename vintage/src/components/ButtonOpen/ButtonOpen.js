import "./ButtonOpen.css";
import { Icon } from "@iconify/react";

function ButtonOpen(props) {
  return (
    <div className="__ButtonOpen">
      <a>{props.icon}</a>

      <p id="button-text">{props.text}</p>
    </div>
  );
}

export default ButtonOpen;
