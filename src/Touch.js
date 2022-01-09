import React from "react";

import "./styles/Touch.css";

const Touch = () => {
  return (
    <div className="Touch">
      <div class="Touch__background-image"></div>
      <h2>
        Do you like my work? Want to get in touch? Use
        <br /> the form below!
      </h2>

      <form>
        <div>
          <input type="text" placeholder="Name*" />
          <input type="email" placeholder="Email*" />
        </div>
        <textarea placeholder="Message*" />
        <a href="#">Submit</a>
      </form>
    </div>
  );
};

export default Touch;
