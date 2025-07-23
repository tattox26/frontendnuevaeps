import React, { useState } from 'react';
function HookPrueba1() {
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
export default HookPrueba1;