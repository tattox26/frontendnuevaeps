import { useState, createContext } from 'react';
import ChildrenPrueba from '../features/ChildrenPrueba.js';
/* 
createContext 
Forma en la que React recuerda información mientras usas una aplicación.
Sirve para guardar y cambiar valores que pueden ir variando, como un número, un texto, una lista, etc.
*/
export const UsuarioContext  = createContext();
const HookUseContext = () => {
    const [user, setUser] = useState({ name: 'Leonardo',email:'tattox26@hotmail.com' });
    return (
        <UsuarioContext.Provider value={{ user, setUser }}>
            <ChildrenPrueba/>
        </UsuarioContext.Provider>
    );
};
export default HookUseContext;