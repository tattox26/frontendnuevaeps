import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './errores/ErrorMessage'

function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/auth/login', { username, password });
      setToken(res.data.access_token);      
      localStorage.setItem('token', res.data.access_token)
      localStorage.setItem('usuario', res.data.username)
      navigate('/solicitudes');
    } catch (err) {
      console.error('Error al obtener los datos:', err);
      console.log(err.code)       
      setError(err);      
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Usuario</label>
          <input
            id="username"
            type="text"
            className="form-control"
            placeholder="Usuario"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        <ErrorMessage error={error} />
      </form>
    </div>
  );
}

export default Login;
