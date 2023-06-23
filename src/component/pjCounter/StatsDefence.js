import React, { useContext, useState } from 'react'
import ButtonCounts from './ButtonCounts'


function StatsDefence( {dColor}) {
  const [stat, setStat] = useState(5)

  return (
    <div >
      <div className="stats-salud-block">
        <div>
          <div className="stats-salud stats-defence" style={{color:`lightblue`}}><i className="fa-solid fa-person-skating"></i> Esquiva<span><ButtonCounts  stat={stat} dead="fa-skull-crossbones"  colorDead="red" colorText={"lightblue"}/></span></div>
          <div className="stats-salud stats-defence" style={{color:`lightblue`}}><i className="fa-solid fa-hand-sparkles"></i> Resist.<span style={{color:"#00e5ff"}}><ButtonCounts stat={stat} dead="fa-droplet-slash" colorDead="lightblue" colorText={"lightblue"}/></span></div>
        </div>
        <div>
          <div className="stats-salud stats-defence"  style={{color:`lightblue`}}><i className="fa-solid fa-khanda"></i> Parada:<span style={{color:"burlywood"}}><ButtonCounts stat={stat} dead="fa-hands" colorDead="grey" colorText={"lightblue"}/></span></div>
          <div className="stats-salud stats-defence" style={{color:`lightblue`}}><i className="fa-solid fa-shield-halved"></i> Bloqueo<span style={{color:"rgb(247, 0, 255"}}><ButtonCounts stat={stat} dead="fa-shoe-prints" colorDead="grey" colorText={"lightblue"}/></span></div>
        </div>
      </div>
    </div>
  )
}

export default StatsDefence