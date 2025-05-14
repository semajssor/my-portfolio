import { FaGithub, FaStackOverflow, FaCodepen, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<p>Designed & Built by James Ross</p>
				<div className="social-icons">
					<a
						href="https://github.com/semajssor"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub">
						<FaGithub />
					</a>
					<a
						href="https://stackoverflow.com/users/22736184/semajssor"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="StackOverflow">
						<FaStackOverflow />
					</a>
					<a
						href="https://codepen.io/semajssor/pens/public"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="CodePen">
						<FaCodepen />
					</a>
					<a
						href="https://www.linkedin.com/in/james-ross-cad"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn">
						<FaLinkedin />
					</a>
				</div>
			</div>
			<div className="copyright">
				<p>&copy; {new Date().getFullYear()} James Ross. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
