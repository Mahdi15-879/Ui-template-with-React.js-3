import React from "react";

import "./styles/SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="SocialMedia">
      <h2>Or follow me on Dribbble, Facebook or Twitter</h2>

      <div className="SocialMedia__icons">
        <span>
          <i class="fab fa-facebook-f fa-3x"></i>
        </span>
        <span>
          <i class="fab fa-dribbble fa-3x"></i>
        </span>
        <span>
          <i class="fab fa-twitter fa-3x"></i>
        </span>
      </div>
    </div>
  );
};

export default SocialMedia;
