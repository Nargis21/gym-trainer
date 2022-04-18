import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='footer-container'>
                <div className="footer-services">
                    <h4>Services</h4>
                    <a href="#service">Online Coaching</a>
                    <a href="#service">1-2-1 PERSONAL TRAINING</a>
                    <a href="#service">SMALL GROUP PERSONAL TRAINING</a>
                </div>
                <div className="company">
                    <h4>Company</h4>
                    <a href="/blogs">Blog</a>
                    <a href="/about">About</a>
                </div>
                <div className="contact">
                    <h4>Contact Us</h4>
                    <h5 className='text-secondary'>Phone: +15590845</h5>
                </div>
            </div>
            <div className='p-5 text-center'>
                <small >Copyright@2022.All Rights reserved.</small>

            </div>
        </div>
    );
};

export default Footer;