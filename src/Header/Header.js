import React from 'react';
import './Header.css';
import { FaPhone, FaEnvelope, FaSearch } from 'react-icons/fa';

function Header() {
  const menu = ['Home', 'About', 'School', 'Courses', 'Blog', 'Contact'];
  return (
    <>
      <header className="flex space-between className first-header">
        <div>
          <span> Have any questions ?</span>
          <span>
            <FaPhone /> +234 906 760 6623
          </span>
          <span>
            <FaEnvelope /> info@edutech.com
          </span>
        </div>
        <div className="register">Register Or Login</div>
      </header>
      <header className="second-header flex space-between cross-center">
        <div>
          <span className="tech">Tech</span>
          <span className="edu">Edu</span>
        </div>
        <div className="menu">
          {menu.map(item => (
            <span key={item}> {item}</span>
          ))}
          <form>
            <span>
              <input type="text" placeholder="search" />
              <button type="submit">
                <FaSearch />
              </button>
            </span>
          </form>
        </div>
      </header>
    </>
  );
}

export default Header;