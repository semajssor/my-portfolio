import React from "react";
import './Navbar.css';
import WeatherWidget from "./WeatherWidget";


function Navbar() {
   return (
      <nav className="navbar">
         <div className="logo">
            James Ross
         </div>
         <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
         </ul>
         <div className="weather-widget">
            <WeatherWidget />
         </div>
      </nav>
   );
}
export default Navbar;