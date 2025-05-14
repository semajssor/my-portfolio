import "./ContactForm.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/fadeInUp";
import {
	FaUser,
	FaEnvelope,
	FaCommentDots,
	FaCheckCircle,
	FaExclamationTriangle,
} from "react-icons/fa";

const Contact = () => {
	const [submitted, setSubmitted] = useState(false);
	const [sending, setSending] = useState(false);
	const [error, setError] = useState(null);

	const FormspreeApiKey = import.meta.env.VITE_FORMSPREE_API_KEY;

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSending(true);
		setError(null);

		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());

		try {
			const response = await fetch(`https://formspree.io/f/${FormspreeApiKey}`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (response.ok) {
				setSubmitted(true);
				e.target.reset();
				setTimeout(() => setSubmitted(false), 4000);
			} else {
				throw new Error(result.error || "Something went wrong");
			}
		} catch (err) {
			setError(err.message || "Something went wrong. Please try again.");
		} finally {
			setSending(false);
		}
	};

	return (
		<section id="contact">
			<motion.h2 {...fadeInUp(0)}>Contact Me</motion.h2>

			<motion.form onSubmit={handleSubmit} {...fadeInUp(0.2)}>
				<label htmlFor="name">
					<FaUser /> Your Name
				</label>
				<input type="text" id="name" name="name" required />

				<label htmlFor="email">
					<FaEnvelope /> Your Email
				</label>
				<input type="email" id="email" name="email" required />

				<label htmlFor="message">
					<FaCommentDots /> Your Message
				</label>
				<textarea id="message" name="message" rows="4" required />

				<button type="submit" disabled={sending}>
					{sending ? "Sending..." : "Send Message"}
				</button>

				{submitted && (
					<motion.div
						className="success-message"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4 }}>
						<FaCheckCircle /> Message sent! I'll be in touch soon.
					</motion.div>
				)}

				{error && (
					<motion.div
						className="error-message"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}>
						<FaExclamationTriangle /> {error}
					</motion.div>
				)}
			</motion.form>
		</section>
	);
};

export default Contact;
