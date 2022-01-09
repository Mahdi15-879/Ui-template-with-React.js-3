import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import Projects from "./Projects";
import Profile from "./Profile";
import Clients from "./Clients";
import Abilities from "./Abilities";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Profile />
      <Clients />
      <Abilities />
    </div>
  );
}

export default App;
