import "./VinhosReserva.css";
import { Link } from "react-router-dom";

function VinhosReserva(props) {
  return (
    <div className="__reservas">
      <Link to="/nossos-vinhos/3">
        <div className="border">
          <img src="https://i.imgur.com/0KVQDQi.png"></img>
        </div>
      </Link>
      <Link to="/nossos-vinhos/5">
        <div className="border">
          <img src="https://i.imgur.com/e8Hdbfb.png"></img>
        </div>
      </Link>
      <Link to="/nossos-vinhos/7">
        <div className="border">
          <img src="https://i.imgur.com/gUIh4qm.png"></img>
        </div>
      </Link>
    </div>
  );
}

export default VinhosReserva;
