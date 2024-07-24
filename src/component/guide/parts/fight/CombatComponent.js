import React from 'react'

function CombatComponent({nombre, texto, foto, textColor}) {
  return (
    <div>
          <div className='combat-disposition'>
            <img className='combat-images' src={foto} alt="Ataque y defensa"/>
            <div className="definicion-concepto"> <span className="nombre-concepto-blanco" style={{color:`${textColor}`}}>{nombre}</span>   {texto}
            </div> 
      </div>
    </div>
  )
}

export default CombatComponent