import React from 'react'

function TalentTreeButtonComponent({nombre, btn, btnWidth, btnHeight}) {
  return (
<>
        {nombre && nombre !== "bulala" && 
          <button style={{width: `${btnWidth}`, height:`${btnHeight}`}} className={`talent-tree-btn ${btn}`}>{nombre}</button>
        }
        {!nombre && 
        <button className='talent-tree-btn-empty'></button>
        }
        {nombre === "bulala" && 
        <button className='talent-tree-btn-space'>eee</button>
        }
</>  
  )
}

export default TalentTreeButtonComponent