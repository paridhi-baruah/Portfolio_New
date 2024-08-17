import React,{useState,useEffect}from 'react';
import '../Projects/Projects.css';
import './Experience.css'
import react from '../assets/react.png';
import node from '../assets/node.png';
import flynt from '../assets/flynt.png';

const Projects = () => {
    const [expanded, setExpanded] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    useEffect(() => {
        setExpanded(true);
        setTimeout(() => {
            setShowProjects(true);
        }, 900);
    }, []);
    return (
        <div className="projects">
            <div className="project-header">
            <div className={`project-title ${expanded ? "expanded" : ""}`}>Experience<span style={{ color: '#7bebd1', paddingLeft: '0.3vw' }}>.</span></div>
            <div className={`project-h-line ${expanded ? "expanded" : ""}`}></div>
            </div>
            <div className={`project-content ${showProjects ? "show" : ""}`}>
                <div className="pro-textbox">
                    <div className="pro-container">
                        <div className="exp-header">
                            <img src={flynt} alt="" />
                            <h2>Flynt.Social </h2>
                        </div>
                        <p>Engineered and maintained full-stack solutions within the brand flow pipeline to optimize brand activation processes and seamlessly integrate platform insights for enhanced campaign analytics. Implemented schema enhancements to track influencer onboarding, utilizing uploaded files for improved data management. Additionally, executed comprehensive testing and integrated the YouTube API, ensuring optimal performance and adherence to platform compliance standards.</p>
                        <div className="bottom-sect">
                            <div>
                                <span>Role:</span> Software Engineering Intern
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Projects;
