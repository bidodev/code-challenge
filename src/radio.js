import React, { useState } from "react";
import "./radio.styles.scss";
import { RadiosProvider } from "./Radios.context.js";

/**
 * building the structure of the Radio
 */

import Header from "./components/header/header.component";
import RadiosList from "./components/radios-list/radios-list.component";
import Footer from "./components/footer/footer.component";

const Radio = () => {
  const [radioStatus, setRadioStatus] = useState(false);

  const handleTurnOnOff = () => {
    //toggle radio status
    setRadioStatus(!radioStatus);
  };

  return (
    <div className="radio">
      <RadiosProvider>
        <Header handleTurnOnOff={handleTurnOnOff} />
        {radioStatus ? (
          <>
            <RadiosList />
            <Footer />
          </>
        ) : null}
      </RadiosProvider>
    </div>
  );
};
export default Radio;
