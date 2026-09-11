import React from 'react';
import Contact_Picture from '../../images/contact.png';
import {  IconUserCircle, IconMail, IconPhone  } from '@tabler/icons-react';
import data from '../../components/common/static.json';
import './styles.scss';


function Contact() {
    let upwork = data.socialLinks?.upwork ?? '';
    let email = data.contactInfo?.email ?? '';
    let phone = data.contactInfo?.phone ?? '';

    return (
        <div className="contact-info" id="contact">
           <div> Feel free to reach out to me via email or phone. I look forward to connecting with you! </div>
           <div className="contact-details">
                <div>
                    <img src={Contact_Picture} alt="Contact" className="contact-photo" />
                </div>
                <div className="contact-links">
                    <a href={upwork} target="_blank" rel="noreferrer" className="upwork-link" >
                        <IconUserCircle size={24} stroke={1.5} color="#000000" /> Upwork Profile
                    </a>
                    <div className="contact-email"> <IconMail size={24} stroke={1.5} color="#000000" /> {email}</div>
                    <div className="contact-phone"> <IconPhone size={24} stroke={1.5} color="#000000" /> {phone}</div>
                </div>
            </div>
        </div>
    )
}


export default Contact;