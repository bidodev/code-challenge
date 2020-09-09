import React, {useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {RadiosContext} from '../../Radios.context';

import './header.component.styles.scss'

function Header({handleTurnOnOff}) {


    return (
      <div className="header">
        <FontAwesomeIcon icon="chevron-left" />
        <h1>Stations</h1>
        <FontAwesomeIcon icon="power-off" onClick={handleTurnOnOff}/>
      </div>
    );
}
  
export default Header;