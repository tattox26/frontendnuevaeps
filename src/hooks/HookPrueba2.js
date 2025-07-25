import React, { useEffect } from 'react';
function HookPrueba2() {
    // se debe indicar 
    useEffect(() => {
        //alert("useEffect");     
        console.log("Componente useEffect montado");
    }, []);

    return (
        <div>HOOK 2 useEffect</div>
    )
}
export default HookPrueba2;