import React from 'react';
import { ChevronLeft } from 'lucide-react';

// This component now receives the entire 'project' object as a prop.
// It no longer fetches data, which fixes the error.
const ProjectDetail = ({ project, onBack }) => {

    return (
        <section className="project-detail-section">
            <div className="container">
                <button onClick={onBack} className="back-button">
                    <ChevronLeft size={16} />
                    Back to About
                </button>

                {/* It checks if the project object exists before trying to display it. */}
                {project ? (
                    <div className="project-detail-content">
                        <h2 className="project-detail-title">{project.title}</h2>
                        <p className="project-detail-description">{project.description}</p>
                        
                        <div className="project-readme-content">
                            <h3>Project Overview</h3>
                            <p>
                                Further details, methodologies, and outcomes for the "{project.title}" project can be elaborated here. 
                                This may include technologies used, challenges faced, and key learnings.
                            </p>
                        </div>
                    </div>
                ) : (
                    // This message is shown if for some reason the project data isn't available.
                    <div className="error-container">
                        <p>Project details could not be loaded. Please go back and try again.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectDetail;