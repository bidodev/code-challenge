import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './header.component.styles.scss'

function Header() {
    return (
      <div className="header">
        <FontAwesomeIcon icon="chevron-left" />
        <h1>Stations</h1>
        <FontAwesomeIcon icon="power-off" />
      </div>
    );
}
  
export default Header;