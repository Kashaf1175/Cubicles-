import React from 'react';
import './Services.css';
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"

function Services() {
  // const services = [
  //   { title: 'Mobile Development', description: 'Builds mobile solutions.' },
  //   { title: 'Web Development', description: 'Responsive and engaging websites.' },
  //   { title: 'QA Testing', description: 'Ensures quality.' },
  // ];

  return (
    <div className='serv'>
    <div class="containers">
        <h5>Services we offer</h5>
        <div class="services">
        {/* <div class="service">
                <img src="code.png" alt="" srcset="" />
                <h2>Web Design & Development</h2>
                <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div> */}
            <div class="service active">
                <img src="appdev.png" alt="" srcset="" />
                <h2>Mobile App Development</h2>
                <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div>
            <div class="service">
                <img src="code.png" alt="" srcset="" />
                <h2>Web Design & Development</h2>
                <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div>
            <div class="service">
                <img src="test.png" alt="" srcset="" />
                <h2>Software Testing Service</h2>
                <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div>
            <div class="service">
                <img src="test.png" alt="" srcset="" />
                <h2>Software Testing Service</h2>
                <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div>
        </div>
        <div class="pagination">
            <div class="dots">
                <span class="active"></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="page-info">
                01 — 05
            </div>
        </div>
    </div>
    </div> 
    
  );
}

export default Services;
