
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Solicitudes from './components/Solicitudes';
import CrearSolicitud from './components/CrearSolicitud';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const saveToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setToken={saveToken} />} />
        <Route 
          path="/solicitudes" 
          element={token ? <Solicitudes token={token} logout={logout} /> : <Navigate to="/login" />} 
        />
        <Route path="/crear" element={<CrearSolicitud token={token} />} />
        <Route path="*" element={<Navigate to={token ? "/solicitudes" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;