import projects from "../data/projectsData";
import "./styles/Projects.css";

function Projects() {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image || "https://via.placeholder.com/300"} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description || "No description available."}</p>
                        <div className="project-links">
                            {project.deployedLink && <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                            {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;