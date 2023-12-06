import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';



const SignUp = () => {
    return (
        <div>
            <NavBar />

            <div class="sign-up-div">

                <h2>Sign Up!</h2>


                <div class="sign-in-inputs">

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label sign-up-label">First Name:</label>
                        <input type="text" class="sign-up-label form-control" id="formGroupExampleInput"/>
                    </div>

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label sign-up-label">Last Name:</label>
                        <input type="text" class="sign-up-label form-control" id="formGroupExampleInput"/>
                    </div>

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label sign-up-label">Address email:</label>
                        <input type="text" class="sign-up-label form-control" id="formGroupExampleInput"/>
                    </div>

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label sign-up-label">Phone number:</label>
                        <input type="text" class="sign-up-label form-control" id="formGroupExampleInput"/>
                    </div>

                    <div class="mb-3">
                        <label for="inputPassword4" class="form-label">Password:</label>
                        <input type="password" class="sign-up-label form-control" id="inputPassword4" />
                    </div>

                </div>

                <button type="button" class="btn btn-success log-in-button"><Link to="/SignUp" className="custom-link" >Sign Up</Link></button>

            </div>


            <hr />


            <div class="sign-up-part">

                <button type="button" class="btn btn-success no-account-button"><Link to="/SignIn" className="custom-link" >I have an account - Sign In</Link></button>
         
            </div>


        </div>
    );
};

export default SignUp;
