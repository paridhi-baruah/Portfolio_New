import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contents from './Content/Contents';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Navbar from './NavBar/Navbar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="App">
        <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Contents menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

        <Routes>
        {!menuOpen && <Route path="/" element={<Home />} />}
          {!menuOpen &&<Route path="/about" element={<About />} />}
          {!menuOpen &&<Route path="/projects" element={<Projects />} />}
          {!menuOpen &&<Route path="/experience" element={<Experience />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
