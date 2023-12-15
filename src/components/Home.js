import React from 'react';

import mainpic from '.././images/oasis-image-main.png';
import gympic from '.././images/gym.png';
import roompic from '.././images/room.jpg';
import chefpic from '.././images/chef.jpg';
import hotelpic from '.././images/hotelpic.jpg';


import NavBar from './NavBar';
import { Service } from './Service';

const Home = () => {

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 75)), url(${hotelpic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Set the height of the background
  };

  return (
    <div style={backgroundStyle}>

      <NavBar />

      <div class="main-content">

        <div class="main-content-left">
          <h1 class="welcome-header">Welcome to</h1>
          <h1 class="welcome-header">Oasis Hotel</h1>
          <p class="main-paragraph rounded">Escape the hustle and bustle of everyday life and find your oasis at our hotel.<br/> Enjoy our comfortable accommodations, exceptional amenities, and unparalleled service.</p>
          <button type="button" class="btn btn-success" ><a href="#ServicesAll" class="nav-link">View all services</a></button>
        </div>


        <div class="main-content-right">
          <img  src={mainpic} class="main-pic rounded service-pic" alt="sth" />
        </div>

      </div>


      <h1 class="allServicesHeader">All services</h1>

      <div className="allServices" id="ServicesAll">
        <Service
          imgSrc={roompic}
          altText="Booking Management"
          header="Booking Management"
          description="Booking management involves the implementation of systems that allow customers to make reservations through various channels, including online platforms, mobile apps, phone calls, and in-person interactions."
        />
        <Service
          imgSrc={gympic}
          altText="Gym & Wellness"
          header="Gym & Wellness"
          description="Welcome to our luxurious Gym and Wellness Hotel, where your journey to rejuvenation and fitness begins. Nestled in the heart of city, our hotel is a haven for those seeking a perfect blend of wellness and indulgence. From state-of-the-art fitness facilities to serene spa retreats, we offer an unparalleled experience for the mind, body, and soul."
        />
        <Service
          imgSrc={chefpic}
          altText="Restaurant"
          header="Restaurant"
          description="Welcome to our exquisite hotel restaurant, where culinary excellence meets a charming ambiance to create a truly memorable dining experience. Nestled within the heart of our luxurious accommodations, our restaurant is a culinary haven that caters to the diverse palates of our discerning guests."
        />
      </div>

      <div>

      </div>
    </div>

  );
};

export default Home;
