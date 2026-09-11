import React from "react";
import photo from "../../images/photo1.jpg";
import data from '../common/static.json';
import type { StaticData, PortfolioInfo, SocialLinks } from '../../types/static';
import { IconBrandLinkedin, IconBrandGithub, IconDownload, IconMail } from '@tabler/icons-react';
import './styles.scss';


const Portfolio: React.FC  = () => {
    const typedData = data as StaticData;
    const portfolio: PortfolioInfo = typedData.portfolio ?? ({} as PortfolioInfo);
    const socialLinks: SocialLinks = typedData.socialLinks ?? ({} as SocialLinks);

    const { title = '', description = '', subtitle = '', location = '', availability = '' } = portfolio;
    const { linkedin = "", github = "" } = socialLinks;


    return (
        <>
           <div className="portfolio-container">
                <section className="intro-section">
                    <h1 className="pf-title">{title}</h1>
                    <span>{subtitle}</span>
                    <p>{description}</p>
                    <div className="pf-tabs">
                        <a href="/Sathya_M.pdf" download className="btn btn-primary">
                            <IconDownload size={16} /> Download Resume
                        </a>
                        <a href={linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
                            <IconBrandLinkedin size={16} /> LinkedIn
                        </a>
                        <a href={github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                            <IconBrandGithub size={16} /> GitHub
                        </a>
                        <a href="#contact" className="btn btn-ghost">
                            <IconMail size={16} /> Contact
                        </a>
                    </div>
                </section>
                <section className="profile-card">
                    <div className="profile-photo-container">
                        <img src={photo} alt="Sathya Maruthamuthu" className="profile-photo" />
                    </div>
                    <div className="status-block">
                        <div className="location">{location}</div>
                        <div className="availability">
                            <span className="status-dot"></span>{availability}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};


export default Portfolio;



