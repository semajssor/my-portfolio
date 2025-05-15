import "./ContactForm.css";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/fadeInUp";
import {
	FaUser,
	FaEnvelope,
	FaCommentDots,
	FaCheckCircle,
	FaExclamationTriangle,
} from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
	const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID); 

	return (
		<section id="contact">
			<motion.h2 {...fadeInUp(0)}>Contact Me</motion.h2>

			<motion.form onSubmit={handleSubmit} {...fadeInUp(0.2)}>
				<label htmlFor="name">
					<FaUser /> Your Name
				</label>
				<input id="name" type="text" name="name" required />

				<ValidationError prefix="Name" field="name" errors={state.errors} />

				<label htmlFor="email">
					<FaEnvelope /> Your Email
				</label>
				<input id="email" type="email" name="email" required />

				<ValidationError prefix="Email" field="email" errors={state.errors} />

				<label htmlFor="message">
					<FaCommentDots /> Your Message
				</label>
				<textarea id="message" name="message" rows="4" required />

				<ValidationError prefix="Message" field="message" errors={state.errors} />

				<button type="submit" disabled={state.submitting}>
					{state.submitting ? "Sending..." : "Send Message"}
				</button>

				{state.succeeded && (
					<motion.div
						className="success-message"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4 }}>
						<FaCheckCircle /> Message sent! I'll be in touch soon.
					</motion.div>
				)}

				{state.errors && state.errors.length > 0 && (
					<motion.div
						className="error-message"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4 }}>
						<FaExclamationTriangle /> Please fix the errors above.
					</motion.div>
				)}
			</motion.form>
		</section>
	);
};

export default Contact;
