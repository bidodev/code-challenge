import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import API_URL from "../../shared/constants";
import RadioItems from "../radio-items/radio-items.component";

import { RadiosContext } from '../../Radios.context';

import "./radios.list.component.styles.scss";

const RadioList = () => {
  const [radios, setRadios] = useContext(RadiosContext);
  const [currently, setCurrently] = useState('');
  const [isLoading, setLoadingStatus] = useState(true);

  //componentDidMount
  useEffect(() => {
    //1. Call the API and grab the necessary data.
    //2. destructing data and update or localState with the results from the API
    axios
      .get(API_URL)
      .then(({ data }) => setRadios(data.radios))
      .catch((err) => console.log(err.message));
    
    //
    return setLoadingStatus(false)
  }, [setRadios]);

  const handleClick = (event) => {
    setCurrently(event.target.id)
  }

  return (
      <ul className="radio__list__container">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          radios.map((el) => (
            <RadioItems {...el} handleClick={handleClick} currently={currently} />
          ))
        )}
      </ul>
  );
};
export default RadioList;
