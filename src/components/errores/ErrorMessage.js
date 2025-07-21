
import React from 'react';

const mensajesPorCodigo = {
    ECONNABORTED: 'La solicitud tardó demasiado. Intenta de nuevo.',
    ERR_NETWORK: 'Error de red. Verifica tu conexión a internet.',
    ERR_BAD_REQUEST: 'La solicitud no fue válida.',
    ERR_UNAUTHORIZED: 'No estás autorizado para realizar esta acción.',
    ERR_FORBIDDEN: 'No tienes permisos para acceder a este recurso.',
    ERR_NOT_FOUND: 'Recurso no encontrado.',
    ERR_INTERNAL_SERVER: 'Error del servidor. Intenta más tarde.',
    ERR_CANCELED: 'La solicitud fue cancelada.',
    ERR_BAD_RESPONSE: 'Respuesta inesperada del servidor.',
    ERR_INVALID_URL: 'La URL de la solicitud es inválida.',
};
const ErrorMessage = ({ error }) => {
  if (!error) return null;
  const mensaje =
    mensajesPorCodigo[error.code] ||
    error.message ||
    'Ocurrió un error inesperado.';

  return (
    <div className="alert alert-danger mt-3" role="alert">
      <strong>{mensaje}</strong>
    </div>
  );
};

export default ErrorMessage;

