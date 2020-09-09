import React, { useState } from "react";
import "./radios.items.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RadioItems = ({ name, image, frequency, handleClick, currently }) => {
  return (
    <li className="radio__list__item" id={name} onClick={handleClick}>
      {name === currently ? (
        <div className="radio__list__item-active">
          <FontAwesomeIcon icon="minus" />
          <div className="radio__list__item-img">
            <img src={image} alt="name" />
          </div>
          <FontAwesomeIcon icon="plus" />
        </div>
      ) : (
        <h1>
          <span>{name}</span> <span>{frequency}</span>
        </h1>
      )}
    </li>
  );
};

export default RadioItems;

// {
// ) : (
