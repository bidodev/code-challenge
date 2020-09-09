import React, { useState, createContext } from "react";

const RadiosContext = createContext();

const RadiosProvider = (props) => {
  //INITIAL STATE
  const [radios, setRadios] = useState([]);

  return (
    <RadiosContext.Provider value={[radios, setRadios]}>
      {props.children}
    </RadiosContext.Provider>
  );
};

export { RadiosContext, RadiosProvider };
