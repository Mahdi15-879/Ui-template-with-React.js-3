import React from "react";

import "./styles/Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="Profile__photo">
        <img src={require("./img/desat-boy-m4.jpg")} alt="Profile" />
      </div>
      <h2>
        This is me. Designer by day & developer by night.
        <br /> I never sleep… almost.
      </h2>
      <p className="Profile__paragraph">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean
        <br /> massa. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec
        <br /> quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enim.
      </p>
      <div className="Profile__projects-num">
        <span>
          <h3>112</h3>
          <p>successful projects</p>
        </span>
        <span>
          <h3>3265</h3>
          <p>days of experience</p>
        </span>
        <span>
          <h3>47</h3>
          <p>happy clients</p>
        </span>
      </div>
    </div>
  );
};

export default Profile;
