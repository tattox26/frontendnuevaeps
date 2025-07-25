import React, { useEffect,useState, useCallback } from 'react';

function HookPrueba6() {
    const [contador, setContador] = useState(0);

    // Esta función está memorizada con useCallback
    const funcionMemorizada = useCallback(() => {
        console.log('Hola desde la función memorizada');
    }, []);

    // Esta función NO está memorizada
    const funcionNormal = () => {
        console.log('Hola desde la función normal');
    };

    // Este efecto muestra si la función cambia
    useEffect(() => {
        console.log('📌 función MEMORIZADA es NUEVA:', funcionMemorizada);
    }, [funcionMemorizada]);

    useEffect(() => {
        console.log('⚠️ función NORMAL es NUEVA:', funcionNormal);
    }, [funcionNormal]);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={funcionMemorizada}>Llamar función memorizada</button>
      <button onClick={funcionNormal}>Llamar función normal</button>
    </div>

  );
}

export default HookPrueba6;