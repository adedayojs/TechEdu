import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LoginDetails() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function changeHandler(e) {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        console.log(null);
    }
  }
  return (
    <div className="flex flex-column cross-center login-detail">
      <h2>Member Login</h2>
      <form>
        <div>
          <FaEnvelope />
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
            placeholder="Username or Email"
          />
        </div>
        <div>
          <FaLock />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
          />
        </div>
        <div id="login-submit">
          <button type="submit" placeholder="">
            Submit
          </button>
        </div>
      </form>
      <p>Forgot Password/Username ?</p>
      <Link to="/login/signup">
        <p>
          Create your account <FaLongArrowAltRight />
        </p>
      </Link>
    </div>
  );
}

export default LoginDetails;
