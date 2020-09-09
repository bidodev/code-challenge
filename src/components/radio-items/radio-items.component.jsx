import React from "react";
import "./radios.items.styles.scss";

const RadioItems = ({ name, image, frequency, handleClick }) => {


  return (
    <ul className="radio__list">
      <li className="radio__list__item" onClick={handleClick}>
        <span id={name}>{name}</span> <span>{frequency}</span>
      </li>
    </ul>
  );
};

export default RadioItems;
