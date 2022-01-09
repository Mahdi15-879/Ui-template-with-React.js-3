import React from "react";

import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div className="Navbar__logo">
          <img
            src={require("./img/logo_onepage_portfolio_text2.png")}
            alt="Navbar Logo"
          />
        </div>

        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#" className="Last-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
