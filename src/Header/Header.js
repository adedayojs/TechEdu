import React, { useContext } from 'react';
import './Header.css';
import { FaPhone, FaEnvelope, FaSearch } from 'react-icons/fa';
import { IsLoggedIn } from '../UserContext';

import { Link, NavLink } from 'react-router-dom';

function Header({ match }) {
  const { loggedin, setLoggedIn } = useContext(IsLoggedIn);

  console.log(match.params.id);
  const menu = ['Home', 'About', 'School', 'Courses', 'Blog', 'Contact'];
  return (
    <>
      <header className="flex space-between first-header">
        <div>
          <span> Have any questions ?</span>
          <span>
            <FaPhone /> +234 906 760 6623
          </span>
          <span>
            <FaEnvelope /> info@edutech.com
          </span>
        </div>
        {/* If User is logged in Make the link point to logour otherwise point it to login */}
        {loggedin ? (
          <Link
            className="register"
            onClick={() => {
              setLoggedIn(false);
            }}
            to="./home"
          >
            <div>Logout</div>
          </Link>
        ) : (
          <Link className="register" to="./login">
            <div>Register Or Login</div>
          </Link>
        )}
      </header>
      <header className="second-header flex space-between cross-center">
        <div>
          <span className="tech">Tech</span>
          <span className="edu">Edu</span>
        </div>
        <div className="menu" id="menu">
          {menu.map(item => {
            return (
              <NavLink
                activeClassName="selectedLink"
                exact
                key={item}
                to={`/${item}`}
              >
                <span> {item}</span>
              </NavLink>
            );
          })}
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
