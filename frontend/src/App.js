import React from 'react';
import './App.css';
import Navbar from './components/navbar/NavBar';
import SignUpForm from './components/auth/SignUpForm';
import LogInForm from './components/auth/LogInForm';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const location = useLocation();
  const user = localStorage.getItem('token');

  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoute user={user}><Home /></ProtectedRoute>} />
        <Route exact path="/sign-up" element={<SignUpForm />} />
        <Route exact path="/log-in" element={<LogInForm />} />

        <Route path='users/:id' element={<ProtectedRoute user={user}><Profile /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
