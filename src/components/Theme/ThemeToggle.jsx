import { useState, useEffect } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {
	const [darkMode, setDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme ? savedTheme === "dark" : true; // Default to dark
	});

	useEffect(() => {
		const root = document.documentElement;
		root.classList.add("dark");
		if (darkMode) {
			root.classList.add("dark");
			root.classList.remove("light");
			localStorage.setItem("theme", "dark");
		} else {
			root.classList.add("light");
			root.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [darkMode]);

	return (
		<div className="theme-toggle">
			<input
				type="checkbox"
				id="theme-switch"
				checked={darkMode}
				onChange={() => setDarkMode(!darkMode)}
			/>
			<label htmlFor="theme-switch" aria-label="Toggle dark/light mode">
				<span className="icon">{darkMode ? "🌙" : "☀️"}</span>
			</label>
		</div>
	);
}

export default ThemeToggle;
