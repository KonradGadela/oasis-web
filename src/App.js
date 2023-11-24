import React from 'react';
import mainpic from './images/oasis-image-main.png'; 


const App = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Oasis hotel</a>

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
                <button type="button" class="btn btn-success">Sing Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="main-content">

        <div class="main-content-left">
          <h1>Welcome to Oasis Hotel</h1>
          <p>Escape the hustle and bustle of everyday life and find your oasis at our hotel. Enjoy our comfortable accommodations, exceptional amenities, and unparalleled service.</p>
          <button type="button" class="btn btn-success">View all services</button>
        </div>


        <div class="main-content-right">
            <img src={mainpic} class="main-pic rounded" alt="sth"/>
        </div>

      </div>

    </div>
  );
};

export default App;
