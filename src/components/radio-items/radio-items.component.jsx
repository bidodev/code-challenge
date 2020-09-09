import React from "react";
import "./radios.items.styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RadioItems = ({ name, image, frequency, handleClick, playing }) => {
    
  return (
    <ul className="radio__list">
      <li className="radio__list__item" id={name} onClick={handleClick}>
        {name === playing ? (
          <div className="radio__list__item-active" >
            <FontAwesomeIcon icon="minus" />
            <div className="radio__list__item-img">
              <img src={image} alt="name" />
            </div>
            <FontAwesomeIcon icon="plus" />
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
