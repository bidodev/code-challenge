import React from 'react'
import './footer.component.styles.scss'

function Footer({playing}) {
    return (
      <div className="footer">
        {playing? <h2>Playing: {playing} </h2> : ''}
      </div>
    );
  }

export default Footer
