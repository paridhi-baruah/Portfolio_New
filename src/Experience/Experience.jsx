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
                        <p>A full-stack solution was developed to streamline the brand activation process in the Brand Flow Pipeline, ensuring smooth integration of platform insights for campaign analysis. The Campaign Reporting Dashboard was improved to present platform performance data clearly and to track influencer onboarding, with added support for file uploads to simplify data management. YouTube Data and Analytics API was integrated to fetch and display influencer profiles and YouTube analytics, providing an easy way to visualize important data for campaigns.</p>
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
