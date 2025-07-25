import React, { useReducer, useState } from 'react';

const initialState = [];

function reduce(state, action) {
    switch (action.type) {
        case 'agregar':
        return [...state, { id: Date.now(), texto: action.payload, completada: false }];
        case 'eliminar':
        return state.filter((tarea) => tarea.id !== action.payload);
        case 'toggle':
        return state.map((tarea) =>
            tarea.id === action.payload ? { ...tarea, completada: !tarea.completada } : tarea
        );
        default:
        return state;
    }
}

// Componente
function HookPrueba4() {
  const [tareas, dispatch] = useReducer(reduce, initialState);
  const [input, setInput] = useState('');

  const handleAgregar = () => {
    if (input.trim() === '') return;
    dispatch({ type: 'agregar', payload: input });
    setInput('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2> Lista de Tareas</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button onClick={handleAgregar}>Agregar</button>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id} style={{ marginTop: 10 }}>
            <span
              onClick={() => dispatch({ type: 'toggle', payload: tarea.id })}
              style={{
                textDecoration: tarea.completada ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {tarea.texto}
            </span>
            <button onClick={() => dispatch({ type: 'eliminar', payload: tarea.id })}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HookPrueba4;