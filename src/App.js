import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Rooms from './components/Rooms/Rooms';
import Contact from './components/Contact';
import Protected from './components/Protected';
import Dashboard from './components/AdminDashboard/AdminDashboard';
import Room from './components/Room'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Protected><Dashboard/></Protected>} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;

