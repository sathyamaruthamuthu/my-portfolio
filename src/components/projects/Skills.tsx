import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import data from '../../components/common/static.json';
import type { StaticData, SkillGroup } from '../../types/static';



function Skills() {
    const staticData = data as StaticData;
    const skills = staticData.skills ?? [];

    return (
        <div className="my-skills">
            <h2 className="skills-title">My Skills </h2>
            <div className="skills-container">
                {skills.map((skill: SkillGroup, index) => {
                    const iconName = skill.icon ?? '';
                    const Icon = (TablerIcons as any)[iconName];

                    return (
                        <div className="skill-card" key={index}>
                            
                            <h3 className="skills-name"><div>{Icon && <Icon size={22} stroke={2} />}</div> <div>{skill.name}</div></h3>
                            <ul className="skills-list">
                                {skill.skills.map((skills, skillIndex) => (
                                    <li className="skill-item" key={skillIndex}>{skills}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}



export default Skills;