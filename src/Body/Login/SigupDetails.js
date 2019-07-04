import React from 'react';
import { FaEnvelope, FaLock, FaLongArrowAltLeft, FaUser } from 'react-icons/fa';
import { TiGroupOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

function SignupDetails() {
  return (
    <div className="flex flex-column cross-center login-detail">
      <h2>User Signup</h2>
      <form>
        <div>
          <TiGroupOutline />
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <FaEnvelope />
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <FaUser />
          <input type="text" placeholder="Firstname" />
        </div>
        <div>
          <FaUser />
          <input type="text" placeholder="Lastname" />
        </div>
        <div>
          <FaLock />
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <FaLock />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div id="login-submit">
          <button type="submit" placeholder="">
            Submit
          </button>
        </div>
      </form>
      <p>Already a User ?</p>
      <Link  to="/Login">
        <p>
          <FaLongArrowAltLeft /> Sign In
        </p>
      </Link>
    </div>
  );
}

export default SignupDetails;
