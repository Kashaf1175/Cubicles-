import React from 'react'
import './Work.css';

function Work() {
  return (
    <div className='work'>
    <div className='tech'>
  <div class="container5">
   <h3>
    Our
   </h3>
   <h2>
    Tech Stack
   </h2>
   <div class="tabs">
    <div class="tab active">
     Backend
    </div>
    <div class="tab">
     Frontend
    </div>
    <div class="tab">
     Databases
    </div>
    <div class="tab">
     CMS
    </div>
    <div class="tab">
     CloudTesting
    </div>
    <div class="tab">
     DevOps
    </div>
   </div>
   <div class="tech-logos">
    <img src="stack.png" alt="" srcset="" />
   </div>
  </div>
  </div>
    <div class="container4">
        <h1>How development <span>through Alcaline works</span></h1>
        <div class="line"></div>
        <div class="steps">
            <div class="step">
                <h2>#1 Assemble the right team</h2>
                <p>We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do.</p>
            </div>
            <div class="step">
                <h2>#3 Tech architecture</h2>
                <p>We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.</p>
            </div>
            <div class="step">
                <h2>#5 Code reviews</h2>
                <p>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.</p>
            </div>
        </div>
        <div class="line-horizontal">
            <i class="fas fa-trophy trophy"></i>
        </div>
        <div class="steps">
            <div class="step">
                <h2>#2 Sprint planning</h2>
                <p>Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.</p>
            </div>
            <div class="step">
                <h2>#4 Standups &amp; weekly demos</h2>
                <p>Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.</p>
            </div>
            <div class="step">
                <h2>#6 Iterative delivery</h2>
                <p>We divide the implementation process into several checkpoints rather than a single deadline.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Work;