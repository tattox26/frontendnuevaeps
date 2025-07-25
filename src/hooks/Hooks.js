import React, { useState, useEffect } from 'react';
/* DIFERENTES TIPOS DE HOOKS mayor a reac 12.5  ahora esta en reac19
* useState -> Cambio de estados, se pueden crear muchos estados y reutilizar
* useEffect -> es una funcion para inicializar el ciclo de la aplicacion, cuando se desmonte o cuando quiero que tenga un cambio  
* useContext -> sirve para pasar parametros del padre al hijo y se pueda compartir, pero antes debe crearse con createContext()
* useRef => referencia para utilizar un valor del componente para cualqiuer componente 
* useReducer => utiñoza initialState = (count, 0 ); dispatch= rempleaza el set por decirlo asi (accion) 
* useMemo => merjoara el performance de la plaicion, renderiza el componente y no se vuelva a llamar la funcion solo un valor 
* useCallback => pareceido a memo pero este memoria una funcion 
* useLayoutEffect => terminar de realizaro toda lafucnion hasta que termine todo, osino no se muestra nada
 Otros hooks de React:
useRef
* Guarda un valor que no causa re-render si cambia.
Sirve para referencias a elementos del DOM o guardar datos entre renders sin perderlos.
useImperativeHandle
* Se usa con forwardRef. Permite personalizar lo que se expone cuando otro componente usa una referencia (ref) a tu componente.
useDebugValue
* Solo sirve para ayudar durante la depuración.
Te permite mostrar información útil en las herramientas de desarrollo de React.
useId (desde React 18)
* Genera un ID único, útil para campos de formularios accesibles.
Sirve para evitar conflictos de IDs cuando React renderiza en el servidor y el cliente.
useTransition (desde React 18)
* Permite marcar actualizaciones como “menos urgentes”.
Mejora la experiencia del usuario haciendo que la interfaz no se congele.
useDeferredValue (desde React 18)
* Similar a useTransition, sirve para retrasar el uso de un valor hasta que React tenga tiempo.
useInsertionEffect
* Muy parecido a useLayoutEffect, pero pensado para bibliotecas que insertan estilos CSS.
Se ejecuta antes de que el navegador pinte la pantalla.

*/

function Hooks() {

  
}
export default Hooks;