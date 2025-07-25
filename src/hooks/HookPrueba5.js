import { useState,useMemo } from 'react';

function HookPrueba5() {
  const [numero, setNumero] = useState(0);
  const [contador, setContador] = useState(0);

  // Calculamos el cuadrado del número usando useMemo
  const cuadrado = useMemo(() => {
    console.log('Calculando cuadrado...');
    return numero * numero;
  }, [numero]);

  return (
    <div>
      <h2>useMemo Ejemplo Simple</h2>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
      />
      <p>Cuadrado del número: {cuadrado}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar contador ({contador})
      </button>
    </div>
  );
}


export default HookPrueba5;