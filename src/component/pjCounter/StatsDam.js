import React, { useContext, useState } from 'react'
import ButtonCounts from "./ButtonCounts";


function StatsDam() {
  const [stat, setStat] = useState(5)

  return (
      <div className="stats-salud-block">
        <div>
          <div className="stats-salud stats-damage" style={{color:`Red`}} >Daño Físico<span><ButtonCounts  stat={stat} dead=""  colorDead="grey" colorText={"rgb(0, 245, 0)"}/></span></div>
          <div className="stats-salud stats-damage" style={{color:`Red`}}>Daño Mágico<span style={{color:"#00e5ff"}}><ButtonCounts stat={stat} dead="" colorDead="grey" colorText={"#00e5ff"}/></span></div>
          <div className="stats-salud stats-damage" style={{color:`Red`}}>Daño Dist.<span style={{color:"#00e5ff"}}><ButtonCounts stat={stat} dead="" colorDead="grey" colorText={"#00e5ff"}/></span></div>
        </div>
        <div>
          <div className="stats-salud stats-damage"  style={{color:`Grey`}}>Ac. Físico:<span style={{color:"burlywood"}}><ButtonCounts stat={stat} dead="" colorDead="grey" colorText={"burlywood"}/></span></div>
          <div className="stats-salud stats-damage"  style={{color:`Grey`}}>Ac. Mágico:<span style={{color:"burlywood"}}><ButtonCounts stat={stat} dead="" colorDead="grey" colorText={"burlywood"}/></span></div>
          <div className="stats-salud stats-damage" style={{color:`Grey`}}>Ac. Dist.<span style={{color:"rgb(247, 0, 255"}}><ButtonCounts stat={stat} dead="" colorDead="grey" colorText={"rgb(247, 0, 255"}/></span></div>
        </div>
      </div>
  )
}

export default StatsDam