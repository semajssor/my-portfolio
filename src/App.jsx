import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ContactForm from "./components/Contact Form/ContactForm";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<About />
			<Projects />
			<ContactForm />
			<Footer />
		</div>
	);
}
export default App;
