import React from 'react';
import './About.css';


function About() {
  return (
    
  <div className="body body-enhanced">
    
  <div className="container">
   <div className="text-content1">
   <h6 className="enhanced-hover">
    Great&nbsp;
   <span className='highlighter'>Software&nbsp;
   </span>
   is
   <br />
   <b>Built by Great&nbsp;</b>
   <span className='highlighter'><b>teams</b></span>
   </ h6>
    <p className="text-content1 enhanced-hover">
    We help build and manage a team of world-class developers to bring your vision to life
    </p>
    
    <a className="but enhanced-button" href="#">
     Let's get started!
    </a>
    </div>
   <div className="image-content1">
    <img className="enhanced-hover" src="Hero-Wrapper__image.png" alt="" />
       </div>
  </div>
  </div>
   
  );
} 

export default About;
