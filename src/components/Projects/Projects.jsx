import "./Projects.css";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/fadeInUp";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import { SiVite, SiMongodb, SiPostgresql, SiExpress } from "react-icons/si";
import ClarifaiIcon from "../icons/ClarifaiIcon";

const techIcons = {
	react: <FaReact title="React" />,
	vite: <SiVite title="Vite" />,
	node: <FaNodeJs title="Node.js" />,
	mongodb: <SiMongodb title="MongoDB" />,
	postgresql: <SiPostgresql title="PostgreSQL" />,
	express: <SiExpress title="Express" />,
	css: <FaCss3Alt title="CSS3" />,
	html: <FaHtml5 title="html" />,
	javascript: <FaJsSquare title="JavaScript" />,
	clarifai: <ClarifaiIcon title="Clarifai" />,
};

//To change recordings (.mov) to .gif, I firstly used the HandBrake app to convert in .mp4 and then used ezgif.com to convert it to .gif

const projects = [
	{
		title: "Face Recognition App",
		description:
			"Face Recognition Brain is a full-stack web application that leverages Clarifai’s AI API to detect faces in images. Built with a Vite-powered React frontend and a Node.js backend, it allows users to upload image URLs and receive real-time face detection results.",
		image: "/assets/projects-images/smart_brain.png",
		gif: "/assets/projects-videos/smart_brain.gif",
		tech: ["react", "vite", "node", "postgresql", "express", "css", "clarifai"],
		link: "https://github.com/semajssor/face_recognition_brain",
	},
	{
		title: "Thorn & Slate",
		description:
			"Thorn & Slate is a modern, responsive e-commerce website project built with React. It showcases a clean, minimal product catalog, smooth animations, and an intuitive shopping experience — perfect as a portfolio piece for demonstrating front-end skills and design sense.",
		image: "/assets/projects-images/thorn+slate.png",
		gif: "/assets/projects-videos/thorn+slate.gif",
		tech: ["react", "vite", "firebase", "scss"],
		link: "https://github.com/semajssor/thorn-slate",
	},
	{
		title: "Rock Paper Scissors Lizard Spock",
		description:
			"A fun and responsive Rock-Paper-Scissors-Lizard-Spock game built with modern JavaScript. Features dynamic gameplay logic, interactive UI, and a clean, mobile-friendly design.",
		image: "/assets/projects-images/R-P-S-L-S.png",
		gif: "/assets/projects-videos/R-P-S-L-S.gif",
		tech: ["html", "css", "javascript"],
		link: "https://github.com/semajssor/rock-paper-scissors-lizard-spock",
	},
	{
		title: "Robofriends",
		description:
			"A modernized version of the classic “Robot Friends” app, now built with React and powered by Vite for faster development and improved performance.",
		image: "/assets/projects-images/robofriends.png",
		gif: "/assets/projects-videos/robofriends.gif",
		tech: ["react", "vite", "javascript", "css", "html"],
		link: "https://github.com/semajssor/robofriends_vite",
	},
	{
		title: "Random Password Generator",
		description:
			"A simple and effective password generator that creates strong, random passwords based on user-defined criteria. Built with JavaScript, HTML, and CSS.",
		image: "/assets/projects-images/password_generator.png",
		gif: "/assets/projects-videos/password_generator.gif",
		tech: ["html", "css", "javascript"],
		link: "https://github.com/semajssor/password_generator",
	},
	// Add more projects here...
];

function Projects() {
	return (
		<section id="projects" className="projects-section">
			<motion.h2 {...fadeInUp(0)}>Projects</motion.h2>

			<div className="projects-grid">
				{projects.map((project, index) => (
					<motion.div className="project-card" key={index} {...fadeInUp(index * 0.2)}>
						<div className="media-wrapper">
							<img
								src={project.image}
								alt={project.title}
								className="project-image"
								loading="lazy"
							/>
							{project.gif && (
								<img
									src={project.gif}
									alt={`${project.title} preview`}
									className="project-video"
									loading="lazy"
								/>
							)}
						</div>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<div className="tech-icons">
							{project.tech?.map((tech, index) => (
								<span key={index} className="tech-icon">
									{techIcons[tech]}
								</span>
							))}
						</div>
						<a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
							View Project
						</a>
					</motion.div>
				))}
			</div>
		</section>
	);
}

export default Projects;
