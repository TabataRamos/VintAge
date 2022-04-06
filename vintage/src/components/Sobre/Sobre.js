import "./Sobre.css";

function ImgText(props) {
  return (
    <div className="__imgText">
      <img
        src={require("../../assets/images/Sobre.png")}
        alt="Vinho na caixa"
      ></img>
      <p>
        Os vinhos Reserva são o mais novo lançamento da vinícola Vintage, sua
        produção é totalmente diferente dos demais vinhos da marca. Os vinhos
        reserva passam por um processo de envelhecimento em barris de carvalho e
        levam pelo menos 10 anos para ficarem prontos, por isso sua produção é
        limitada a 100 garrafas de cada tipo, sendo eles tinto, branco, rosê e
        espumante. Nossos vinhos acompanham uma embalagem exclusiva de couro
        ecológico, feita artesanalmente a embalagem é lacrada com um selo de
        cera com o brasão da família, seguindo a tradição que surgiu a mais de
        100 anos atrás.
      </p>
    </div>
  );
}

export default ImgText;
