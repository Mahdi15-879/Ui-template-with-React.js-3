import React from "react";

import "./styles/Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <h2>
        Recent projects I have designed & developed.
        <br /> Would love to add yours too…
      </h2>

      <div className="Projects__items">
        <div className="Projects__row-1">
          <div>
            <img
              src={require("./img/Showcase-06-705x705.png")}
              alt="Projects item"
            />
          </div>
          <div>
            <img
              src={require("./img/Showcase-05-705x705.png")}
              alt="Projects item"
            />
          </div>
          <div>
            <img
              src={require("./img/Showcase-04-705x705.png")}
              alt="Projects item"
            />
          </div>
        </div>
        <div className="Projects__row-2">
          <div>
            <img
              src={require("./img/Showcase-03-705x705.png")}
              alt="Projects item"
            />
          </div>
          <div>
            <img
              src={require("./img/Showcase-02-705x705.png")}
              alt="Projects item"
            />
          </div>
          <div>
            <img
              src={require("./img/Showcase-01-705x705.png")}
              alt="Projects item"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
