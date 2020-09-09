import React from "react";
import "./footer.component.styles.scss";

function Footer({ playing }) {
  return (
    <div className="footer">
      {playing ? (
        <div className="footer__isplaying">
          <span>Currently playing</span> <span> {playing} </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Footer;
