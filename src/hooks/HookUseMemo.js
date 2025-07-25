import { useState,useMemo } from 'react';
/* 
useMemo 
Fforma de evitar hacer cálculos innecesarios en tu app.
Sirve para guardar un resultado que ya se calculó, y volverlo a usar si los datos no han cambiado.
*/
function HookUseMemo() {
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


export default HookUseMemo;