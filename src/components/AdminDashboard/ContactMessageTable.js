import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
const ContactMessageTable = () => {
  const [contactMessages, setContactMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.user);
  
  useEffect(() => {
    axios.get("https://localhost:7147/api/AdminPanel/GetUserMessages",{
        headers: {
            Authorization: `Bearer ${user.jwt}` 
    }}
    )
        .then((response) => {
            console.log(response.data);
            setContactMessages(response.data);
        })
        .catch((error) => {
            console.error("Error fetching room data:", error);
        }).finally(() => {setLoading(false);});
        
}, []);

  return (
    <div>
      <h2>Contact Messages</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading...</p>
        </div>
      ) : (
        <table className="table table-striped admin-dashboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Email</th>
              <th>Message Content</th>
            </tr>
          </thead>
          <tbody>
            {contactMessages.map(message => (
              <ContactMessageRow key={message.Email} message={message} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const ContactMessageRow = ({ message }) => {
  return (
    <tr>
      <td>{message.name}</td>
      <td>{message.subject}</td>
      <td>{message.email}</td>
      <td>{message.messageContent}</td>
    </tr>
  );
};

export default ContactMessageTable;
