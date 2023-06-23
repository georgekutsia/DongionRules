import React, { useContext, useState } from 'react'
import ButtonCounts from "./ButtonCounts";


function StatsDam() {
  const [stat, setStat] = useState(5)

  return (
      <div className="stats-salud-block">
        <div>
          <div className="stats-salud stats-damage" style={{color:`Red`}}><i className="fa-solid fa-head-side-cough-slash"></i> Físico<span><ButtonCounts  stat={stat} dead=""  colorDead="burlywood" colorText={"salmon"}/></span></div>
          <div className="stats-salud stats-damage" style={{color:`Red`}}><i className="fa-solid fa-head-side-cough-slash"></i> Mágico<span style={{color:"#00e5ff"}}><ButtonCounts stat={stat} dead="" colorDead="burlywood" colorText={"salmon"}/></span></div>
          <div className="stats-salud stats-damage" style={{color:`Red`}}><i className="fa-solid fa-head-side-cough-slash"></i> Dist.<span style={{color:"red"}}><ButtonCounts stat={stat} dead="" colorDead="burlywood" colorText={"salmon"}/></span></div>
        </div>
        <div>
          <div className="stats-salud stats-damage"  style={{color:`burlywood`}}><i className="fa-solid fa-crosshairs"></i> Físico:<span style={{color:"burlywood"}}><ButtonCounts stat={stat} dead="" colorDead="burlywood" colorText={"burlywood"}/></span></div>
          <div className="stats-salud stats-damage"  style={{color:`burlywood`}}><i className="fa-solid fa-crosshairs"></i> Mágico:<span style={{color:"burlywood"}}><ButtonCounts stat={stat} dead="" colorDead="burlywood" colorText={"burlywood"}/></span></div>
          <div className="stats-salud stats-damage" style={{color:`burlywood`}}><i className="fa-solid fa-crosshairs"></i> Dist.<span style={{color:"burlywood"}}><ButtonCounts stat={stat} dead="" colorDead="burlywood" colorText={"burlywood"}/></span></div>
        </div>
      </div>
  )
}

export default StatsDam