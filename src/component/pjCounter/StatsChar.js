import React, { useContext } from 'react'

function StatsChar() {
  
  return (
    <div className='d-flex stats-chars-box'>
        <div>
            <div style={{color:"rgb(237, 0, 254)"}} className="stats-chars">Suerte: <span ></span>  </div>
            <div  style={{color:"rgb(0, 246, 254)"}} className="stats-chars">Carisma: <span></span></div>
        </div>
        <div>
            <div style={{color:"rgb(255, 157, 0)"}}  className="stats-chars">Percepción: <span></span></div>
            <div style={{color:"red"}} className="stats-chars">Presencia: <span></span></div>
        </div>
        <div>
            <div style={{color:"rgb(4, 186, 4)"}} className="stats-chars">Cinestesia: <span></span></div>
            <div style={{color:"rgb(20, 86, 214)"}} className="stats-chars">Instinto: <span></span></div>
        </div>
    </div>
  )
}

export default StatsChar