import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand"><Link to="/" className="custom-link" >Oasis hotel</Link></a>
    
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
    
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                  <li class="nav-item">
                    <button type="button" class="btn btn-success"><Link to="/SignUp" className="custom-link" >Sign Up</Link></button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
};

export default NavBar;
