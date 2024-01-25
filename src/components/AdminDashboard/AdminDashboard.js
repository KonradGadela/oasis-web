import React from 'react';
import ReservationTable from './ReservationTable'; 
import ContactMessageTable from './ContactMessageTable';
import NavBar from '../NavBar';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <h1 className='dashboard-title'>Admin Dashboard</h1>
        <ReservationTable />
        <ContactMessageTable />
      </div>
    </div>
  );
};

export default Dashboard;
