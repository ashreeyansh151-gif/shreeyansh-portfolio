import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import portfolio from "../assets/images/portfolio.png";
import fifaDashboard from "../assets/images/fifa-dashboard.png";
import bhubaneswari from "../assets/images/bhubaneswari.png";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      image: portfolio,
      description:
        "A responsive portfolio website built with React, Vite and CSS showcasing my cricket journey, skills, projects and achievements.",
      tech: "React • Vite • CSS",
      live: "https://shreeyansh-portfolio-coral.vercel.app/",
      github:
        "https://github.com/ashreeyansh151-gif/shreeyansh-portfolio",
    },

    {
      title: "FIFA World Cup Data Visualization",
      image: fifaDashboard,
      description:
        "An interactive Power BI dashboard analyzing FIFA World Cup matches, goals, attendance, stadiums, tournament stages and year-wise trends.",
      tech: "Power BI • Data Visualization • Analytics",
      live:
        "https://app.powerbi.com/view?r=eyJrIjoiYjQ5YjE0ZWMtYjM3My00ZDI1LWI4ZjAtYzQyZDE2N2U3YjA5IiwidCI6Ijk0M2EwZDE1LTk4ZjktNDg0Mi1hYzQxLTc5N2QyZDAxNzA4OCIsImMiOjR9",
      github: null,
    },
    {
      title: "Maa Bhubaneswari Travels and Textile Website",
      image: bhubaneswari,
      description:
        "A responsive website for Maa Bhubaneswari Travels and Textile, showcasing their services and products.",
      tech: "HTML • CSS ",
      live: "https://maa-bhubaneswari.vercel.app/",
      github: null,
    }
  ];

  return (
    <section className="Projects" id="👨‍💻Projects">

      <h2>👨‍💻Projects</h2>

      <p className="Projects-subtitle">
        Some of the projects I have built during my learning journey.
      </p>

      <div className="Projects-container">

        {projects.map((project, index) => (
          <div className="Project-card" key={index}>

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="Project-image"
            />

            <div className="Project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="Project-buttons">

                {/* Live Project */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    &nbsp; Live Demo
                  </a>
                )}

                {/* GitHub */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    &nbsp; GitHub
                  </a>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;