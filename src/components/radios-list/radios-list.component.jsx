import React, { useEffect, useState} from "react";
import axios from "axios";
import API_URL from "../../shared/constants";
import RadioItems from "../radio-items/radio-items.component";

const RadioList = ({handleClick}) => {
  //localState
  const [radios, setRadios] = useState([]);

  //componentDidMount
  useEffect(() => {
    //destructing data and update or localState with the results from the API
    axios.get(API_URL).then(({ data }) => setRadios(data.radios));
  }, []);

  return (
    <ul>
      {radios.map((el) => (
        <RadioItems {...el} handleClick={handleClick} />
      ))}
    </ul>
  );
};
export default RadioList;
