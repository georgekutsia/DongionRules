import React, { useState } from 'react'
import Talent from '../Talent'
import TalentTreeComponent from '../talentTree/ajani/TalentTreeAjaniLuchador'

function GideonJura() {
  const [showLuchador, setShowLuchador] = useState(false)
const [showHechicero, setShowHechicero] = useState(false)
const [showCazador, setShowCazador] = useState(false)

const handleCloseAll = ()=>{
  setShowLuchador(false); setShowHechicero(false); setShowCazador(false); 
}
  const handleLuchador = ()=>{
    handleCloseAll();
    setShowLuchador(!showLuchador)
  }
  const handleHechicero = ()=>{
    handleCloseAll();
    setShowHechicero(!showHechicero)

  }
  const handleCazador = ()=>{
    handleCloseAll();
    setShowCazador(!showCazador)

  }
  return (
    <>
      <Talent  handleLuchador={()=>handleLuchador()}  handleHechicero={()=>handleHechicero()}  handleCazador={()=>handleCazador()}   />
      {showLuchador && <TalentTreeComponent   nombre={"Gideon Luchador"}  />}
      {showHechicero && <TalentTreeComponent   nombre={"Gideon Hechicero"}  />}
      {showCazador && <TalentTreeComponent   nombre={"Gideon Cazador"}  />}
    </>
  )
}

export default GideonJura