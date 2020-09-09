import React from "react";
import "./radios.items.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RadioItems = ({ name, image, frequency, handleClick }) => {
  return (
    <ul className="radio__list">
      <li className="radio__list__item" onClick={handleClick}>
        {name === "Radio 3" ? (
          <div clasName="radio__list__item-active" id={name}>
            <div className="radio__list__item-img">
              <img src={image} alt="name" />
            </div>
          </div>
        ) : (
          <h1>
            <span id={name}>{name}</span> <span>{frequency}</span>
          </h1>
        )}
      </li>
    </ul>
  );
};

export default RadioItems;
