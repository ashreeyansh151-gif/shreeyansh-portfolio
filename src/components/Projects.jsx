import portfolio from "../assets/images/portfolio.png";
function Projects() {
 const Projects = [
  {
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "A responsive portfolio website built with React, Vite and CSS showcasing my cricket journey, skills, projects and achievements.",
    tech: "React • Vite • CSS",
    live: "https://shreeyansh-portfolio-coral.vercel.app/",
    github: "https://github.com/ashreeyansh151-gif/shreeyansh-portfolio",
  },
];

  return (
    <section className="Projects" id="👨‍💻 Projects">
      <h2>👨‍💻 Projects</h2>
      <p className="Projects-subtitle">
        Some of the projects I have built during my learning journey.
      </p>

      <div className="Projects-container">
        {Projects.map((Project, index) => (
          <div className="Project-card" key={index}>
           <img
  src={project.image}
  alt={project.title}
  className="project-image"
/>
            <h3>{Project.title}</h3>

            <p>{Project.description}</p>

            <span>{Project.tech}</span>

            <div className="project-buttons">
              <a href={Project.live} target="_blank" rel="noreferrer">
                🌐 Live Demo
              </a>

              <a href={Project.github} target="_blank" rel="noreferrer">
                💻 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;