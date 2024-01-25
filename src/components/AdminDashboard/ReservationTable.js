import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
const ReservationTable = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [forceUpdate, setForceUpdate] = useState(0);
  const user = useSelector(state => state.user);
  useEffect(() => {
    axios.get("https://localhost:7147/api/AdminPanel/GetReservations",{
        headers: {
            Authorization: `Bearer ${user.jwt}` 
    }}
    )
        .then((response) => {
            console.log(response.data);
            setReservations(response.data);
        })
        .catch((error) => {
            console.error("Error fetching room data:", error);
        }).finally(() => {setLoading(false);});
        
}, [forceUpdate]);

const handleRejectClick = (id) => {
  setLoading(true);
  console.log(user.jwt);
  axios.post(`https://localhost:7147/api/AdminPanel/DeclineReservation?id=${id}`, null,
  {
    headers: {
      Authorization: `Bearer ${user.jwt}` 
    }
  })
    .then((response) => {
      setForceUpdate(forceUpdate + 1);
    })
    .catch((error) => {
      console.error("Error fetching room data:", error);
    })
    .finally(() => {
      setLoading(false);
    });
};

const handleAcceptClick = (id) => {
  setLoading(true);
  console.log(user.jwt);
  axios.post(`https://localhost:7147/api/AdminPanel/AcceptReservation?id=${id}`,null,
  {
    headers: {
      Authorization: `Bearer ${user.jwt}` 
    },
  }
  )
    .then((response) => {
      setForceUpdate(forceUpdate + 1);
    })
    .catch((error) => {
      console.error("Error fetching room data:", error);
    })
    .finally(() => {
      setLoading(false);
    });
};

  return (
    <div>
      <h2>Reservations</h2>

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
              <th>ID</th>
              <th>User Name</th>
              <th>Room Name</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Guests</th>
              <th>Price</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Comment</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map(reservation => (
              <ReservationRow key={reservation.Id} reservation={reservation}  
              handleAcceptClick={handleAcceptClick} handleRejectClick={handleRejectClick} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const ReservationRow = ({ reservation, handleAcceptClick, handleRejectClick }) => {
  function translateStatus(status) {
    switch (status) {
      case 1:
        return "Pending";
      case 2:
          return "Accepted";
      case 3:
        return "Rejected";
      default:
        return "Unknown";
    }
  }
  return (
    <tr>
      <td>{reservation.id}</td>
      <td>{reservation.userName}</td>
      <td>{reservation.roomName}</td>
      <td>{reservation.checkIn}</td>
      <td>{reservation.checkOut}</td>
      <td>{reservation.guests}</td>
      <td>{reservation.price}</td>
      <td>{translateStatus(reservation.status)}</td>
      <td>{reservation.payment}</td>
      <td>{reservation.comment}</td>  
      {reservation.status === 1 && (
        <td>
          <button id='button-accept' className="btn btn-primary admin-button-grid" onClick={() => handleAcceptClick(reservation.id)} >Accept</button>
          <button id='button-reject' className="btn btn-danger admin-button-grid" onClick={() => handleRejectClick(reservation.id)} >Reject</button>
        </td>
      )}
      {reservation.status === 2 && (
        <td>
          <button id='button-reject' className="btn btn-danger admin-button-grid" onClick={() => handleRejectClick(reservation.id)} >Reject</button>
        </td>
      )}
      {reservation.status === 3 && (
        <td>
          <button id='button-accept' className="btn btn-primary admin-button-grid" onClick={() => handleAcceptClick(reservation.id)} >Accept</button>
        </td>
      )}
    </tr>
  );
};

export default ReservationTable;
