import React from 'react';
import NavBar from './NavBar';
import mainpic from '../images/oasis-map.png';

const Contact = () => {
  return (
    <div >
      <NavBar />

      <div className="contactPage">
        <div className="leftPart">
          <h1>Have Questions?</h1>
          <p className="contactParagraph">
            We value your feedback and are eager to assist you <br />
            in making your stay at our hotel a memorable experience<br />
            Whether you have inquiries about room availability, special requests,<br />
            or would simply like to share your thoughts,<br /> 
            our dedicated team is here to help. <br />
            Feel free to reach out to us through the contact form below,<br />
            and we'll make every effort to respond promptly.<br />
          </p>
          <h3>Emergency? Call Us:</h3>
          <p className="contactParagraph">+48 237823722</p>
          <h3>Send us mail:</h3>
          <p className="contactParagraph">info@oasis.com</p>
          <h3>Find Oasis Hotel:</h3>
          <img src={mainpic} className=" rounded service-pic" alt="Oasis Hotel Map" />
        </div>

        <div className="rightPart">
          <div className="contactForm rounded">
          <div className="mb-3 contact-label">
            <input type="text" className="form-control" id="name" placeholder="Name" />
          </div>
          <div className="mb-3 contact-label">
            <input type="text" className="form-control" id="email" placeholder="Email Address" />
          </div>
          <div className="mb-3 contact-label">
            <input type="text" className="form-control" id="subject" placeholder="Subject" />
          </div>
          <div className="mb-3 contact-label">
            <input type="text" className="form-control message-input" id="message" placeholder="Your Message" />
          </div>
        </div>
        <button type="button" class="btn btn-success">Send message</button>
        </div>
      </div>

    </div>
  );
};

export default Contact;
