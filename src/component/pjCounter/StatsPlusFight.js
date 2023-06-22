import React, { useContext } from 'react'

function StatsPlusFight() {
  // const stats = useContext(0)
  // const st = stats.pj.stats
  // const eq = stats.pj.equipped
  
  // const speeded =  Math.trunc(eq.move / 3)
  // const plusSpeed = st.speed + speeded
  //     let speedColor = "grey"
  //     if(plusSpeed > 0){
  //       speedColor = "green"
  //     }
  return (
    <div className='d-flex'>
      <div className="stats-damage-block">
          <div style={{color:`blue`}} className="stats-damage">Velocidad: <span></span></div>
          <div className="stats-damage">Precisión: <span></span></div>
          <div className="stats-damage">Marcialidad: <span></span></div>
      </div>
      <div className="stats-damage-block">
          <div className="stats-damage">Reflejos: <span></span>  </div>
          <div className="stats-damage">Firmeza: <span></span></div>
          <div className="stats-damage">Temple: <span></span></div>
      </div>
    </div>
  )
}

export default StatsPlusFight