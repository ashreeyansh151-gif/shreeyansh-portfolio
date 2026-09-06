import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import portfolio from "../assets/images/portfolio.png";
import First_visualization from "../assets/images/First_visualization.png";

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
    {
      title: "First Visualization",
      image: First_visualization,
      description:
        "A simple data visualization project built with D3.js to represent cricket statistics.",
      tech: "Power BI",
      live: "https://app.powerbi.com/links/VSfNUBjSZz?ctid=e14e73eb-5251-4388-8d67-8f9f2e2d5a46&pbi_source=linkShare",
    
    }
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
              src={Project.image}
              alt={Project.title}
              className="Project-image"
            />

            <h3>{Project.title}</h3>

            <p>{Project.description}</p>

            <span>{Project.tech}</span>

          <div className="Project-buttons">

<a href={Project.live} target="_blank" rel="noreferrer">
<FaExternalLinkAlt /> Live Demo
</a>

<a href={Project.github} target="_blank" rel="noreferrer">
<FaGithub /> GitHub
</a>

</div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Projects;