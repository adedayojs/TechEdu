import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex space-between">
      <div className="footer one">
        <div>
          <span className="tech">Tech</span>
          <span className="edu">Edu</span>
        </div>
        <div>
          <p>Your One Inexahustible online learning resource</p>
        </div>
        <div className="social flex">
          <a href="https://www.facebook.com/techkny">
            <span>
              <FaFacebook />
            </span>
          </a>
          <a href="https://www.twitter.com/adedayoaa">
            <span>
              <FaTwitter />
            </span>
          </a>
          <a href="https://www.facebook.com/techkny">
            <span>
              <FaLinkedin />
            </span>
          </a>
          <a href="https://www.facebook.com/techkny">
            <span>
              <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>
      <div className="footer two">
        <h2>Partners</h2>
        <a href="http://github.com/samfeolu/techkny"><h3>Techkny</h3></a>
        <a href="http://github.com/samfeolu/techmax"><h3>TechMax</h3></a>
        <a href="http://www.decagon.institute"><h3>Decagon Institute</h3></a>
      </div>
      <div className="footer three">
        <h2>Contact Us</h2>
        <div><span className='foot-title'>Email:</span><span> techedu@techkny.com</span></div>
        <div><span className='foot-title'>Phone:</span><span> techedu@techkny.com</span></div>
        <div><span className='foot-title'>Address:</span><span> 3, Rahifu Street, Adamo, Ikorodu, Lagos, Nigeria.</span></div>
      </div>
      <div className="footer">
        <h2>Mobile</h2>
      </div>
    </footer>
  );
}

export default Footer;
