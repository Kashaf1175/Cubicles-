import React from "react";
import './Contact.css';

function Contact() {
  
  return (
    <div className="cn-form">
      <div className="contact-form-container">
        <h1>Contact Us</h1>
        <form action="https://api.web3forms.com/submit" method="POST">
          <div className="form-group">
          <input type="hidden" name="access_key" value="5feaab23-10bc-4362-b5be-d583910b4634" />
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
