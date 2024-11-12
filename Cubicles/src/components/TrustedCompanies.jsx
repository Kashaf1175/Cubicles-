import React from 'react';
import './TrustedCompanies.css';

function TrustedCompanies() {
  return (
    <div className='bodi'>
  <div class="containe">
   <div class="heade">
    <h4 >
     Leading companies trust us <br />
     <span >
      to develop software
     </span>
    </h4>
    <p>
     We&nbsp;
     <span className='blue'>
      add development capacity&nbsp;
     </span>
     to tech teams. Our value isn't limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
    </p>
    <a href="#">
     See more informations
     <img className='arr' src="arrow.png" alt="" srcset="" />
    </a>
   </div>
   <div class="video-section">
     <img src="video.png" alt="" width="601" height="450"/>
   </div>
   </div>
   <div className='cont'>
   <div class="partners">
    <h3>
     Meet the People
    </h3>
    <p>
     We are Working With
    </p>
    </div>
    <span className='navigation'>
   {/* <img className='arr1' src="lefts.png" alt="" srcset="" />
   <img className='arr2' src="rights.png" alt="" srcset="" /> */}
   </span>
    <img className='partners-logos' src="Logo-list.png" alt="" srcset="" width="1200"/>
   </div>
   </div>
  

  );
}

export default TrustedCompanies;
