import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contents.css';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import mail from '../assets/mail.png';
import github from '../assets/github.png';

const Contents = ({ menuOpen,setMenuOpen }) => {
    const [expanded, setExpanded] = useState(false);
    const [showTitle1, setShowTitle1] = useState(false);
    const [showTitle2, setShowTitle2] = useState(false);
    const [showTitle3, setShowTitle3] = useState(false);
    const [showTitle4, setShowTitle4] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (menuOpen) {
            setExpanded(true);
            setTimeout(() => {
                setShowTitle1(true);
            }, 900);
            setTimeout(() => {
                setShowTitle2(true);
            }, 1200);
            setTimeout(() => {
                setShowTitle3(true);
            }, 1800);
            setTimeout(() => {
                setShowTitle4(true);
            }, 2500);
        } else {
            setShowTitle1(false);
            setShowTitle2(false);
            setShowTitle3(false);
            setShowTitle4(false);
            setExpanded(false);
        }
    }, [menuOpen]);

    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    return menuOpen ? (
        <div className={`content-container ${expanded ? 'expanded' : ''}`}>
            <div className="social-links">
                <div className='h-line'></div>
                <a href="https://www.linkedin.com/in/paridhi-baruah/" target='_blank' rel='noopener noreferrer'>
                    <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/_crazybri_" target='_blank' rel='noopener noreferrer'>
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://github.com/paridhi-baruah" target='_blank' rel='noopener noreferrer'>
                    <img src={github} alt="GitHub" />
                </a>
                <a href="mailto:paridhibaruah2002@gmail.com" target='_blank' rel='noopener noreferrer'>
                    <img src={mail} alt="Mail" />
                </a>
            </div>
            <div className="contents">
                <div className={`content-title content-title1 ${showTitle1 ? 'show' : ''}`} onClick={() => handleNavigation('/')}>Home</div>
                <div className={`content-title content-title2 ${showTitle2 ? 'show' : ''}`} onClick={() => handleNavigation('/about')}>About</div>
                <div className={`content-title content-title3 ${showTitle3 ? 'show' : ''}`} onClick={() => handleNavigation('/projects')}>Projects</div>
                <div className={`content-title content-title4 ${showTitle4 ? 'show' : ''}`} onClick={() => handleNavigation('/experience')}>Experience</div>
            </div>
        </div>
    ) : null;
};

export default Contents;
