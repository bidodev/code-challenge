import React from "react";
import "./radio.styles.scss";

import Header from "./components/header/header.component";
import RadiosList from './components/radios-list/radios-list.component';
import Footer from './components/footer/footer.component';

const Radio = () => {
  return (
    <div className="radio">
      <Header />
      <RadiosList/>
      <Footer />
    </div>
  );
};
export default Radio;
