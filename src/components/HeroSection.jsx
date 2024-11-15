import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
  <div className="body">
  <div className="container">
   <div className="text-content1">
   <h6>
    Great&nbsp;
   <span className='highlighter'>Software&nbsp;
   </span>
   is
   <br />
   <b>Built by Great&nbsp;</b>
   <span className='highlighter'><b>teams</b></span>
   </ h6>
    <p>
     We help build and manage a team of world-class developers to bring your vision to life
    </p>
    
    <a className="but" href="#">
     Let's get started!
    </a>
    </div>
   <div className="image-content1">
    <img src="Hero-Wrapper__image.png" alt="" />
       </div>
  </div>
  </div>
   
  );
}

export default HeroSection;
