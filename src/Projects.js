import React from "react";

import "./styles/Projects.css";

const images = [
  { id: "1", imageName: "Showcase-06-705x705.png" },
  { id: "2", imageName: "Showcase-05-705x705.png" },
  { id: "3", imageName: "Showcase-04-705x705.png" },
  { id: "4", imageName: "Showcase-03-705x705.png" },
  { id: "5", imageName: "Showcase-02-705x705.png" },
  { id: "6", imageName: "Showcase-01-705x705.png" },
];

const Projects = () => {
  return (
    <div className="Projects">
      <h2>
        Recent projects I have designed & developed.
        <br /> Would love to add yours too…
      </h2>

      <div className="Projects__items">
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={require(`./img/${image.imageName}`)}
              alt="Projects item"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
