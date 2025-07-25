import React, { useState } from 'react';
/*  
useState 
Forma en la que React recuerda información mientras usas una aplicación.
Sirve para guardar y cambiar valores que pueden ir variando, como un número, un texto, una lista, etc.
*/
function HookUseState() {
    const [cantidad, setCantidad] = useState(0);
    //const [error, seterror] = useState(0); 
    function handleClick(valor) {
        const suma = cantidad + valor
        if( suma >= 0){
            setCantidad(suma);
        }
    }
    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <button type="submit" onClick={() => handleClick(1)} className="btn btn-primary w-100">Incrementar</button>
            <button type="submit" onClick={() => handleClick(-1)} className="btn btn-primary w-100">Desincrementar</button>
            {/* <button type="submit" onClick={()=>setCantidad(cantidad - 1)} className="btn btn-primary w-100">Desincrementar</button> */}
            <input
                id="incremento"
                type="text"
                className="form-control"
                placeholder="0"
                value={cantidad}
                required
            /> 
            {/* <ErrorMessage error={error} /> */}
        </div> 
    )
}
export default HookUseState;