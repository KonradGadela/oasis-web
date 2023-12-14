import React, { useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';



const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div>
      <NavBar />

      <div class="sign-up-div">

        <h2>Welcome back!</h2>

        <div class="sign-in-inputs">

          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label sign-up-label">Address email:</label>
            <input
              type="text"
              class="sign-up-label form-control"
              id="formGroupExampleInput"
              placeholder="" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
          </div>

          <div class="mb-3">
            <label for="inputPassword4" class="form-label">Password:</label>
            <input
              type="password"
              class="sign-up-label form-control"
              id="inputPassword4"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

        </div>

        <button
          type="button"
          class="btn btn-success log-in-button">
          <Link to="/SignUp" className="custom-link" >Sign In</Link>
        </button>

      </div>

      <hr />

      <div class="sign-up-part">
        <button type="button" class="btn btn-success no-account-button"><Link to="/SignUp" className="custom-link" >I don't have an account. - Sign up</Link></button>
      </div>


    </div>
  );
};

export default SignIn;
