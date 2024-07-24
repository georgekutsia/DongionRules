import React from 'react'

function CombatTitleComponent({titulo, texto, descriptionColor}) {
  return (
    <div>
              <h1  align="center" className='titulo-combate' style={{color:`${descriptionColor}`}}>{titulo}</h1>
              <div align="center"><span className='texto-resaltado-brillante' style={{color:`${descriptionColor}`}}>{texto}</span></div>
    </div>
  )
}

export default CombatTitleComponent