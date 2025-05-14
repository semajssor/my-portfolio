import "./About.css";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/fadeInUp";

function About() {
	return (
		<section className="about-section" id="about">
			<motion.img
				src="/assets/avatar-circle.png"
				alt="Avatar"
				className="avatar"
				{...fadeInUp(0)}
			/>

			<motion.div className="about-text" {...fadeInUp(0.2)}>
				<motion.h2 {...fadeInUp(0.3)}>
					Hello! I'm James{" "}
					<motion.span
						animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
						transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
						style={{ display: "inline-block", originX: 0.7, originY: 0.7 }}>
						👋
					</motion.span>
				</motion.h2>

				<motion.p {...fadeInUp(0.4)}>
					Aspiring Full-Stack Developer with a passion for turning ideas into functional,
					user-friendly web applications. Fresh from an intensive full-stack bootcamp, I’m eager to
					contribute to impactful projects and grow in a real-world environment by collaborating,
					building, and learning from experienced professionals.
				</motion.p>

				<motion.div className="about-buttons" {...fadeInUp(0.5)}>
					<a
						href="https://jmp.sh/Z79Nt7EY"
						target="_blank"
						rel="noopener noreferrer"
						className="btn">
						📄 Download Resume
					</a>
					<a href="mailto:jamesrossmail@duck.com" className="btn">
						💼 Hire Me
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
}

export default About;
