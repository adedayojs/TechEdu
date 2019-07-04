import React from 'react';
import './Login.css';
import LoginDetails from './LoginDetails';
import SignupDetails from './SigupDetails';
import { Route } from 'react-router-dom';

function Login() {
  function translate(e) {
    let doc = document.querySelector('img');
    doc.style.transform = `perspective(300px) rotateX(${e.clientX /
      55}deg) rotateY(${e.clientY / 55}deg)`;
    console.log(e.clientY, e.clientX);
  }

  return (
    <section className="login flex">
      <div
        id="login-image"
        onMouseMove={translate}
        className="login-image flex main-center"
      >
        <img src="./assets/img/login.png" alt="login/signup" />
      </div>
      <div className="login-signup-details">
        <Route exact path="/login" component={LoginDetails} />
        <Route path="/login/signup" component={SignupDetails} />
      </div>
    </section>
  );
}
document.onload = e => {};
// document.onmousemove = function(e) {
//     console.log('mouse location:', e.clientX, e.clientY);
// }
export default Login;
