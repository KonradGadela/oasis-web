import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand"><Link to="/" className="custom-link" >OASIS HOTEL</Link></a>
    
                <ul class="navbar-nav">
                  
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page">
                      <Link to="/rooms" className="custom-link" >Rooms</Link>
                    </a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#ServicesAll">Services</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>

                  <li class="nav-item">
                  <button type="button" class="btn"><Link to="/contact" className="custom-link" >Contact</Link></button>
                  </li>

                  <li class="nav-item">
                    <button type="button" class="btn btn-success"><Link to="/SignIn" className="custom-link" >Sign In</Link></button>
                  </li>
                </ul>
              </div>
          </nav>
      );
};

export default NavBar;
