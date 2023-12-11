import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Rooms from './components/Rooms/Rooms';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/rooms" element={<Rooms />} />

      </Routes>
    </Router>
  );
};

export default App;

