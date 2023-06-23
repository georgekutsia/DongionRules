import React, { useState } from 'react';
import { BigMonster } from '../../component';

function CounterScreen() {
  const [monsters, setMonsters] = useState([]);
  const r = Math.floor(Math.random() * 130)
  const g = Math.floor(Math.random() * 130)
  const b = Math.floor(Math.random() * 130)
  
  const addMonster = () => {
    setMonsters([...monsters, <BigMonster r={r} g={g} b={b} position={monsters.length +1} key={monsters.length} onRemove={() => removeMonster(monsters.length)} />]);
  };

  const removeMonster = (index) => {
    setMonsters(monsters.filter((_, i) => i !== index));
  };
  const removeAllMonsters = () => {
    setMonsters([]);
  };
  
  return (
    <>
    <div className='btn-monstruos'>
      <button className='botón-añadir' onClick={addMonster}>Añadir Criatura</button>
      <button className='botón-borrar' onClick={removeAllMonsters}>Borrar Todos</button>
    </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {monsters.map((monster, index) => (
          <div key={index} style={{ marginRight: '10px', marginBottom: '10px', position: 'relative' }}>
            {monster}
            <button className='botón-borrar-monstruo' onClick={() => removeMonster(index)}><i className="fa-regular fa-face-dizzy"></i></button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CounterScreen;
