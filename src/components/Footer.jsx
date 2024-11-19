import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='foot'>
  <div class="footer">
   <div class="contai">
    <div class="logo">
         <img src="logo.png" alt="" srcset="" height={30} width={350} />
    

     <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     </p>
     <div class="badges">
      <img src="foot.png" alt="" srcset="" height="53px" width="199px"/>
     </div>
    </div>
    <div class="links">
     <h3>
      Links
     </h3>
     <a href="#">
      About Us
     </a>
     <a href="#">
      Services
     </a>
     <a href="#">
      Case Studies
     </a>
     <a href="#">
      How it works
     </a>
     <a href="#">
      Blog
     </a>
     <a href="#">
      Careers
     </a>
     <a href="#">
      Areas We Serve
     </a>
    </div>
    <div class="contact" href="#contact">
     <h3>
      Contact us
     </h3>
     <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     </p>
     <p>
      +908 89097 890
     </p>
     <div class="social-icons">
      <a href="#">
       <i class="fab fa-facebook-f">
       </i>
      </a>
      <a href="#">
       <i class="fab fa-instagram">
       </i>
      </a>
      <a href="#">
       <i class="fab fa-twitter">
       </i>
      </a>
      <a href="#">
       <i class="fab fa-linkedin-in">
       </i>
      </a>
     </div>
    </div>
   </div>
   <hr />
   <div class="copyright"> 
   <p>&copy; 2025 Copywrite by Cubicles Technology. All rights reserved.</p>
   </div>
  </div>
  </div>
  );
}

export default Footer;
