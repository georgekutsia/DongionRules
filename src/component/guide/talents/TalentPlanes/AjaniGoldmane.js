import React, { useState } from "react";
import Talent from "../Talent";
import TalentTreeAjaniLuchador from "../talentTree/ajani/TalentTreeAjaniLuchador";
import TalentTreeAjaniHechicero from "../talentTree/ajani/TalentTreeAjaniHechicero";
import TalentTreeAjaniCazador from "../talentTree/ajani/TalentTreeAjaniCazador";


function AjaniGoldmane() {
const [showLuchador, setShowLuchador] = useState(true)
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
      {showLuchador && <TalentTreeAjaniLuchador />}

      {showHechicero && <TalentTreeAjaniHechicero  />}

      {showCazador && <TalentTreeAjaniCazador />}
    </>
  );
}

export default AjaniGoldmane;
