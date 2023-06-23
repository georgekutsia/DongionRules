import React, { useContext } from "react";
import { useState } from "react";
import ButtonCounts from "./ButtonCounts";

function StatsSalud() {
   const [vida, setVida] = useState(5)
   const [mana, setMana] = useState(5)
   const [esencia, setEsencia] = useState(0)
   const [tiempo, setTiempo] = useState(0)
   const [acciones, setAcciones] = useState(5)
   const [alcance, setAlcance] = useState(2)
   const [movimiento, setMovimiento] = useState(3)
   const [carga, setCarga] = useState(8)

  return (
    <div >
      <div className="stats-salud-block">
        <div>
          <div className="stats-salud" style={{color:`rgb(0, 245, 0)`}}><i className="fa-solid fa-heart-pulse fa-beat"></i> Vida<span><ButtonCounts stat={vida} dead="fa-skull-crossbones"  colorDead="red" colorText={"rgb(0, 245, 0)"}/></span>  </div>
          <div className="stats-salud" style={{color:`#00e5ff`}}><i className="fa-solid fa-droplet fa-fade"></i> Maná<span style={{color:"#00e5ff"}}><ButtonCounts stat={mana} dead="fa-droplet-slash" colorDead="lightblue" colorText={"#00e5ff"}/></span></div>
          <div className="stats-salud" style={{color:`rgba(97, 46, 192)`}}><i className="fa-solid fa-bolt fa-beat-fade"></i> Esencia<span style={{color:"#00e5ff"}}><ButtonCounts stat={esencia} dead="fa-bolt" colorDead="lightblue" colorText={"#00e5ff"}/></span></div>
          <div className="stats-salud" style={{color:`#00e5ff`}}> <i className="fa-solid fa-hourglass-start"></i><span style={{color:"#00e5ff"}}><ButtonCounts stat={tiempo} dead="fa-hourglass-end" colorDead="lightblue" colorText={"#00e5ff"}/></span></div>
        </div>
        <div>
          <div className="stats-salud" style={{color:`orange`}}><i className="fa-solid fa-person-running fa-bounce"></i> Acciones<span style={{color:"yellow"}}><ButtonCounts stat={acciones} dead="fa-bolt" colorDead="grey" colorText={"orange"}/></span></div>
          <div className="stats-salud"  style={{color:`yellow`}}><i className="fa-solid fa-eye fa-spin"></i> Alcance:<span style={{color:"burlywood"}}><ButtonCounts stat={alcance} dead="fa-hands" colorDead="grey" colorText={"yellow"}/></span></div>
          <div className="stats-salud" style={{color:`rgb(247, 0, 255`}}><i className="fa-solid fa-person-walking-dashed-line-arrow-right fa-spin"></i> Mov.<span style={{color:"rgb(247, 0, 255"}}><ButtonCounts stat={movimiento} dead="fa-shoe-prints" colorDead="grey" colorText={"rgb(247, 0, 255"}/></span></div>
          <div className="stats-salud" style={{color:`lightgrey`}}><i className="fa-solid fa-weight-hanging fa-shake"></i> Carga<span><ButtonCounts stat={carga} dead="fa-weight-hanging" colorDead="grey" colorText={"lightgrey"}/></span></div>
        </div>
      </div>
    </div>
  );
}
export default StatsSalud;
