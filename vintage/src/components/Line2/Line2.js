import "./Line2.css";

function Line2(props) {
  return (
    <div>
      <img
        className={`${props.lineNumber}`}
        src={require("../../assets/images/Line-2.png")}
      ></img>
    </div>
  );
}

export default Line2;
