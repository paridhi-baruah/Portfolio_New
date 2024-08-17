import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import menuicon from '../assets/menu_icon.png';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleMenu, menuOpen,setMenuOpen,isProjectsPage }) => {
    const navigate = useNavigate();
    const navClass = isProjectsPage ? 'navbar projects-page' : 'navbar';
    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false);
        
    };
    return (
        <nav className={menuOpen ? 'open' : ''}>
            <div className="links">
                <div className="logo-menu">
                    <img src={logo} className="logo" alt="Logo" onClick={()=>handleNavigation('/')}  />
                    <div className="v-line"></div>
                    <div className="menu" onClick={toggleMenu}>
                        <img src={menuicon} alt="Menu Icon" className='menu-icon'/>
                        <div className={`menu-text ${menuOpen ? 'slide-in' : 'slide-out'}`}>
                            CLOSE
                        </div>
                    </div>
                </div>
                <a href="mailto:paridhibaruah2002@gmail.com?subject=Job%20Opportunity" target='_blank' rel='noopener noreferrer' className={`hire ${menuOpen ? 'open' : ''}`}>HIRE ME</a>
            </div>
        </nav>
    );
};

export default Navbar;
