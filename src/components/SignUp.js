import React, { useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleSignUp = () => {
        const data = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
        };

        const apiUrl = 'https://localhost:7147/api/user/Register';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(data => {
                console.log('Success:', data);
                setShowSuccessAlert(true);
                setTimeout(() => {
                    window.location.href = '/SignIn';
                }, 3000);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <NavBar />

            {showSuccessAlert && (
                <div className="alert alert-success" role="alert">
                    You have been registered successfully. You will be redirected to Log In page in 3 seconds...
                </div>
            )}

            <div className="sign-up-div">
                <h2>Sign Up!</h2>

                <div className="sign-in-inputs">
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label sign-up-label">
                            First Name:
                        </label>
                        <input
                            type="text"
                            className="sign-up-label form-control"
                            id="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label sign-up-label">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            className="sign-up-label form-control"
                            id="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label sign-up-label">
                            Email Address:
                        </label>
                        <input
                            type="text"
                            className="sign-up-label form-control"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label sign-up-label">
                            Phone Number:
                        </label>
                        <input
                            type="text"
                            className="sign-up-label form-control"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label sign-up-label">
                            Password:
                        </label>
                        <input
                            type="password"
                            className="sign-up-label form-control"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-success log-in-button"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                </div>
            </div>

            <hr />

            <div className="sign-up-part">
                <button type="button" className="btn btn-success no-account-button">
                    <Link to="/SignIn" className="custom-link">
                        I have an account - Sign In
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default SignUp;
