import React, { useEffect } from 'react';
/* 
eEffect 
Forma en la que React hace algo después de que la pantalla se muestra o cambia.
Se usa para tareas como cargar datos, esperar algo, o hacer seguimiento de cambios.    
*/
function HookUseEffect() {
    // se debe indicar 
    useEffect(() => {
        //alert("useEffect");     
        console.log("Componente useEffect montado");
    }, []);

    return (
        <div>HOOK 2 useEffect</div>
    )
}
export default HookUseEffect;