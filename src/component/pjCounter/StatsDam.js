import React, { useContext } from 'react'
import ButtonCounts from "./ButtonCounts";


function StatsDam() {
  // const stats = useContext(0)
  // const st = stats.pj.stats
  // const eq = stats.pj.equipped

  //   const dFis = st.damFis + +eq.damFis
  //   let dDisFis = "white"
  //   if(dFis > st.damFis){
  //     dDisFis = "orangered"
  //   }

  //   const dDist = st.damDist + +eq.damDist
  //   let dDisDist = "white"
  //   if(dDist > st.damDist){
  //     dDisDist = "orangered"
  //   }
    
  //   const dMag = st.damMag + +eq.damMag
  //   let dDisMag = "white"
  //   if(dMag > st.damMag){
  //     dDisMag = "orangered"
  //   }

  //   const aFis = st.acFis - eq.acFis
  //   let acmag = "white"
  //   if(aFis < st.acFis){
  //     acmag = "darksalmon"
  //   }

  //   const aDist = st.acDist - eq.acDist
  //   let acdist = "white"
  //   if(aDist < st.acDist){
  //     acdist = "darksalmon"
  //   }

  //   const aMag = st.acMag - eq.acMag
  //   let acMag = "white"
  //   if(aMag < st.acMag){
  //     acMag = "darksalmon"
  //   }

  return (
    <div className="stats-damage-block">
      <div>
        <div className="stats-damage  justify-content-between" style={{color: "red"}}>Daño Físico: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20}  dead="fa-0"  colorDead="grey" colorText={"red"}/></span>  </div>
        <div className="stats-damage  justify-content-between" style={{color: "red"}}>Daño Mágico: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20}  dead="fa-0"  colorDead="grey" colorText={"red"}/></span>  </div>
        <div className="stats-damage  justify-content-between" style={{color: "red"}}>Daño Distan: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20}  dead="fa-0"  colorDead="grey" colorText={"red"}/></span>  </div>
      </div>
    <div>
      <div className="stats-damage  justify-content-between" style={{color: "red"}}>Ac Físico: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20}  dead="fa-0"  colorDead="grey" colorText={"darksalmon"}/></span>  </div>
          <div className="stats-damage  justify-content-between" style={{color: "red"}}>Ac Mágico: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20}  dead="fa-0"  colorDead="grey" colorText={"darksalmon"}/></span>  </div>
          <div className="stats-damage  justify-content-between" style={{color: "red"}}>Ac Distan: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20}  dead="fa-0"  colorDead="grey" colorText={"darksalmon"}/></span>  </div>
      </div>
    </div>
  )
}

export default StatsDam