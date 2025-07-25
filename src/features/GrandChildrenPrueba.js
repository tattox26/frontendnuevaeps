import  { useContext } from 'react';
import  { UsuarioContext }    from '../hooks/HookUseContext';
/*
function GrandChildrenPrueba() {
    const { user } = useContext(UserContext );
    return (
        <p>Nombre: {user.name}</p>        
    );
};*/
const GrandChildrenPrueba = () => {
  const obj  = useContext(UsuarioContext);
  console.log(obj.user.name);
  return <p>Nombre: {obj.user.name}</p>;
};
export default GrandChildrenPrueba;