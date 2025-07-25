import { useState, createContext } from 'react';
import ChildrenPrueba from '../features/ChildrenPrueba.js';

export const UsuarioContext  = createContext();
const HookPrueba3 = () => {
    const [user, setUser] = useState({ name: 'Leonardo',email:'tattox26@hotmail.com' });
    return (
        <UsuarioContext.Provider value={{ user, setUser }}>
            <ChildrenPrueba/>
        </UsuarioContext.Provider>
    );
};
export default HookPrueba3;