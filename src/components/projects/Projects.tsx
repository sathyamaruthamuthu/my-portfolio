import React from "react";
import data from '../../components/common/static.json';
import './styles.scss';



function Projects() {
    return(
        <div className="my-projects">
            <h2 className="project-title">My Recent Projects </h2>
            <div className="projects-container">
                {data.projects?.length > 0 && data.projects?.map((project, index) => {
                    const imgSrc = require(`../../images/${project.image}`);
                    const resolvedSrc = imgSrc && imgSrc.default ? imgSrc.default : imgSrc;
                    return (
                        <div className="project-card" key={index}>
                            <img src={resolvedSrc} alt={project.name} className="project-image" />
                            <h3 className="project-name">{project.link ? <a href={project.link} target="_blank" rel="noreferrer">{project.name}</a> : project.name}</h3>
                            {project.subtitle && <span className="project-subtitle">{project.subtitle}</span>}
                            <p className="project-description">{project.description}</p>
                            { project.github_link && (
                                <a href={project.github_link} target="_blank" rel="noreferrer" className="btn btn-ghost">
                                    View on GitHub
                                </a>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



export default Projects;