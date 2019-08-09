import React, { useState, useContext } from 'react';
import {
  FaEnvelope,
  FaLock,
  FaLongArrowAltRight,
  FaCheck
} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { Link, Redirect } from 'react-router-dom';
// import ky from 'ky';
import Hash from '../HashGen';
import { IsLoggedIn } from '../../UserContext';

function LoginDetails() {
  const { setLoggedIn } = useContext(IsLoggedIn);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  function loginChangeHandler(e) {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value);
        document.querySelector('#wrong').style.display = 'none';
        break;
      case 'password':
        setPassword(e.target.value);
        document.querySelector('#wrong').style.display = 'none';
        break;
      case 'form':
        e.preventDefault();
        document.querySelector('#spinner').style.display = 'block'; // Display Your Spinner
        const hashed = Hash(password); //  Hash Your Password
        fetch(`/users?username=${username.toLowerCase()}&password=${hashed}`)
          // ky('https://api.github.com')
          .then(res => res.json())
          .then(res => {
            document.querySelector('#spinner').style.display = 'none';
            if (res.length < 1) {
              document.querySelector('#wrong').style.display = 'block';
              console.log('wrong', res);
              return;
            }
            console.log(res, hashed);
            document.querySelector('#right').style.display = 'block';
            setLoggedIn(true);
            setTimeout(() => setRedirect(true), 1500);
            localStorage.setItem('IsLoggedIn', true);
            localStorage.setItem(
              'name',
              (() => username[0].toUpperCase() + username.substring(1))()
            );
            return;
          })
          .catch(err => {
            document.querySelector('#spinner').style.display = 'none';
            document.querySelector('#wrong').style.display = 'block';
            console.log(err);
          });

        break;
      default:
        console.log(null);
    }
  }
  return (
    <div className="flex flex-column cross-center login-detail">
      <h2>Member Login</h2>
      <form id="login-form" name="form" onSubmit={loginChangeHandler}>
        <div>
          <FaEnvelope />
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={loginChangeHandler}
            placeholder="Username or Email"
            required
          />
        </div>
        <div>
          <FaLock />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={loginChangeHandler}
            placeholder="Password"
            required
          />
        </div>
        <div id="loader" className="flex-column cross-center">
          <span id="wrong">
            <MdClose /> Login Failed. Username or Password Incorrect
          </span>
          <span id="right">
            <FaCheck /> Login Successful
          </span>
          <img id="spinner" src="./assets/img/spinner.svg" alt="spinner" />
        </div>
        <div id="login-submit">
          <button type="submit">Login</button>
        </div>
      </form>
      <p>Forgot Password/Username ?</p>
      <Link to="/login/signup">
        <p>
          Create your account <FaLongArrowAltRight />
        </p>
      </Link>
      {redirect === true ? <Redirect to="school" /> : null}
    </div>
  );
}

export default LoginDetails;
