import React from 'react';
import mainpic from '.././images/oasis-image-main.png';
import NavBar from './NavBar';


//Created homepage
//Main content
const Home = () => {
  return (
    <div>

      <NavBar />

      <div class="main-content">

        <div class="main-content-left">
          <h1 class="welcome-header">Welcome to</h1>
          <h1 class="welcome-header">Oasis Hotel</h1>
          <p>Escape the hustle and bustle of everyday life and find your oasis at our hotel. Enjoy our comfortable accommodations, exceptional amenities, and unparalleled service.</p>
          <button type="button" class="btn btn-success">View all services</button>
        </div>


        <div class="main-content-right">
          <img src={mainpic} class="main-pic rounded" alt="sth" />
        </div>

      </div>

      <hr />

      <h2>All services:</h2>
      <div>
        
      </div>
    </div>

  );
};

export default Home;
