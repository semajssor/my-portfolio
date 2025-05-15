import Navbar from "./components/Navbar/Navbar";
import ContactForm from "./components/Contact Form/ContactForm";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import FixedThemeToggle from "./components/Theme/FixedThemeToggle";

function App() {
	return (
		<div>
			<Navbar />
			<FixedThemeToggle />
			<About />
			<Projects />
			<ContactForm />
			<Footer />
		</div>
	);
}
export default App;
