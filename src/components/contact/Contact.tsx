import React from 'react';
import Contact_Picture from '../../images/contact.png';
import { EmailIcon, PhoneIcon } from '../common/Icons';
import './styles.scss';


function Contact() {
    return (
        <div className="contact-info" id="contact">
           <div> Feel free to reach out to me via email or phone. I look forward to connecting with you! </div>
           <div className="contact-details">
                <div>
                    <img src={Contact_Picture} alt="Contact" className="contact-photo" />
                </div>
                <div className="cn-info">
                    <div className="cn-icons"> <EmailIcon /> <span>sathyajeevitha@gmail.com</span></div>
                    <div className="cn-icons"> <PhoneIcon /> <span>+91 9087254694</span></div>
                </div>
            </div>
        </div>
    )
}


export default Contact;