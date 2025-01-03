import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.css';

emailjs.init(""); // Replace with your actual public key

const ContactForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState('');
  const form = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    // Check if form is valid
    if (form.current.checkValidity()) {
      setIsActive(true);
      sendEmail(e);
    } else {
      setStatus('Please fill in all fields correctly.');
      form.current.reportValidity(); // Highlight invalid fields
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Send email using EmailJS
    emailjs
      .sendForm('service_5tlk7ro', 'template_f4nhgo4', form.current)
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset(); // Reset the form
          setIsActive(false); // Reset button state
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <div className='form'>
      <center>
        <h2>SEND ME EMAIL QUICLY</h2>
        <form id="template_f4nhgo4" ref={form}>
        <p>{status}</p>
          <input type="hidden" name="contact_number" value="697483" />

          <label>Name</label>
          <input type="text" name="user_name" required />

          <label>Email</label>
          <input type="email" name="user_email" required />

          <label>Message</label>
          <textarea name="message" required></textarea>

          <div className="container-send">
            <button 
              id="btn" 
              className={isActive ? "active" : ""} 
              onClick={handleClick}
            >
              <p id="btnText">{isActive ? "Thanks" : "Submit"}</p>
              <div className="check-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
              </div>
            </button>
          </div>
        </form>
      </center>
      <br /><br />
    </div>
  );
};

export default ContactForm;
