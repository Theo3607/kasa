import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <img src="logo-footer.png" alt="Logo Kasa" />
      </div>
      <div className="copyright">
        <p className="copyright-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
