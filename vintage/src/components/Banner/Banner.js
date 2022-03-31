import "./Banner.css";

function Banner(props) {
  return (
    <section>
      <div className={`__banner ${props.imagem}`}>
        <img
          src={require("../../assets/images/VintAge.png")}
          alt="logo"
          id="logo-vintage"
          className={`${props.logo}`}
        ></img>
      </div>
    </section>
  );
}

export default Banner;
