import React from 'react';
import me from '../../images/my-bg2.png'
import './About.css'
const About = () => {
    return (
        <div className='about'>
            <img src={me} alt="" />
            <h1>Nargis Akther</h1>
            <p>I believe that nothing it impossible. </p>
            <p>Just we need to patience and determination. </p>
            <p>I Want to be a Full Stack web developer. </p>
            <p> It's not easy, but i try to be my best to get better output.</p>
        </div>
    );
};

export default About;