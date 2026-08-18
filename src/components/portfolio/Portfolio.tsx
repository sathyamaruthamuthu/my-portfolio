import React from "react";
// import { Link } from "react-router-dom";
// import { AboutMeProps } from "./types";
import photo from "../../images/photo1.jpg";
import data from '../../components/common/static.json';
import './styles.scss';


const Portfolio: React.FC  = () => {
    const { portfolio, socialLinks } = data;
    const { title, description, shortdescription } = portfolio;
    const { linkedin, github, upwork } = socialLinks;

    return (
        <>
           <div className="portfolio-container">
                <section className="intro-section">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className="pf-tabs">
                        <div className="pf-tab">
                            <a href={linkedin} target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                        </div>
                        <div className="pf-tab">
                            <a href={github} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </div>
                        <div className="pf-tab">
                            <a href={upwork} target="_blank" rel="noreferrer">
                                Upwork Profile
                            </a>
                        </div>
                        <div className="pf-tab">
                            <a href="#contact" >
                                Contact
                            </a>
                        </div>
                    </div>
                </section>

                <section className="profile-card">
                    <img src={photo} alt="Profile" className="profile-photo" />
                    
                    <p className="about">
                        {shortdescription}
                    </p>
                </section>
            </div>
        </>
    );

};


export default Portfolio;



