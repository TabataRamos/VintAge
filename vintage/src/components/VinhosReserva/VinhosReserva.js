import "./VinhosReserva.css";
import { Link } from "react-router-dom";

function VinhosReserva(props) {
  return (
    <div className="__reservas">
      <Link to="/vinho/3">
        <div className="border">
          <img src="https://i.imgur.com/0KVQDQi.png" alt="Vinho Chardonnay"></img>
        </div>
      </Link>
      <Link to="/vinho/5">
        <div className="border">
          <img src="https://i.imgur.com/e8Hdbfb.png" alt="Vinho Cabernet Sauvignon"></img>
        </div>
      </Link>
      <Link to="/vinho/7">
        <div className="border">
          <img src="https://i.imgur.com/gUIh4qm.png" alt="Vinho Malbec"></img>
        </div>
      </Link>
    </div>
  );
}

export default VinhosReserva;
