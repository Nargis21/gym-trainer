import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-black text-white footer-container'>
            <div className="footer-services">
                <h4>Services</h4>
                <a href="">Online Coaching</a>
                <a href="">1-2-1 PERSONAL TRAINING</a>
                <a href="">SMALL GROUP PERSONAL TRAINING</a>
            </div>
            <div className="company">
                <h4>Company</h4>
                <a href="">Blog</a>
                <a href="">About</a>
                <a href="">Terms and Conditions</a>
                <a href="Privacy Policy"></a>
            </div>
            <div className="contact">
                <h4>Contact Us</h4>
            </div>
        </div>
    );
};

export default Footer;