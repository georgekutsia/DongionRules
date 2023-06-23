import React from 'react';

function StatsPlusFight() {
  return (
    <div className='d-flex stats-chars-box'>
      <div>
        <div className="stats-damage">Velocidad: <span contentEditable="true">0</span></div>
        <div className="stats-damage">Reflejos: <span contentEditable="true">0</span></div>
      </div>
      <div>
        <div className="stats-damage">Precisión: <span contentEditable="true">0</span></div>
        <div className="stats-damage">Firmeza: <span contentEditable="true">0</span></div>
      </div>
      <div>
        <div className="stats-damage">Marcialidad: <span contentEditable="true">0</span></div>
        <div className="stats-damage">Temple: <span contentEditable="true">0</span></div>
      </div>
    </div>
  );
}

export default StatsPlusFight;
