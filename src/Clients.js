import React from "react";

import Slider from "./Slider";

import "./styles/Clients.css";

const Clients = () => {
  return (
    <div className="Clients">
      <div class="Clients__background-image"></div>
      <h2>What my clients say about me and my work</h2>
      <Slider />
      <div className="Clients-logos">
        <div>
          <img src={require("./img/dribbble.png")} alt="Clients Logo" />
        </div>
        <div>
          <img src={require("./img/enfold.png")} alt="Clients Logo" />
        </div>
        <div>
          <img src={require("./img/jquery.png")} alt="Clients Logo" />
        </div>
        <div>
          <img src={require("./img/microlancer.png")} alt="Clients Logo" />
        </div>
        <div>
          <img src={require("./img/wordpress.png")} alt="Clients Logo" />
        </div>
        <div>
          <img src={require("./img/wpml.png")} alt="Clients Logo" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
