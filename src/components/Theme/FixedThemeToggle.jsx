import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import "./FixedThemeToggle.css";

function FixedThemeToggle() {
	return (
		<motion.div
			className="fixed-theme-toggle"
			initial={{ opacity: 0, scale: 0.6 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.4, delay: 0.5 }}>
			<ThemeToggle />
		</motion.div>
	);
}

export default FixedThemeToggle;
