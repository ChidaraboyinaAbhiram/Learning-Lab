import React from 'react';

const About = () => (
    <div className="about-page" style={{ maxWidth: '800px', margin: '44px auto', padding: '30px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 12px rgba(36, 78, 104, 0.08)' }}>
        <h1 style={{ color: '#27ae60', marginBottom: '22px' }}>About Learning Lab</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
            Lab Books is an interactive learning platform designed to help students and developers master programming concepts through hands-on experiments and quizzes. Each topic is broken into practical exercises based on real-world problems to reinforce your understanding and coding skills.
        </p>
        <h2 style={{ color: '#27ae60', marginBottom: '16px' }}>Features</h2>
        <ul style={{ fontSize: '17px', marginBottom: '26px' }}>
            <li>Step-by-step coding experiments with explanations</li>
            <li>Instant quizzes for self-assessment after each experiment</li>
            <li>Code copy functionality for direct practice</li>
            <li>Clean, responsive design inspired by W3Schools</li>
            <li>Practical curriculum for HTML, CSS, JavaScript, React, Node.js, and more</li>
            <li>All data backed by MongoDB and Node.js for scalable growth</li>
        </ul>
        <h2 style={{ color: '#27ae60', marginBottom: '16px' }}>Who Should Use Lab Books?</h2>
        <ul style={{ fontSize: '17px' }}>
            <li>B.Tech, M.Tech, and CS engineering students</li>
            <li>Self-taught programmers wanting hands-on practice</li>
            <li>Developers brushing up on core web technologies</li>
            <li>Anyone preparing for technical interviews or coursework</li>
        </ul>
        <p style={{ marginTop: '28px', color: '#444', fontStyle: 'italic' }}>
            Our mission: To make coding and foundational computer science concepts accessible, approachable, and practical for everyone.
        </p>
    </div>
);

export default About;
