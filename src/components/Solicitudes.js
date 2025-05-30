import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const usuario = localStorage.getItem('usuario');
//usuario = "asd";
function Solicitudes({ token, logout }) {
    
  const [solicitudes, setSolicitudes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 5;
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
    
  const getSolicitudes = async (pageNum = 1) => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/solicitudes', {
        headers: { Authorization: `Bearer ${token}` },
        params: { page: pageNum, per_page: perPage },
      });
      setSolicitudes(res.data.solicitudes);
      setTotal(res.data.total);
      setPage(res.data.page);
    } catch (err) {
      if (err.response?.status === 401) logout();
      else setError('Error al cargar solicitudes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSolicitudes(page);    
  }, [page]);

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="container mt-4">      
         <div className="row">
            <div className="col-md-2">
                <div className="form-group">                        
                    <h2>Solicitudes</h2>
                </div>
            </div>
            <div className="col-md-5">
                <div className="form-group">  
                    <button className="btn btn-primary" onClick={() => navigate('/crear')}>Crear nueva solicitud</button>
                </div>
            </div>
            <div className="col-md-5" style={{ textAlign: 'right' }}> 
                <div className="form-group">          
                    <label>{<p>Bienvenido {usuario} !!</p>}</label>                              
                    <button className="btn btn-danger" onClick={logout}>Cerrar sesión</button>
                </div>
            </div>            
        </div>        
      

      {error && <div className="alert alert-danger">{error}</div>}

      {solicitudes.length === 0 ? (
        <div className="alert alert-info">No hay solicitudes</div>
        ) : (
        <>
            <div className="mb-2">
            <small className="text-muted">
                Mostrando {solicitudes.length > 0 ? ((page - 1) * perPage + 1) : 0} a {((page - 1) * perPage) + solicitudes.length} de {total} registros
            </small>
            </div>
            <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle">
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Medicamento ID</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Correo Electrónico</th>
                    <th>Número de Orden</th>
                </tr>
                </thead>
                <tbody>
                {solicitudes.map(s => (
                    <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.medicamento_nombre}</td>
                    <td>{s.direccion || 'N/A'}</td>
                    <td>{s.telefono || 'N/A'}</td>
                    <td>{s.correo || 'N/A'}</td>
                    <td>{s.numero_orden || 'N/A'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </>
        )}


      <div className="d-flex justify-content-center align-items-center my-3">
        <button
          className="btn btn-primary me-3"
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Anterior
        </button>
        <span>Página {page}</span>
        <button
          className="btn btn-primary ms-3"
          onClick={() => setPage(p => (p * perPage < total ? p + 1 : p))}
          disabled={page * perPage >= total}
        >
          Siguiente
        </button>
      </div>
      

    </div>
  );
}

export default Solicitudes;
