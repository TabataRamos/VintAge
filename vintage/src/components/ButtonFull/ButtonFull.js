import "./ButtonFull.css";

function ButtonFull(props) {
  return (
    <button className="__ButtonFull">
      <p id="button-text">{props.text}</p>
    </button>
  );
}

export default ButtonFull;
