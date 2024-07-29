import React, { useState, useEffect } from 'react';

function TalentTreeButtonComponent({ points, nombre, vertical, horizontal, empty, btn, btnWidth, btnHeight, btnMargin, talentToSelect, filled }) {
  const [selected, setSelected] = useState(points);

  useEffect(() => {
    const savedState = localStorage.getItem(nombre);
    if (savedState !== null) {
      setSelected(JSON.parse(savedState));
    }
  }, [nombre]);
  const handleClick = () => {
    const newState = !selected;
    setSelected(newState);
    localStorage.setItem(nombre, JSON.stringify(newState));
  };
  return (
    <>
      {nombre && !horizontal &&  !vertical && !empty &&
        <button style={{ width: btnWidth, height: btnHeight, margin:  btnMargin }} onClick={handleClick} 
        className={selected ? "talent-tree-btn talent-selected" : `${talentToSelect} talent-tree-btn ${btn}`}>{nombre}</button>
      }
      {horizontal &&
        <div style={{ width: btnWidth, height: btnHeight, margin:  btnMargin }}  className={ selected ? `talent-tree-btn-line-hor talent-tree-filled-hor` : `talent-tree-btn-line-hor`}></div>
      }
      {vertical &&
        <div style={{ width: btnWidth, height: btnHeight, margin:  btnMargin}}  className={ selected ? `talent-tree-btn-line-ver talent-tree-filled-ver` : `talent-tree-btn-line-ver`}></div>
      }

    </>
  );
}
export default TalentTreeButtonComponent
