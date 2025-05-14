import "./Navbar.css";
import WeatherWidget from "../Weather Widget/WeatherWidget";
import ThemeToggle from "../Theme/ThemeToggle";
import brand_image_white from "../../assets/brand_image_white.svg";
import brand_image_black from "../../assets/brand_image_black.svg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useDarkMode from "../../hooks/useDarkMode";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const isDarkMode = useDarkMode();

	return (
		<nav className="navbar">
			<div className="brandImage">
				<img src={isDarkMode ? brand_image_white : brand_image_black} alt="James Ross Logo" />
			</div>

			<ul className={`nav-links ${menuOpen ? "open" : ""}`}>
				<li>
					<a href="#about" onClick={() => setMenuOpen(false)}>
						About
					</a>
				</li>
				<li>
					<a href="#projects" onClick={() => setMenuOpen(false)}>
						Projects
					</a>
				</li>
				<li>
					<a href="#contact" onClick={() => setMenuOpen(false)}>
						Contact
					</a>
				</li>
			</ul>

			<div className="right-side">
				<div className="weather-widget">
					<WeatherWidget />
				</div>

				<ThemeToggle />

				<button
					className="menu-toggle"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle menu">
					{menuOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
