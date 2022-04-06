import "./FilterDrop.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function FilterDrop({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["tintos", "brancos", "roses", "espumantes", "todos"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <Link to={`/nossos-vinhos/${option}`}>
              <div
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                {option}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterDrop;
