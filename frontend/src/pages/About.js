import React from 'react';

const About = () => (
    <div className="about-page">
        <div className="about-content">
            <h1>About Learning Lab</h1>
            <p className="about-intro">
                Learning Lab is an interactive learning platform designed to help students and developers master programming concepts through hands-on experiments and quizzes. Each topic is broken into practical exercises based on real-world problems to reinforce your understanding and coding skills.
            </p>
            <h2>Features</h2>
            <ul className="about-list">
                <li>Step-by-step coding experiments with explanations</li>
                <li>Instant quizzes for self-assessment after each experiment</li>
                <li>Code copy functionality for direct practice</li>
                <li>Clean, responsive design inspired by W3Schools</li>
                <li>Practical curriculum for HTML, CSS, JavaScript, React, Node.js, and more</li>
                <li>All data backed by MongoDB and Node.js for scalable growth</li>
            </ul>
            <h2>Who Should Use  Learning Lab?</h2>
            <ul className="about-list">
                <li>B.Tech, M.Tech, and CS engineering students</li>
                <li>Self-taught programmers wanting hands-on practice</li>
                <li>Developers brushing up on core web technologies</li>
                <li>Anyone preparing for technical interviews or coursework</li>
            </ul>
            <p className="about-mission">
                Our mission: To make coding and foundational computer science concepts accessible, approachable, and practical for everyone.
            </p>
        </div>
    </div>
);

export default About;
