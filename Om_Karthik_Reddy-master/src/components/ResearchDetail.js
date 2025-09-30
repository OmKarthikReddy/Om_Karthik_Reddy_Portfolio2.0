import React, { useState, useEffect } from 'react';
import { ChevronLeft, Github, ExternalLink, GitBranch, Loader2, AlertCircle, Calendar, Star } from 'lucide-react';

const ProjectDetail = ({ projectId, onBack, githubUsername, repositoryNames }) => {
    /*
    const [projectData, setProjectData] = useState(null);
    const [readmeContent, setReadmeContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const repoName = repositoryNames[projectId - 1];

    useEffect(() => {
        const fetchProjectDetails = async () => {
            if (!repoName) {
                setError("Repository not found.");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                // Fetch repository data
                const repoResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${repoName}`);
                if (!repoResponse.ok) {
                    throw new Error(`Failed to fetch repository data: ${repoResponse.status}`);
                }
                const repoData = await repoResponse.json();
                setProjectData(repoData);

                // Fetch README content
                const readmeResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${repoName}/readme`, {
                    headers: {
                        Accept: 'application/vnd.github.v3.html'
                    }
                });
                if (readmeResponse.ok) {
                    const readmeHtml = await readmeResponse.text();
                    setReadmeContent(readmeHtml);
                } else {
                    setReadmeContent('<p>No README found for this project.</p>');
                }

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjectDetails();
    }, [projectId, githubUsername, repoName]);

    if (loading) {
        return (
            <div className="loading-container">
                <Loader2 size={32} className="animate-spin" />
                <p>Loading project details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <AlertCircle size={32} />
                <p>Error: {error}</p>
                <button onClick={onBack} className="back-button">
                    <ChevronLeft size={16} />
                    Back to About
                </button>
            </div>
        );
    }
    */
    // New project data can be added here
    const newProjects = [
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
    ];

    const project = newProjects.find(p => p.id === projectId);


    return (
        <section className="project-detail-section">
            <div className="container">
                <button onClick={onBack} className="back-button">
                    <ChevronLeft size={16} />
                    Back to About
                </button>

                {project ? (
                    <div className="project-detail-content">
                        <h2 className="project-detail-title">{project.title}</h2>
                        <p>{project.description}</p>
                        {/* Add more details as needed */}
                    </div>
                ) : (
                    <p>Project not found.</p>
                )}
                
                {/*
                <div className="project-detail-header">
                    <h2 className="project-detail-title">{projectData.name}</h2>
                    <p className="project-detail-description">{projectData.description}</p>
                </div>

                <div className="project-detail-meta">
                    <div className="meta-item">
                        <Star size={16} />
                        <span>{projectData.stargazers_count} Stars</span>
                    </div>
                    <div className="meta-item">
                        <Calendar size={16} />
                        <span>
                            Last updated on {new Date(projectData.updated_at).toLocaleDateString()}
                        </span>
                    </div>
                </div>

                <div className="project-detail-links">
                    <a href={projectData.html_url} target="_blank" rel="noopener noreferrer" className="link-btn">
                        <Github size={16} />
                        View on GitHub
                    </a>
                    <a href={projectData.clone_url} target="_blank" rel="noopener noreferrer" className="link-btn">
                        <GitBranch size={16} />
                        Clone Repository
                    </a>
                    {projectData.homepage && (
                        <a href={projectData.homepage} target="_blank" rel="noopener noreferrer" className="link-btn">
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                </div>

                <div className="project-readme-content">
                    <h3>README.md</h3>
                    <div
                        className="readme-html"
                        dangerouslySetInnerHTML={{ __html: readmeContent }}
                    />
                </div>
                 */}
            </div>
        </section>
    );
};

export default ProjectDetail;