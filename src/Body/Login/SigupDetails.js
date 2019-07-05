import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaLongArrowAltLeft, FaUser, FaCheck } from 'react-icons/fa';
import { TiGroupOutline } from 'react-icons/ti';
import { MdClose } from 'react-icons/md';
import { Link, Redirect } from 'react-router-dom';
import Hash from '../HashGen';
import ky from 'ky';

function SignupDetails() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  function signupChangeHandler(e) {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'firstname':
        setFirstname(e.target.value);
        break;
      case 'lastname':
        setLastname(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(e.target.value);
        break;
      case 'signup-form':
        e.preventDefault();
        if (password !== ConfirmPassword) {
          alert('Password and Confirm Password Do Not Match');
          return;
        }
        document.querySelector('#spinner').style.display = 'block'; // Display Your Spinner

        const hashed = Hash(password);
        const data = {
          id: username.toLowerCase(),
          username: username.toLowerCase(),
          email: email.toLowerCase(),
          firstname: firstname.toLowerCase(),
          lastname: lastname.toLowerCase(),
          password: hashed
        };
        ky('/users', {
          method: 'post',
          json: {
            ...data
          }
        })
          .then(res => res.json())
          .then(res => {
            document.querySelector('#spinner').style.display = 'none'; // Display Your Spinner
            if (JSON.stringify(res)===JSON.stringify(data)) {
              document.querySelector('#right').style.display = 'block';
              setTimeout(() => setRedirect(true), 1500);
            }
          })
          .catch(err => {
            document.querySelector('#spinner').style.display = 'none'; // Display Your Spinner
            document.querySelector('#wrong').style.display = 'block'; // Display Your Spinner
            console.log(err)});
        break;
      default:
        return null;
    }
  }
  return (
    <div className="flex flex-column cross-center login-detail">
      <h2>User Signup</h2>
      <form name="signup-form" onSubmit={signupChangeHandler}>
        <div>
          <TiGroupOutline />
          <input
            type="text"
            name="username"
            value={username}
            onChange={signupChangeHandler}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <FaEnvelope />
          <input
            type="email"
            name="email"
            value={email}
            onChange={signupChangeHandler}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <FaUser />
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={signupChangeHandler}
            placeholder="Firstname"
            required
          />
        </div>
        <div>
          <FaUser />
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={signupChangeHandler}
            placeholder="Lastname"
            required
          />
        </div>
        <div>
          <FaLock />
          <input
            type="password"
            name="password"
            value={password}
            onChange={signupChangeHandler}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <FaLock />
          <input
            type="password"
            name="confirmPassword"
            value={ConfirmPassword}
            onChange={signupChangeHandler}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div id="loader" className="flex-column cross-center">
          <span id="wrong">
            <MdClose /> Login Failed
          </span>
          <span id="right">
            <FaCheck /> Login Successful
          </span>
          <img id="spinner" src="../assets/img/spinner.svg" alt="spinner" />
        </div>
        <div id="login-submit">
          <button type="submit" placeholder="">
            Submit
          </button>
        </div>
      </form>
      <p>Already a User ?</p>
      <Link to="/Login">
        <p>
          <FaLongArrowAltLeft /> Sign In
        </p>
      </Link>
      {redirect === true ? <Redirect to="localhost/home" /> : null}
    </div>
  );
}

export default SignupDetails;
