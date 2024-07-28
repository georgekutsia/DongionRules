import React, { useState } from 'react'

function TalentTreeButtonComponent({nombre, btn, btnWidth, btnHeight, talentToSelect}) {
  const [selected, setSelected] = useState(false)
  
  
  return (
<>
        {nombre  && nombre !== "lineHor" &&nombre !== "lineVer" && nombre !== "empty" && 
          <button style={{width: `${btnWidth}`, height:`${btnHeight}`}} onClick={()=>setSelected(!selected)} className={selected ? "talent-selected" :` ${talentToSelect} talent-tree-btn ${btn}`}>{nombre}</button>
        }
        {nombre &&  nombre === "lineHor" &&
        <button  className='talent-tree-btn-line-hor'></button>
        }
        {nombre &&  nombre === "lineVer" &&
        <button  className='talent-tree-btn-line-ver'></button>
        }
        {nombre && nombre === "empty" && 
        <button style={{width: `${btnWidth}`, height:`${btnHeight}`}}   className='talent-tree-btn-space'></button>
        }
</>  
  )
}

export default TalentTreeButtonComponent