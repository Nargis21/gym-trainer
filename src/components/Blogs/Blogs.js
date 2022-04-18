import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='p-5' id='blog'>
            <div className="question1">
                <h2>Different between authorization and authentication?</h2>
                <h5>Authentication is a process to verify user.It check the user identity and confirm the user access. Then take step for authorization, it is a process of verify user access on specific applications, files, and data. Authorization works by settings which implemented and maintained by the organization.</h5>
            </div>
            <div className="question2">
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h5>Using firebase it confirm the secure sign in any platform.Firebase has email-password based authentication and also supported social authentication like Google,Facebook,Github, Twitter.
                    There are some options for authentication.bellow shows this:
                    <ul>
                        <li>Auth0</li>
                        <li>MongoDB</li>
                        <li>Okta</li>
                        <li>Passport</li>
                    </ul>
                </h5>
            </div>
            <div className="question3">
                <h2>What other services does firebase provide other than authentication?</h2>
                <h5>Firebase Provide some important services other than authentication.Bellow show this list of Services
                    <ul>
                        <li>Cloud Storage.</li>
                        <li>Cloud Firestore.</li>
                        <li>Firebase Realtime Database.</li>
                        <li>Firebase Hosting.</li>
                        <li>Google Analytics</li>
                        <li>Cloud Messaging.</li>
                    </ul>
                </h5>
            </div>
        </div>
    );
};

export default Blogs;