import "./Banner.css";

function Banner(props) {
  return (
    <div className={`__banner ${props.imagem}`}>
      <img
        src={require("../../assets/images/VintAge.png")}
        alt="logo"
        id="logo-vintage"
        className={`${props.logo}`}
      ></img>
    </div>
  );
}

export default Banner;
