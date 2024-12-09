import React, { useEffect } from 'react';
import './Case.css';

function TrustedCompanies() {

  useEffect(() => { 
    const services = document.querySelectorAll('.service');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    services.forEach((service) => observer.observe(service));

    return () => {
      services.forEach((service) => observer.unobserve(service));
    };
  }, []);
  document.addEventListener("DOMContentLoaded", () => {
  const profilesContainer = document.querySelector(".profiles");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let currentIndex = 0;
  const profileWidth = profilesContainer.querySelector(".profile").offsetWidth + 10; // Width + margin
  const totalProfiles = profilesContainer.children.length;

  // Function to update carousel position
  function updateCarousel() {
    const offset = -currentIndex * profileWidth;
    profilesContainer.style.transform = `translateX(${offset}px)`;
    console.log(`Moved to index: ${currentIndex}, Offset: ${offset}px`);
  }

  // Left arrow (move forward)
  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalProfiles; // Loop forward
    updateCarousel();
  });

  // Right arrow (move backward)
  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalProfiles) % totalProfiles; // Loop backward
    updateCarousel();
  });
});



  return ( 
    <div className='testi body-enhanced'>
    <div class="boxes ">
     <div class="title">
     <div className="line"></div>
      Why customers love
     </div>
     <div class="subtitle">
      working with us
     </div>
     <div class="testimonial">
     Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.
    </div>
     <div class="carousel">
      <div class="arrow">
       <img src="" alt="" />
      </div>
      <div class="profiles">
       <div class="profile">
        <img src="ep1.png" alt="" />
        <div class="stars">
        <img className='star' src="stars.png" alt="" />
        </div>
        <div class="name">
         Romeena De Silva
        </div> 
        <div class="company">
         Janet Cosmetics
        </div>
       </div>
       <div class="profile">
        <img src="ep1.png" alt="" />
        <div class="stars">
        <img className='star' src="stars.png" alt="" />
        </div>
        <div class="name">
         Romeena De Silva
        </div>
        <div class="company">
         Janet Cosmetics
        </div>
       </div>
       <div class="profile">
        <img src="ep1.png" alt="" />
        <div class="stars">
        <img className='star' src="stars.png" alt="" />
        </div>
        <div class="name">
         <b>Romeena De Silva</b>
        </div>
        <div class="company">
         Janet Cosmetics
        </div>
       </div>
       <div class="profile">
        <img src="ep1.png" alt="" />
        <div class="stars">
        <img className='star' src="stars.png" alt="" />
        </div>
        <div class="name">
         Romeena De Silva
        </div>
        <div class="company">
         Janet Cosmetics
        </div>
       </div>
       <div class="profile">
        <img src="ep1.png" alt="" />
        <div class="stars">
        <img className='star' src="stars.png" alt="" />
        </div>
        <div class="name">
         Romeena De Silva
        </div>
        <div class="company">
         Janet Cosmetics
        </div>
       </div>
      </div>
      <div class="arrow">
       <img src="" alt="" />
      </div>
     </div>
    </div>
    <div className='case'>
  <div class="co">
    <div className='line'></div>
   <h2>
    Our recent
   </h2>
   <h3>
    Case studies
   </h3>
   <div class="case-study">
   <img src="c1.png" alt="" />
    <div class="case-study-content">
      
     <h4>
      Website Design for SCFC Canada
     </h4>
     <p>
      Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
     </p>
     <a class="read-more" href="/read">
      Read more &gt;
     </a>
    </div>
   </div>
   <div class="case-study">
    <img src="c2.png" alt="" />
    <div class="case-study-content">
     <h4>
      Website Design for SCFC Canada
     </h4>
     <p>
      Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
     </p>
     <a class="read-more" href="#about">
      Read more &gt;
     </a>
    </div>
   </div>
  
  <div class="case-study">
  <img src="c3.png" alt="" />  
    <div class="case-study-content">
      
     <h4>
      Website Design for SCFC Canada
     </h4>
     <p>
      Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
     </p>
     <a class="read-more" href="#">
      Read more &gt;
     </a>
    </div>
   </div>
  </div>
  </div>
    </div>

  );
}

export default TrustedCompanies; 