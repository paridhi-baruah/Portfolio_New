import React,{useState,useEffect}from 'react';
import './Projects.css';
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import node  from '../assets/node.png';
import python from '../assets/python.jpeg';

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
            <div className={`project-title ${expanded ? "expanded" : ""}`}>Projects<span style={{ color: '#7bebd1', paddingLeft: '0.3vw' }}>.</span></div>
            <div className={`project-h-line ${expanded ? "expanded" : ""}`}></div>
            </div>
            <div className={`project-content ${showProjects ? "show" : ""}`}>
                <div className="pro-textbox">
                    <div className="pro-container">
                        <h2>Konnect</h2>
                        <p>Konnect is a dynamic social media application designed to connect users through engaging interactions. Built with React, Node.js, MongoDB, and GenAI, this application allows users to explore curated timelines, interact through likes and follows, and enjoy AI-generated captions, making every interaction more personalized and engaging.</p>
                        <div className="bottom-sect">
                            <div className="techstack">
                                <span>Key Technologies:</span>
                                <img src={react} alt="" />
                                <img src={node} alt="" />
                            </div>
                            <a href="https://github.com/paridhi-baruah/Konnect" target="_blank" style={{fontStyle:'oblique'}}>Github link</a>
                        </div>
                    </div>
                </div> 
                <div className="pro-textbox">
                    <div className="pro-container">
                        <h2>Echo App</h2>
                        <p>Echo is a powerful web application that enables users to convert video files or YouTube videos to audio files and share them on a platform that supports timestamped commenting. It is built using Node.js, Express.js, React.js, Redux, Prisma ORM, and PostgreSQL. Echo provides user authorization and authentication, ensuring a secure and personalized experience for its users.</p>
                        <div className="bottom-sect">
                            <div className="techstack">
                                <span>Key Technologies:</span>
                                <img src={react} alt="" />
                                <img src={node} alt="" />
                            </div>
                            <a href="https://github.com/paridhi-baruah/Social-Media-Application" target="_blank" style={{fontStyle:'oblique'}}>Github link</a>
                        </div>
                    </div>
                </div> 
                <div className="pro-textbox">
                    <div className="pro-container">
                        <h2>Cepstrum Website</h2>
                        <p>This portal, created for the Student Body of the EEE Department, serves as a dedicated platform for sharing and accessing valuable insights and experiences from students. The frontend, developed using HTML and CSS features a user-friendly interface that facilitates the contribution and browsing of internship experiences. The Initiatives section provides a space for users to explore shared insights and learn about various internship and placement processes.</p>
                        <div className="bottom-sect">
                        <div className="techstack">
                                <span>Key Technologies:</span>
                                <img src={html} alt="" />
                                <img src={css} alt="" />
                            </div>
                            <a href="https://github.com/IITG-Cepstrum/Cepstrum-website" style={{fontStyle:'oblique'}} target='_blank'>Github link</a>
                        </div>
                    </div>
                </div> 
                <div className="pro-textbox">
                    <div className="pro-container">
                        <h2> H1N1 and Seasonal Vaccines Prediction</h2>
                        <p>A predictive model was built to analyze how likely people are to get the H1N1 and seasonal flu vaccines, based on their medical history and views on vaccine risks. Various machine learning methods were used, such as Logistic Regression, Decision Trees, and Random Forest, with the Random Forest model achieving 83% accuracy. This analysis offers insights into vaccination patterns, helping to better understand what factors influence vaccine uptake.</p>
                        <div className="bottom-sect">
                        <div className="techstack">
                                <span>Key Technologies:</span>
                                <img src={python} alt="" />
                            </div>
                            <a href="https://github.com/paridhi-baruah/Yhills" style={{fontStyle:'oblique'}} target='_blank'>Github link</a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Projects;
