import React from "react";

import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="Footer-col-left">
          <a href="https://kriesi.at/">- Enfold WordPress Theme by Kriesi</a>
        </div>

        <div className="Footer-col-right">
          <div>
            <a href="https://kriesi.at/privacy-policy">Privacy Policy</a>
          </div>

          <div className="Footer-col-right--icons">
            <div className="icon-1">
              <i class="fab fa-twitter"></i>
            </div>
            <div className="icon-2">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div className="icon-3">
              <i class="fab fa-dribbble"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
