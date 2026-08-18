import React from "react";
import data from '../../components/common/static.json';



function Skills() {
    return(
        <div className="my-skills">
            <h2 className="skills-title">My Skills </h2>
            <div className="skills-container">
                {data.skills.length > 0 && data.skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        
                        <h3>{skill.name}</h3>
                        <ul>
                            {skill.skills.map((skills, skillIndex) => (
                                <li key={skillIndex}>{skills}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default Skills;