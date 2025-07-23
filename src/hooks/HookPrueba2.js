import React, { useEffect } from 'react';
function HookPrueba2() {
    // se debe indicar 
    useEffect(() => {
        alert("hola");     
        console.log("Componente montado");
    }, []);

    return (
        <div>hola</div>
    )
}
export default HookPrueba2;