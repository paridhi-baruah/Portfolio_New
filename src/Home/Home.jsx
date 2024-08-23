import React from 'react';
import './Home.css';
import mypic from '../assets/mypic.png';
import strokesrect from "../assets/strokesrect.png";

const Home = () => {
  return (
    <div className='Home'>
      <img src={strokesrect} alt="Strokes" className='strokes' />
      <img src={mypic} alt="My Pic" className="mypic" />
      <div className="me-descp">
        <div>
          Hi, my
          <br />name is <span className="name"style={{fontWeight: 650 }}>Paridhi</span><span className="name" style={{color: "rgb(79, 111, 176)"}}>.</span>
        </div>
        <div className="desc">
          I'm an <span style={{fontWeight: 650, lineHeight: '2'}}>Independent Creative Developer</span> from Guwahati, India.
        </div>
      </div>
    </div>
  );
};

export default Home;
