import React from 'react';

import Navbar from './Navbar';
import Header from './Header';
import Projects from './Projects';
import Profile from './Profile';
import Clients from './Clients';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Profile />
      <Clients />
    </div>
  );
}

export default App;
