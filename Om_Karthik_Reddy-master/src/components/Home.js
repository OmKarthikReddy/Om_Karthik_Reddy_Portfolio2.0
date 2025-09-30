import React from 'react';
import { ChevronDown, Brain, Code, BookOpen, Users } from 'lucide-react';

const Home = () => {
    // const highlights = [
    //     {
    //         icon: <Brain className="highlight-icon" />,
    //         title: "Deep Learning Research",
    //         description: "Focus on neural network optimization and novel architectures"
    //     },
    //     {
    //         icon: <Code className="highlight-icon" />,
    //         title: "Edge AI Development",
    //         description: "Deploying AI models on resource-constrained devices"
    //     },
    //     {
    //         icon: <BookOpen className="highlight-icon" />,
    //         title: "Technical Writing",
    //         description: "Sharing insights through blog posts and research papers"
    //     },
    //     {
    //         icon: <Users className="highlight-icon" />,
    //         title: "Teaching & Mentoring",
    //         description: "TA experience in machine learning and AI courses"
    //     }
    // ];

    return (
        <section className="home-section">
            <div className="container">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Hi, I'm <span className="highlight">Om Karthik Reddy Valipireddy</span>
                        </h1>
                        <h2 className="hero-subtitle">
                           Supply Chain & Operations Researcher
                        </h2>
                        <p className="hero-description">
                            Specializing in sustainable supply chain management and operations research. I'm passionate about integrating operational excellence methodologies like Lean Six Sigma with Industry 4.0 technologies to create efficient and resilient supply chains. My research focuses on developing conceptual frameworks that bridge manufacturing-centric models with end-to-end supply chain processes.
                        </p>

                        <div className="hero-buttons">
                            {/* <button className="btn-primary">
                                View My Research
                            </button> */}
                            <a
                                href="/Resume_Om_Karthik_Q.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                View CV
                            </a>

                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="neural-network-animation">
                            <div className="node" style={{ animationDelay: '0s' }}></div>
                            <div className="node" style={{ animationDelay: '0.4s' }}></div>
                            <div className="node" style={{ animationDelay: '0.8s' }}></div>
                            <div className="node" style={{ animationDelay: '1.2s' }}></div>
                            <div className="node" style={{ animationDelay: '1.6s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <div className="highlights-section">
                <div className="container">
                    <h3 className="section-title">What I Do</h3>
                    <div className="highlights-grid">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="highlight-card">
                                {highlight.icon}
                                <h4>{highlight.title}</h4>
                                <p>{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            */}
            <div className="container">
                <div className="scroll-indicator">
                    <ChevronDown className="bounce" />
                </div>
            </div>
        </section>
    );
};

export default Home;