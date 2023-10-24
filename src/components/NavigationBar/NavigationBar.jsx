// NavigationBar.js

import { useState } from "react";
import logo from "../../assets/Logo/Buckmint-logo 1.png"
import "../../styles/components/NavigationBar.scss";


const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className='logo'><img src={logo} alt="logo" className="logo" /></div>
      <div className='hamburger' onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
    </div>
  );
};

export default NavigationBar;
