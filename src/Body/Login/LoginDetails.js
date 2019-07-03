import React from 'react';
import {FaEnvelope,FaLock, FaLongArrowAltRight} from 'react-icons/fa'
function LoginDetails() {
  return (
    <div className="flex flex-column cross-center login-detail">
      <h2>Member Login</h2>
      <form>
        <div><FaEnvelope/>
          <input type="text" placeholder="Username or Email" />
        </div>
        <div><FaLock/>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <button type="submit" placeholder="">Submit</button>
        </div>
      </form>
      <p>Forgot Password/Username ?</p>
      <p>Create your account <FaLongArrowAltRight/></p>
    </div>
  );
}

export default LoginDetails;
