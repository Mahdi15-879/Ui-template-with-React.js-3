import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Projects from "./Projects";
import Profile from "./Profile";
import Clients from "./Clients";
import Abilities from "./Abilities";
import Touch from "./Touch";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Profile />
      <Clients />
      <Abilities />
      <Touch />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
