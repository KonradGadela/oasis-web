import React, { useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';



const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showExceptionAlert, setShowExceptionAlert] = useState(false);



  const handleSignIn = () => {
    setShowExceptionAlert(false)
    const data = { email, password };
    const apiUrl = 'https://localhost:7147/api/user/Login';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (!response.ok) {
        setShowExceptionAlert(true);
      }
      else
      {
        console.log('Success:', data);
        setShowSuccessAlert(true);
        setTimeout(() => {
          window.location.href = './';
        }, 3000);
      }
    })
      
  };

  return (
    <div>
      <NavBar />

      {showSuccessAlert && (
        <div className="alert alert-success" role="alert">
          You have been logged in successfully. You will be redirected to Log In page in 3 seconds...
        </div>
      )}

      {showExceptionAlert && (
        <div className="alert alert-danger" role="alert">
          User with provided login/password hasn't been found in the database...
        </div>
      )}

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
          class="btn btn-success log-in-button"
          onClick={handleSignIn}>
          Sign In
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
