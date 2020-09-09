import React, {useState}from "react";
import "./radio.styles.scss";

/**
 * building the structure of the Radio
 */

import Header from "./components/header/header.component";
import RadiosList from './components/radios-list/radios-list.component';
import Footer from './components/footer/footer.component';

const Radio = () => {

  const [playingNow, setPlayingNow] = useState("");

  const handleClick = (event) => {
    setPlayingNow(event.target.id);
  };

  return (
    <div className="radio">
      <Header />
      <RadiosList handleClick={handleClick}/>
      <Footer playing={playingNow}/>
    </div>
  );
};
export default Radio;
