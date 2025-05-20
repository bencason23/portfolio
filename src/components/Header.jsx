import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="site-header">
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={menuOpen ? 'bar rotate1' : 'bar'}></div>
          <div className={menuOpen ? 'bar fade' : 'bar'}></div>
          <div className={menuOpen ? 'bar rotate2' : 'bar'}></div>
        </div>
        <ul className={menuOpen ? 'active' : ''}>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          <li><a href="britam cv.pdf" onClick={toggleMenu}>MY RESUME</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
