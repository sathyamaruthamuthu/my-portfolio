import React from "react";
import data from '../../components/common/static.json';
import './styles.scss';



function Projects() {
    return(
        <div className="my-projects">
            <h2 className="project-title">My Recent Projects </h2>
            <div className="projects-container">
                {data.projects.length > 0 && data.projects.map((project, index) => {
                    const imgSrc = require(`../../images/${project.image}`);
                    const resolvedSrc = imgSrc && imgSrc.default ? imgSrc.default : imgSrc;
                    return (
                        <div className="project-card" key={index}>
                            <img src={resolvedSrc} alt={project.name} className="project-image" />
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



export default Projects;