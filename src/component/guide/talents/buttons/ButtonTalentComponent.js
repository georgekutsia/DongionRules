import React from 'react'

function ButtonTalentComponent({handle, color, plan, name}) {
  return (
        <button  onClick={handle} style={{color:`${color}`}} className={plan? 'talent-name-selected':'talent-name'}>{name}</button>
  )
}

export default ButtonTalentComponent