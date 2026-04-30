import ProjectCard from "../components/features/ProjectCard";

const projects = [
	{
		title: "AI Shopping Assistant",
		imageSrc: "/ai_chatbot.png",
		description:
			"A Retrieval-Augmented Generation (RAG) chatbot designed specifically for Haarlemsewinkels, providing highly relevant, conversational product recommendations based on user queries and real-time inventory data.",
		technologies: ["Python", "PostgreSQL", "React", "TypeScript",],
		category: "AI",
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		title: "Elections Project",
		imageSrc: "/elections.png",
		description:
			"A full-stack web application that helps citizens make informed voting decisions by combining historical election data with modern AI capabilities. The platform offers tools for data analysis, interactive voting guidance, and community engagement around Dutch elections.",
		technologies: ["Vue.js", "TypeScript", "Java", "Springboot"],
		category: "Full-Stack",
		githubUrl: "#",
		liveUrl: "#",
	},
	{
		title: "Code Exchange",
		imageSrc: "/code_exchange.png",
		description:
			"A Stack Overflow-style platform built with HTML, CSS, and TypeScript, featuring discussion forums, user profile management, a reputation system with upvotes and downvotes, and syntax-highlighted code snippets.",
		technologies: ["HTML/CSS", "TypeScript", "MySQL"],
		category: "Web App",
		githubUrl: "#",
		liveUrl: "#",
	},
];

export default function ProjectsPage() {
	return (
		<main className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-20">
			<header className="mb-12 md:mb-14">
				<p className="mb-3 text-sm font-medium font-fira uppercase tracking-[0.22em] text-teal-300/90">Selected Work</p>
				<h1 className="mb-4 text-4xl font-fira font-semibold tracking-tight text-white md:text-5xl">
					Projects I Built End-to-End
				</h1>
				<p className="max-w-2xl text-base font-fira leading-relaxed text-slate-300 md:text-lg">
					I build full-stack web applications with a focus on product experience, robust backend logic, and maintainable code.
				</p>
			</header>

			<section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						imageSrc={project.imageSrc}
						technologies={project.technologies}
						category={project.category}
						githubUrl={project.githubUrl}
						liveUrl={project.liveUrl}
						className="max-w-none"
					/>
				))}
			</section>
		</main>
	);
}
