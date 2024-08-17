import React, { useEffect, useState, useRef } from 'react';
import './About.css';
import { ReactTyped as Typed } from 'react-typed';
import strokes2 from '../assets/strokes2.png';
import SkillsChart from '../SkillsChart';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import c from '../assets/c.png';
import cpp from '../assets/c++.png';
import node from '../assets/node.png';
import cepstrum from '../assets/cepstrum.jpg';
import ec from '../assets/ec.png';
import techniche from '../assets/techniche.jpg';
import election from '../assets/election.png'
import resume from '../assets/Resume.pdf';
const About = () => {
    const [expanded, setExpanded] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [skillsInView, setSkillsInView] = useState(false);
    const [teamsInView, setTeamsInView] = useState(false);

    const skillsRef = useRef(null);
    const teamsRef = useRef(null);

    useEffect(() => {
        setExpanded(true);
        setTimeout(() => {
            setShowAbout(true);
        }, 900);

        const handleScroll = () => {
            if (skillsRef.current) {
                const skillsTop = skillsRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (skillsTop < windowHeight - 100) { // Adjust as needed
                    setSkillsInView(true);
                }
            }

            if (teamsRef.current) {
                const teamsTop = teamsRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (teamsTop < windowHeight - 100) { // Adjust as needed
                    setTeamsInView(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTeamsInView(true);
                } else {
                    setTeamsInView(false);
                }
            },
            { threshold: 0.1 }
        );

        if (teamsRef.current) {
            observer.observe(teamsRef.current);
        }

        return () => {
            if (teamsRef.current) {
                observer.unobserve(teamsRef.current);
            }
        };
    }, []);

    return (
        <div className="about-content">
            <div className="about">
                <div className={`about-title ${expanded ? "expanded" : ""}`}>About Me<span style={{ color: '#7bebd1', paddingLeft: '0.3vw' }}>.</span></div>
                <div className={`about-h-line ${expanded ? "expanded" : ""}`}></div>
                <div className={`about-descp ${showAbout ? "show" : ""}`}>
                    <div>
                        <p  className="about-myself">
                            Hi, I'm <span style={{ color: '#09221ccb', fontWeight: 700 }}>Paridhi </span>and I'm a&nbsp;
                            <Typed
                                strings={['Developer', 'Designer']}
                                typeSpeed={150}
                                backSpeed={100}
                                loop
                                style={{ color: '#09221ccb', fontWeight: 700 }}
                            />
                            <br />
                            <p className='about-me'>I'm a BTech student at IIT Guwahati, specializing in Electronics and Communication Engineering. As a <span style={{ color: '#09221ccb', fontWeight: 700 }}>developer</span> and <span style={{ color: '#09221ccb', fontWeight: 700 }}>designer</span>, I blend creativity with technical expertise, focusing on accessibility, performance, and usability. Explore how I turn innovative ideas into impactful solutions!</p>
                        </p>
                    </div>
                </div>
                <div className={`resume-button ${showAbout ? "show" : ""}`}>
                    <img src={strokes2} alt="" />
                    <a href={resume} download>
                        <button>Download Resume</button>
                    </a>
                </div>
            </div>
            <div className="skills" ref={skillsRef}>
                <SkillsChart />
                <div className="skills-descp">
                    <img src={strokes2} className='stokes' alt="" />
                    <div className="skills-title">Skills<span style={{ color: '#7bebd1', paddingLeft: '0.3vw' }}>.</span></div>
                    <div className={`about-h-line ${expanded ? "expanded" : ""}`}></div>
                    <p className='about-me'>I thrive on transforming ideas into reality through code, blending creativity with technical precision.</p>
                    <div className={`skills-icons ${skillsInView ? "translate" : ""}`}>
                        <img src={cpp} alt="" />
                        <img src={c} alt="" />
                        <img src={react} alt="" />
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={node} alt="" />
                    </div>
                </div>
            </div>
            <div className={`teams ${teamsInView ? "animate" : ""}`} ref={teamsRef}>
                <div>
                    <div className="teams-title">Teams<span style={{ color: '#7bebd1', paddingLeft: '0.3vw' }}>.</span></div>
                    <div className={`about-h-line ${expanded ? "expanded" : ""}`}></div>
                </div>
                <div className={`teams-content ${teamsInView ? "animate-line" : ""}`}>
                    <div className="container left-cont">
                        <div className="text-box">
                            <img src={techniche} className='team-logo' alt="" />
                            <div className='circle'></div>
                            <h2>Media Core Team, Techniche 2023</h2>
                            <small>2022-2023</small>
                            <p>I was responsible for securing media partnerships and engaging influencers to enhance Techniche's visibility and outreach. My efforts contributed to a broader promotion strategy, ensuring greater media coverage and audience engagement.</p>
                            <span className='left-arrow'></span>
                        </div>
                    </div>
                    <div className="container right-cont">
                        <div className="text-box">
                            <img src={cepstrum} className='team-logo' alt="" />
                            <div className='circle-right'></div>
                            <h2>Design Head, Cepstrum</h2>
                            <small>2023-2024</small>
                            <p> I was responsible for maintaining event visuals through posters, creating official merchandise for the EEE department, and contributing to the development of the annual magazine, Inphase. Additionally, I played an integral role in organizing and ensuring the smooth execution of events.</p>
                            <span className='right-arrow'></span>
                        </div>
                    </div>
                    <div className="container left-cont">
                        <div className="text-box">
                            <img src={ec} className='team-logo' alt="" />
                            <div className='circle'></div>
                            <h2>Core Team, Electronics Club</h2>
                            <small>2023-2024</small>
                            <p>I contributed significantly to the planning and execution of various club activities. My role involved coordinating events, managing projects, and fostering engagement among members, all aimed at promoting innovation and collaboration within the field of electronics.</p>
                            <span className='left-arrow'></span>
                        </div>
                    </div>
                    <div className="container right-cont">
                        <div className="text-box">
                            <img src={election} className='team-logo_ele' alt="" />
                            <div className='circle-right'></div>
                            <h2>Design Head, Election Commission 2024 </h2>
                            <small>March 2024- April 2024</small>
                            <p>I was responsible for overseeing all design-related activities, including the creation of agenda templates, banners, official merchandise, and installations for election day. I was also involved in managing and coordinating large crowds during the election, ensuring a seamless and organized process.</p>
                            <span className='right-arrow'></span>
                        </div>
                    </div>
                    <div className="container left-cont">
                        <div className="text-box">
                            <img src={cepstrum} className='team-logo' alt="" />
                            <div className='circle'></div>
                            <h2>Design Mentor, Cepstrum</h2>
                            <small>2024-present</small>
                            <p> I supervise the design team, providing guidance and support to ensure high-quality design outcomes. Additionally, I assist the entire team in the smooth execution of events, contributing to their overall success and efficiency.</p>
                            <span className='left-arrow'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
