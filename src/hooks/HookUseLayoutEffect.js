import React, { useState, useRef, useLayoutEffect } from 'react';
/*  
 !! useLayoutEffect !!
  se ejecuta antes de que el navegador pinte la pantalla, es decir, 
  justo después del renderizado, pero antes de que el usuario vea los cambios.
*/
function HookUseLayoutEffect() {
  const [moduloActivo, setModuloActivo] = useState('Resumen');
  const sidebarRef = useRef(null);

  // Ajusta el ancho del sidebar según el contenido antes de pintar
  useLayoutEffect(() => {
    const el = sidebarRef.current;
    if (el) {
      const anchoNecesario = el.scrollWidth;
      el.style.width = `${anchoNecesario}px`;
    }
  }, [moduloActivo]);

  const contenidos = {
    Resumen: 'Bienvenido al panel de control  Uso de useLayoutEffect ',
    Configuración: 'Opciones avanzadas del sistema, seguridad y usuarios.',
    Reportes: 'Estadísticas detalladas, gráficos y registros.',
  };

  return (
    <div style={{ display: 'flex', height: '200px', border: '1px solid #ccc' }}>     
      <div
        ref={sidebarRef}
        style={{
          background: '#f0f0f0',
          padding: '20px',
          transition: 'width 0.3s',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <button onClick={() => setModuloActivo('Resumen')}>Resumen</button><br />
        <button onClick={() => setModuloActivo('Configuración')}>Configuración</button><br />
        <button onClick={() => setModuloActivo('Reportes')}>Reportes</button>
      </div>

      <div style={{ flexGrow: 1, padding: '20px' }}>
        <h2>{moduloActivo}</h2>
        <p>{contenidos[moduloActivo]}</p>
      </div>
    </div>
  );
}

export default HookUseLayoutEffect;