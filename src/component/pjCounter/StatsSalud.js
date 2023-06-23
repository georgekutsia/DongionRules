import React, { useContext } from "react";
import { useState } from "react";
import ButtonCounts from "./ButtonCounts";

function StatsSalud() {

   const [stat, setStat] = useState(5)

  return (
    <div >
      <div className="stats-salud-block">
        <div>
          <div className="stats-salud" style={{color:`lightgreen`}}>Vida<span><ButtonCounts stat={stat} dead="fa-skull-crossbones"  colorDead="red" colorText={"rgb(0, 245, 0)"}/></span>  </div>
          <div className="stats-salud" style={{color:`lightblue`}}>Maná<span style={{color:"#00e5ff"}}><ButtonCounts stat={stat} dead="fa-droplet-slash" colorDead="lightblue" colorText={"#00e5ff"}/></span></div>
          <div className="stats-salud" style={{color:`orange`}}>Acciones<span style={{color:"yellow"}}><ButtonCounts stat={stat} dead="fa-bolt" colorDead="grey" colorText={"yellow"}/></span></div>
        </div>
        <div>
          <div className="stats-salud"  style={{color:`yellow`}}>Alcance:<span style={{color:"burlywood"}}><ButtonCounts stat={stat} dead="fa-hands" colorDead="grey" colorText={"burlywood"}/></span></div>
          <div className="stats-salud" style={{color:`purple`}}>Mov.<span style={{color:"rgb(247, 0, 255"}}><ButtonCounts stat={stat} dead="fa-shoe-prints" colorDead="grey" colorText={"rgb(247, 0, 255"}/></span></div>
          <div className="stats-salud" style={{color:`lightgrey`}}>Carga<span><ButtonCounts stat={stat} dead="fa-weight-hanging" colorDead="grey" colorText={"orange"}/></span></div>
        </div>
      </div>
    </div>
  );
}
export default StatsSalud;
