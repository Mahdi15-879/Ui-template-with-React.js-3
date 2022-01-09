import React from "react";

import "./styles/Abilities.css";

const Abilities = () => {
  return (
    <div className="Abilities">
      <h2>Here is a list of things I can do for you</h2>

      <div className="Abilities-item">
        <div className="Ability">
          <span>
            <i class="fas fa-paint-brush fa-2x"></i>
          </span>

          <h3>WEB DESIGN</h3>

          <p>
            Cras dapibus. Vivamus elem nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, port.
          </p>
        </div>

        <div className="Ability">
          <span>
            <i class="fas fa-tools fa-2x"></i>
          </span>

          <h3>WEB DEVELOPMENT</h3>

          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nut massa quis enim
          </p>
        </div>

        <div className="Ability">
          <span>
            <i class="far fa-life-ring fa-2x"></i>
          </span>

          <h3>24/7 SUPPORT</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene
            ligula eget dolor.
          </p>
        </div>

        <div className="Ability">
          <span>
            <i class="fas fa-search fa-2x"></i>
          </span>

          <h3>SEO CONSULTING</h3>

          <p>
            Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit.
          </p>
        </div>

        <div className="Ability">
          <span>
            <i class="fab fa-facebook-f fa-2x"></i>
          </span>

          <h3>SOCIAL MEDIA</h3>

          <p>
            Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
            eleifend tellus. Aeneart.
          </p>
        </div>

        <div className="Ability">
          <span>
            <i class="fas fa-shopping-cart fa-2x"></i>
          </span>

          <h3>E-COMMERCE</h3>

          <p>
            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Cras dapibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
