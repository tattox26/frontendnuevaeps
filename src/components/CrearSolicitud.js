import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CrearSolicitud({ token }) {
  const [medicamentos, setMedicamentos] = useState([]);
  const [form, setForm] = useState({
    medicamento_id: '',
    numero_orden: '',
    direccion: '',
    telefono: '',
    correo: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/medicamentos', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
       
        setMedicamentos(res.data.medicamentos);
    })
    .catch(() => setError('Error al cargar medicamentos'));
  }, [token]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/solicitudes', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/solicitudes');
    } catch (err) {
      setError('Error al crear solicitud');
    }
  };

  return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-1">
                <button type="button" onClick={() => window.history.back()} className="btn btn-warning">Atras</button>
            </div>
            <div className="col-md-10">
                <h2>Crear Solicitud</h2>
            </div>
        </div>
      
      
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Medicamento</label>
          <select 
            className="form-select" 
            name="medicamento_id" 
            value={form.medicamento_id} 
            onChange={handleChange} 
            required>
                <option value="">Seleccione...</option>
                {medicamentos.map(m => (
                <option key={m.id} value={m.id}>{m.nombre}</option>
                ))}
          </select>
        </div>numero_orden
        <input 
            className="form-control mb-2" 
            minLength={3} 
            maxLength={30} 
            name="numero_orden" 
            placeholder="Número de orden" 
            onChange={handleChange} 
            value={form.numero_orden} 
            required/>
        <input 
            className="form-control mb-2" 
            name="direccion" 
            placeholder="Dirección" 
            minLength={3} 
            maxLength={50} 
            onChange={handleChange} 
            value={form.direccion} 
            required/>
        <input 
            className="form-control mb-2" 
            type="number" 
            maxLength={13} 
            minLength={6} 
            name="telefono" 
            placeholder="Teléfono" 
            onChange={handleChange} 
            value={form.telefono} 
            required/>
        <input 
            className="form-control mb-3" 
            name="correo" 
            type="email" 
            placeholder="Correo" 
            onChange={handleChange} 
            value={form.correo} 
            required/>
        <div className="row">
            <div className="col-md-12" style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn btn-success" >Guardar</button>      
            </div>
        </div>
      </form>
    </div>
  );
}

export default CrearSolicitud;
