import React, { useState } from 'react';
import NavBar from './NavBar';
import mainpic from '../images/oasis-map.png';
import axios from 'axios';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageContent, setContent] = useState('');
  const [subject, setSubject] = useState('');
  const [showMessageSentAlert, setMessageSentAlert] = useState(false);

  const handleSendingMessage = () => {
    setMessageSentAlert(false);
    const data = { Name: name, Subject: subject, Email: email, MessageContent: messageContent };
    const apiUrl = 'https://localhost:7147/api/Contact/SendContactMessage';

    axios.post(apiUrl, data)
      .then(response => {
        console.log('Success:', response);
        setMessageSentAlert(true);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
//Czyszczenie pól
  const handleClearingFields = () => {
      setName('');
      setEmail('');
      setContent('');
      setSubject('');
  };

  const sendRequestAndClear = () => {
    handleSendingMessage();
    handleClearingFields();
  };


  return (
    <div >
      <NavBar />

      { showMessageSentAlert && (
        <div className="alert alert-success alert-contact" role="alert">
          Message has been sent successfully.
        </div>
      )}

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
              <input type="text" 
                     className="form-control" 
                     id="name" 
                     placeholder="Name" 
                     value={name}
                     onChange={e => setName(e.target.value)} 
              />
            </div>
            <div className="mb-3 contact-label">
              <input type="text" 
                     className="form-control" 
                     id="email" 
                     value={email}
                     placeholder="Email Address" 
                     onChange={e => setEmail(e.target.value)} 
              />
            </div>
            <div className="mb-3 contact-label">
              <input type="text" 
                     className="form-control" 
                     id="subject" 
                     value={subject}
                     placeholder="Subject" 
                     onChange={e => setSubject(e.target.value)} 
              />
            </div>
            <div className="mb-3 contact-label">
              <input type="text" 
                     className="form-control message-input" 
                     id="message" 
                     value={messageContent}
                     placeholder="Your Message" 
                     onChange={e => setContent(e.target.value)
                     } 
              />
            </div>
          </div>
          <button type="button"
                  class="btn btn-success contact-button" 
                  onClick={ sendRequestAndClear }
                  >
                  Send message
          </button>
        </div>
      </div>

    </div>
  );
};

export default Contact;
