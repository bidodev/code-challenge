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
  return (
    <div className="radio">
      <RadiosProvider>
        <Header />
        <RadiosList />
        <Footer />
      </RadiosProvider>
    </div>
  );
};
export default Radio;
