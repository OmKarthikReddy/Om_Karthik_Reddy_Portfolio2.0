// src/components/About.js
import React, { useState, useEffect } from 'react';
import { GraduationCap, Award, MapPin, Calendar, Book, Code, Users, Target, Star, GitBranch, Github, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import profilePic from "../data/om.jpg";
import ProjectDetail from './ProjectDetail';

const About = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Configure your GitHub username and repository names
    const githubUsername = "omkarthikreddy"; // Replace with your GitHub username
    const repositoryNames = [];


    useEffect(() => {
        // Since we are not fetching from github, we can just set the projects directly.
        setProjectsData([
            {
                id: 1,
                title: "Supply Chain Network Optimization & Resilience Strategy",
                description: "Designed a cost-efficient supply chain by establishing a new distribution center, reducing inventory and transportation costs, and improving supplier diversification to boost profit margins by 15% during peak demand."
            },
            {
                id: 2,
                title: "HIL Testing for Battery Management System",
                description: "Developed test cases, performed simulation modeling and automation using Simulink and NI VeriStand, and conducted safety compliance checks to ensure robust battery control logic validation."
            },
            {
                id: 3,
                title: "Sensor Integration and Validation in Powertrain Systems",
                description: "Validated systems integrating sensors (temperature, pressure, encoder, resolver), ensuring signal accuracy and performance reliability across actuator modules under simulated test conditions."
            },
            {
                id: 4,
                title: "Lean Manufacturing & Workflow Optimization in SME",
                description: "Implemented hybrid production methodology and root cause analysis, reducing equipment downtime by 14% and enhancing layout scalability in small-to-mid-size factory operations."
            }
        ]);
        setLoading(false);
    }, []);



    const education = [
        {
            year: 'May 2024',
            title: 'Master of Science in Industrial Engineering',
            institution: 'Northeastern University, Boston, MA, USA',
            description: "Graduate Certificate in Supply Chain Management, D'Amore McKim School of Business"
        },
        {
            year: 'May 2022',
            title: 'Bachelor of Technology in Mechanical and Industrial Design',
            institution: 'Vellore Institute of Technology, Vellore, TN, India',
            description: ''
        }
    ];

    const experience = [
        {
            year: 'Jan 2022 - Jun 2022',
            title: 'Supplier Quality Engineer',
            institution: 'Mahindra and Mahindra, Assembly Plant, Zaheerabad, Hyd.',
            description: [
                'Tracked and analyzed supplier KPIs to identify quality gaps, driving improvement in supplier on-time delivery & defect rates.',
                'Applied SPC, FMEA, and Six Sigma tools to reduce recurring non-conformances, and optimize supplier processes.',
                'Created and updated control plans, inspection standards & compliance reports, aligning with internal & customer quality specifications.',
                'Led cross-functional investigations with procurement, design, and manufacturing teams to resolve NCRs and enhance supplier accountability.',
                'Analyzed component failures and production issues by conducting root cause analysis, proposing and implementing design modifications to improve product reliability.',
                'Systematized engineering change notices (ECNs) and updated the Bill of Materials (BOM) to ensure all design revisions were accurately documented and communicated.'
            ]
        },
        {
            year: 'Mar 2021- Dec 2021',
            title: 'Manufacturing & Supplier Quality Engineer',
            institution: 'Satya Surya Aluminum Industries Ltd, Hyd.',
            description: [
                "Investigated supplier issues, reducing defect rates by analyzing trends with Six Sigma, SPC, and FMEA tools.",
                "Installed proximity sensors on critical stations to prevent reverse-fit assembly errors (defect can't flow).",
                "Partnered with cross-functional teams to validate supplier data packages, perform drawing markups, and ensure documentation matched internal and customer standards."
            ]
        },
        {
            year: 'Apr 2020 - Feb 2021',
            title: 'Process Improvement & Quality Engineer',
            institution: 'ACE Laser Tubing, Bangalore, India',
            description: [
                "Facilitated process improvement teams providing Lean tools such as Pareto charts, process flow charts, A3 Reports, basic statistics, control charts, and Daily Work Management (DWM).",
                "Utilized SPC data to monitor the critical parameters and identify out of control conditions to stop and correct the machine.",
                "Significantly reduced waste and end-to-end production time by leveraging expertise with Statistical Process Control (SPC) methodology, reduced machining defect rejection by closely monitoring the WIP.",
                "Developed 3D layouts and fixture models in SolidWorks to support line upgrades and prototype evaluation, improving operator ergonomics and setup times."
            ]
        }
    ];

    const skills = [
        {
            category: 'Programming & Data Tools',
            items: ['Python', 'Power BI', 'MATLAB/Simulink', 'NI VeriStand', 'CANalyzer', 'INCA', 'MDA', 'Microsoft Office Suite (Word, Excel, PowerPoint)']
        },
        {
            category: 'Design & Modeling Software',
            items: ['SolidWorks', 'AutoCAD', 'CATIA', 'FUSION 360']
        },
        {
            category: 'Engineering Principles',
            items: ['GD&T', 'DFMEA/DFM/DFA/DFS', 'Functional Safety']
        },
        {
            category: 'Validation',
            items: ['HIL Validation', 'Controls Validation', 'PLC Validation', 'Fault Injection', 'DTC Analysis']
        },
        {
            category: 'Supply Chain & Operations',
            items: ['Inventory Management', 'Demand Forecasting', 'Procurement', 'Strategic Negotiation', 'SAP', 'MRP', 'Logistics Optimization', 'JIT', 'JIS', 'Manufacturing Automation', 'BOM', 'Production Scheduling']
        },
        {
            category: 'Visualization & Analysis',
            items: ['Tableau', 'Statistical Analysis', 'Root Cause Analysis (RCA)', 'DMAIC', 'Value Stream Mapping (VSM)']
        },
        {
            category: 'Process Improvement & Optimization',
            items: ['Lean Manufacturing', 'Six Sigma', 'Kaizen', 'TQM', '5S', 'MUDA Analysis', 'Line Balancing', 'Workflow Analysis', 'Bottleneck Identification', 'Takt Time Calculation', 'Efficiency Improvement', 'Time & Motion Study (MOST)', 'Cost Modeling', 'Should Cost Analysis']
        }
    ];

    const certifications = [
        {
            title: 'Lean Six Sigma Green Belt (CSSC, 2024)',
            organization: '',
            description: '',
            link: ''
        },
        {
            title: 'Procurement Professional Certificate (CSCMP, 2024)',
            organization: '',
            description: '',
            link: ''
        },
        {
            title: 'Product Design Engineer Mechanical (SSC/Q4201) (NASSCOM)',
            organization: '',
            description: '',
            link: ''
        },
    ];

    const interests = [
        'Green Lean Six Sigma (GLSS)',
        'Industry 4.0',
        'Sustainable Supply Chain Management (SSCM)',
        'Systematic Literature Review (SLR)',
        'Blockchain',
        'Digital Transformation'
    ];

    const publications = [
        {
            title: 'CB-DistillGrad: A Class-Balanced Knowledge Distillation Loss for Long-Tailed Visual Recognition',
            journal: 'Under Review',
            authors: 'Vemuri, S.M.; Gundrapally, A.; Kim, T.; Kim, J. (Senior Member, IEEE); Choi, K. (Senior Member, IEEE)'
        },
        {
            title: 'Hardware Accelerator Design by Using RT-Level Power Optimization Techniques on FPGA for Future AI Mobile Applications',
            journal: 'Electronics, vol. 14, no. 16, 2025',
            authors: 'Gundrapally, A.; Shah, Y.A.; Vemuri, S.M.; Choi, K.'
        }
    ];

    const getLanguageColor = (language) => {
        const colors = {
            "JavaScript": "#f1e05a",
            "Python": "#3776ab",
            "Java": "#b07219",
            "C++": "#f34b7d",
            "C": "#555555",
            "C#": "#239120",
            "PHP": "#4F5D95",
            "Ruby": "#701516",
            "Go": "#00ADD8",
            "Swift": "#fa7343",
            "Kotlin": "#F18E33",
            "Rust": "#dea584",
            "TypeScript": "#2b7489",
            "Shell": "#89e051",
            "HTML": "#e34c26",
            "CSS": "#1572B6",
            "Jupyter Notebook": "#DA5B0B",
            "CUDA": "#76B900",
            "R": "#198CE7",
            "MATLAB": "#e16737",
            "Dart": "#00B4AB",
            "Scala": "#c22d40",
            "Perl": "#0298c3",
            "Lua": "#000080",
            "Haskell": "#5e5086",
            "Clojure": "#db5855",
            "Elixir": "#6e4a7e",
            "Erlang": "#B83998",
            "F#": "#b845fc",
            "OCaml": "#3be133",
            "Vim script": "#199f4b",
            "PowerShell": "#012456",
            "Dockerfile": "#384d54",
            "Makefile": "#427819"
        };
        return colors[language] || "#6b7280";
    };

    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId);
    };

    const handleBackToAbout = () => {
        setSelectedProject(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // If a project is selected, show the project detail view
    if (selectedProject) {
        return (
            <ProjectDetail
                projectId={selectedProject}
                onBack={handleBackToAbout}
                githubUsername={githubUsername}
                repositoryNames={repositoryNames}
            />
        );
    }

    return (
        <section className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Industrial Engineer specializing in Supply Chain Management and Operations Research
                    </p>
                </div>

                <div className="about-content">
                    {/* Personal Introduction */}
                    <div className="intro-section">
                        <div className="intro-text">
                            <h3>Hello, I'm Om Karthik Reddy</h3>
                            <p>I am a recent graduate with a Master of Science in Industrial Engineering from Northeastern University and a Graduate Certificate in Supply Chain Management. I am passionate about leveraging my skills in Lean Six Sigma, data analysis, and process optimization to drive efficiency and sustainability in supply chains. My experience spans across supplier quality engineering, manufacturing, and process improvement in the automotive and industrial sectors. </p>


                            <div className="personal-info">
                                <div className="info-item">
                                    <MapPin size={16} />
                                    <span>Detroit, MI</span>
                                </div>
                            </div>
                        </div>

                        <div className="profile-image">
                            <img src={profilePic} alt="Om Karthik Reddy" />
                        </div>
                    </div>

                    {/* Education */}
                    <div className="education-section">
                        <h3 className="subsection-title">Education</h3>
                        <div className="timeline">
                            {education.map((item, index) => (
                                <div key={index} className="timeline-item education">
                                    <div className="timeline-marker">
                                        <GraduationCap size={16} />
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h4 className="timeline-title">{item.title}</h4>
                                            <span className="timeline-year">{item.year}</span>
                                        </div>
                                        <div className="timeline-institution">{item.institution}</div>
                                        <p className="timeline-description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="experience-section">
                        <h3 className="subsection-title">Professional Experience</h3>
                        <div className="timeline">
                            {experience.map((item, index) => (
                                <div key={index} className="timeline-item work">
                                    <div className="timeline-marker">
                                        <Code size={16} />
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h4 className="timeline-title">{item.title}</h4>
                                            <span className="timeline-year">{item.year}</span>
                                        </div>
                                        <div className="timeline-institution">{item.institution}</div>
                                        <ul className="timeline-description">
                                            {item.description.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="skills-section">
                        <h3 className="subsection-title">Technical Skills</h3>
                        <div className="skills-grid">
                            {skills.map((skillGroup, index) => (
                                <div key={index} className="skill-group">
                                    <h4 className="skill-category">{skillGroup.category}</h4>
                                    <div className="skill-items">
                                        {skillGroup.items.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="certifications-section">
                        <h3 className="subsection-title">Awards & Certifications</h3>
                        <div className="certifications-grid">
                            {certifications.map((certification, index) => (
                                <a
                                    key={index}
                                    href={certification.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="certification-card-link"
                                >
                                    <div className="certification-card">
                                        <Award className="certification-icon" />
                                        <div className="certification-content">
                                            <h4 className="certification-title">{certification.title}</h4>
                                            <div className="certification-org">{certification.organization}</div>
                                            <p className="certification-description">{certification.description}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Research Interests */}
                    <div className="interests-section">
                        <h3 className="subsection-title">Research Interests</h3>
                        <div className="interests-cloud">
                            {interests.map((interest, index) => (
                                <span key={index} className="interest-tag">
                                    <Target size={14} />
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="projects-section">
                        <h3 className="subsection-title">Academic Projects</h3>

                        {loading && (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <Loader2 size={24} className="animate-spin" style={{ margin: '0 auto 1rem' }} />
                                <p>Loading projects...</p>
                            </div>
                        )}

                        {error && (
                            <div style={{
                                textAlign: 'center',
                                padding: '2rem 0',
                                backgroundColor: '#fef2f2',
                                borderRadius: '8px',
                                margin: '1rem 0',
                                border: '1px solid #fecaca'
                            }}>
                                <AlertCircle size={24} style={{ color: '#ef4444', margin: '0 auto 1rem' }} />
                                <p style={{ color: '#dc2626', marginBottom: '1rem' }}>
                                    Error loading projects: {error}
                                </p>
                                <button
                                    onClick={() => {}}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        backgroundColor: '#ef4444',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Try Again
                                </button>
                            </div>
                        )}

                        {!loading && !error && (
                            <div className="projects-grid">
                                {projectsData.map((project) => (
                                    <div
                                        key={project.id}
                                        className={`project-card ${project.error ? 'error-card' : ''}`}
                                        onClick={() => !project.error && handleProjectClick(project.id)}
                                        style={project.error ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
                                    >
                                        <div className="project-content">
                                            <div className="project-header">
                                                <h4
                                                    className="project-title"
                                                    onClick={() => !project.error && handleProjectClick(project.id)}
                                                    style={project.error ? { color: '#6b7280' } : {}}
                                                >
                                                    {project.title}
                                                </h4>
                                            </div>

                                            <p className="project-description">{project.description}</p>
                                            {/*
                                            {!project.error && (
                                                <div className="project-links">
                                                    {project.cloneUrl && (
                                                        <a
                                                            href={project.cloneUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="link-btn"
                                                            onClick={(e) => e.stopPropagation()}
                                                            style={{ textDecoration: 'none' }}
                                                        >
                                                            <GitBranch size={16} />
                                                            Clone Project
                                                        </a>
                                                    )}
                                                    {project.htmlUrl && (
                                                        <a
                                                            href={project.htmlUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="link-btn"
                                                            onClick={(e) => e.stopPropagation()}
                                                            style={{ textDecoration: 'none' }}
                                                        >
                                                            <Github size={16} />
                                                            Repo
                                                        </a>
                                                    )}
                                                    {project.homepage && (
                                                        <a
                                                            href={project.homepage}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="link-btn"
                                                            onClick={(e) => e.stopPropagation()}
                                                            style={{ textDecoration: 'none' }}
                                                        >
                                                            <ExternalLink size={16} />
                                                            Demo
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                            */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {!loading && !error && projectsData.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <p>No projects found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;