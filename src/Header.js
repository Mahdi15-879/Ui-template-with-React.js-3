import React from "react";

import "./styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div class="background-image"></div>
      <div className="Header__body">
        <h1>
          WELCOME!
          <br /> I AM ENRIQUE FOLD
        </h1>
        <p>
          I am a New York based developer specialized in branding and web
          design.
          <br /> Take a look at my work and if you like it I would love to hear
          from you!
        </p>
        <div>
          <a href="#" className="Header__learn">
            learn more
          </a>
          <a href="#" className="Header__touch">
            get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
