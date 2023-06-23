import React, { useContext, useState } from 'react'
import ButtonCounts from './ButtonCounts'


function StatsDefence( {dColor}) {
  const [stat, setStat] = useState(5)

  return (
    <div >
      <div className="stats-salud-block">
        <div>
          <div className="stats-salud" style={{color:`lightgreen`}}>Esquiva<span><ButtonCounts  stat={stat} dead="fa-skull-crossbones"  colorDead="red" colorText={"rgb(0, 245, 0)"}/></span></div>
          <div className="stats-salud" style={{color:`lightblue`}}>Resistencia<span style={{color:"#00e5ff"}}><ButtonCounts stat={stat} dead="fa-droplet-slash" colorDead="lightblue" colorText={"#00e5ff"}/></span></div>
        </div>
        <div>
          <div className="stats-salud"  style={{color:`yellow`}}>Parada:<span style={{color:"burlywood"}}><ButtonCounts stat={stat} dead="fa-hands" colorDead="grey" colorText={"burlywood"}/></span></div>
          <div className="stats-salud" style={{color:`purple`}}>Bloqueo<span style={{color:"rgb(247, 0, 255"}}><ButtonCounts stat={stat} dead="fa-shoe-prints" colorDead="grey" colorText={"rgb(247, 0, 255"}/></span></div>
        </div>
      </div>
    </div>
  )
}

export default StatsDefence