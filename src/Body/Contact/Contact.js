import React, { useState } from 'react';
import './Contact.css';
import {} from 'react-router-dom'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  function changeHandler(e) {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'message':
        setMessage(e.target.value);
        break;
      default:
        console.log(null);
    }
  }
  return (
    <section className="flex contact-section">
      <div className="contact-form-section">
        <h1>Fill The Form To Contact Us</h1>
        <form className="contact-form flex-column">
          <input
            className="contact-text"
            name="name"
            type="text"
            onChange={changeHandler}
            value={name}
            placeholder="Your Name"
          />
          <input
            className="contact-text"
            value={email}
            name="email"
            onChange={changeHandler}
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="contact-textarea"
            value={message}
            name="message"
            onChange={changeHandler}
            type="textarea"
            placeholder="Your Message"
          />
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="contact-detail">
        <h1>Reach Us On</h1>
        <p>
          Do you think you need to get in personal reach with us ? We are
          available 24/7 on any of the provided communication means provided
          below
        </p>
        <h1>Head Office</h1>
        <p>Techkny Avenue, Silicon Valley, New York, United States </p>
        <p>+1 345 678 9874</p>
        <p>info@techkny.com</p>

        <h1>Branch Office</h1>
        <p>Techkny Avenue, Yabacon Valley, Lagos, Nigeria. </p>
        <p>+234 345 678 9874</p>
        <p>info.yabacon@techkny.com</p>
      </div>
    </section>
  );
}

export default Contact;
