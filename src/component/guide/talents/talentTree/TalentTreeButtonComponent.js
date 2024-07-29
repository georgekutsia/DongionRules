import React, { useState, useEffect } from 'react';

function TalentTreeButtonComponent({ actionHand, activated, points, nombre, vertical, horizontal, empty, btn, btnWidth, btnHeight, btnMargin, talentToSelect }) {
  const [selected, setSelected] = useState(points);

  useEffect(() => {
    const savedState = localStorage.getItem(nombre);
    if (savedState !== null) {
      setSelected(JSON.parse(savedState));
    }
  }, [nombre]);

  const handleClick = () => {
    actionHand(selected, setSelected, nombre)
  };

  return (
    <>
      {nombre && !horizontal && !vertical && !empty &&
        <button  style={{ width: btnWidth, height: btnHeight, margin: btnMargin }}  onClick={handleClick}  className={selected || activated ?  `${talentToSelect} talent-tree-btn ${btn}` :" talent-tree-btn talent-selected" }>
          {nombre}
        </button>
      }
      {horizontal &&
        <div  style={{ width: btnWidth, height: btnHeight, margin: btnMargin }}   className={activated || selected  ? `talent-tree-btn-line-hor talent-tree-filled-hor` : `talent-tree-btn-line-hor`}></div>
      }
      {vertical &&
        <div  style={{ width: btnWidth, height: btnHeight, margin: btnMargin }}   className={activated || selected  ? `talent-tree-btn-line-ver talent-tree-filled-ver` : `talent-tree-btn-line-ver`}></div>
      }
    </>
  );
}

export default TalentTreeButtonComponent;
