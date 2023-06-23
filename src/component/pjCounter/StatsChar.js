import React, { useContext } from 'react'

function StatsChar() {
  
  return (
    <div className='stats-chars-box'>
        <div>
            <div style={{color:"rgb(237, 0, 254)"}} className="stats-chars">Suerte: <span contentEditable="true">0</span>  </div>
            <div  style={{color:"rgb(0, 246, 254)"}} className="stats-chars">Carisma: <span contentEditable="true">0</span></div>
        </div>
        <div>
            <div style={{color:"rgb(255, 157, 0)"}}  className="stats-chars">Percepción: <span contentEditable="true">0</span></div>
            <div style={{color:"red"}} className="stats-chars">Presencia: <span contentEditable="true">0</span></div>
        </div>
        <div>
            <div style={{color:"rgb(4, 186, 4)"}} className="stats-chars">Cinestesia: <span contentEditable="true">0</span></div>
            <div style={{color:"rgb(20, 86, 214)"}} className="stats-chars">Instinto: <span contentEditable="true">0</span></div>
        </div>
    </div>
  )
}

export default StatsChar

