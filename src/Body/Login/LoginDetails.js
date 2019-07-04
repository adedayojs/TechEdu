import React from 'react';
import { FaEnvelope, FaLock, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LoginDetails() {
  return (
    <div className="flex flex-column cross-center login-detail">
      <h2>Member Login</h2>
      <form>
        <div>
          <FaEnvelope />
          <input type="text" placeholder="Username or Email" />
        </div>
        <div>
          <FaLock />
          <input type="password" placeholder="Password" />
        </div>
        <div id='login-submit'>
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
