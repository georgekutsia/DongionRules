import React, { useContext } from 'react'
import ButtonCounts from './ButtonCounts'


function StatsDefence( {dColor}) {
  const stats = useContext(0)
//   const st = stats.pj.stats
//   const eq = stats.pj.equipped

//   const dDodge = st.dodge - +eq.dodge
//   let dodgeColor = "white"
//   if(dDodge < st.dodge){
//     dodgeColor = "darksalmon"
//   }
//   const dResist = st.resist - +eq.resist
//   let resistColor = "white"
//   if(dResist < st.resist){
//     resistColor = "darksalmon"
//   }


//   const dBlock = st.block - +eq.block
//   let blockColor = "white"
//   if(dBlock < st.block){
//     blockColor = "darksalmon"
//   }
//   const dParry = st.parry - +eq.parry
//   let parryColor = "white"
//   if(dParry < st.parry){
//     parryColor = "darksalmon"
//   }
// console.log(eq)



  return (
  <div >
    <div  style={{border:`3px ${dColor} solid`}}   className="stats-salud-block">
      {/* <div  className="">
      <div className="stats-defense justify-content-between"  style={{color:`white`}}>Esquiva: <span ><ButtonCounts max={20}  dead="fa-skull-crossbones"  colorDead="green" colorText={"darksalmon"}/></span>  </div>
      <div className="stats-defense justify-content-between"  style={{color:`white`}}>Resistencia: <span ><ButtonCounts max={20}  dead="fa-skull-crossbones"  colorDead="green" colorText={"darksalmon"}/></span>  </div>
      </div>
      <div   className="">
      <div className="stats-defense justify-content-between"  style={{color:`white`}}>Bloqueo: <span ><ButtonCounts max={20}  dead="fa-skull-crossbones"  colorDead="green" colorText={"darksalmon"}/></span>  </div>
      <div className="stats-defense justify-content-between"  style={{color:`white`}}>Parada: <span ><ButtonCounts max={20}  dead="fa-skull-crossbones"  colorDead="green" colorText={"darksalmon"}/></span>  </div>
      </div> */}
    </div>
  </div>
  )
}

export default StatsDefence