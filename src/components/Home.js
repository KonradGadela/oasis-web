import React from 'react';

import mainpic from '.././images/oasis-image-main.png';
import gympic from '.././images/gym.png';
import roompic from '.././images/room.jpg';
import chefpic from '.././images/chef.jpg';

import NavBar from './NavBar';
import { Service } from './Service';

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
